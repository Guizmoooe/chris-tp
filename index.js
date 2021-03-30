const { Keystone } = require("@keystonejs/keystone");
const { StaticApp } = require("@keystonejs/app-static");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const {
  Text,
  Checkbox,
  Password,
  File,
  Relationship,
} = require("@keystonejs/fields");
const { LocalFileAdapter } = require("@keystonejs/file-adapters");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
// const expressSession = require("express-session");
// const { MongoStore } = require("connect-mongo")(expressSession);
const initialiseData = require("./initial-data");
require("dotenv").config();

const PROJECT_NAME = "chris_tp";
const adapterConfig = {
  mongoUri: process.env.MONGO_URI,
};
const { staticPath, distDir } = require("./config");
const dev = process.env.NODE_ENV !== "production";

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
  cookie: {
    // secure: process.env.NODE_ENV === "production",
    secure: false,
  },
  cookieSecret:
    "edd9eab2319fc6f8629c72f1d2426bd3a6f9e9b3b7c4e42008ad652f4889cfcc",
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

// File adapter configurations
const fileAdapter = new LocalFileAdapter({
  src: `${dev ? "" : `${distDir}/`}${staticPath}/uploads`,
  path: `app/public/uploads`,
});

keystone.createList("User", {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList("Category", {
  fields: {
    name: { type: Text, isRequired: true },
    description: {
      type: Text,
    },
    image: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await fileAdapter.delete(existingItem.image);
          }
        },
      },
    },
  },
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    },
  },
  access: {
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
  },
});

keystone.createList("Article", {
  fields: {
    title: { type: Text },
    description: {
      type: Text,
    },
    main_image: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await fileAdapter.delete(existingItem.image);
          }
        },
      },
    },
  },
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    },
    image: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await fileAdapter.delete(existingItem.image);
          }
        },
      },
    },
  },
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    },
    category: { type: Relationship, ref: "Category", many: true },
  },
  access: {
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: { protectIdentities: process.env.NODE_ENV === "production" },
});

const adminApp = new AdminUIApp({
  name: "Chris TP Admin",
  adminPath: "/admin",
  authStrategy,
  isAccessAllowed: ({ authentication: { item: user } }) =>
    !!user && !!user.isAdmin,
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    adminApp,
    new StaticApp({ path: "app/public", src: "app/public" }),
    new NextApp({ dir: "app" }),
  ],
  distDir,
  configureExpress: (app) => {
    app.set("trust proxy", 1);
  },
};
