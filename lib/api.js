const graphql = (query, variables) =>
  fetch("https://backoffice-chris-tp.herokuapp.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((result) => result.json());

const GET_CATEGORIES_HOME = `
  {
      categories {
        id
        title
      }
  }`;
const GET_ARTICLES_HOME = `
{
  articles(sort: "updatedAt:DESC", limit: 4) {
    id
    title
    description
    main_image {
      url
    }
  }
}
`;
const GET_ARTICLES = `
{articles{ id
  title
  description
  main_image {
    url
  }
  images{url}}}`;
const GET_ARTICLES_BY_CATEGORY = `
query($id: ID!){
  articles(where:{categories:{id: $id}}){
    id
    title
    description
    main_image {
      url
    }
  }}
`;

const GET_CURRENT_CATEGORY = `
query($id: ID!){category(id: $id){title}}
`;

const GET_ARTICLE_BY_ID = `
query($id: ID!){article(id:$id){id title description main_image{url} images{url}}}
`;

const fetchStuff = (gqlQuery, variables) => graphql(gqlQuery, variables);

export const getCategories = async () => {
  const {
    data: { categories },
  } = await fetchStuff(GET_CATEGORIES_HOME);

  return { categories };
};

export const getArticles = async () => {
  const {
    data: { articles },
  } = await fetchStuff(GET_ARTICLES);

  return { articles };
};

export const getCurrentCategory = async (id) => {
  const {
    data: {
      category: { title },
    },
  } = await fetchStuff(GET_CURRENT_CATEGORY, id);
  console.log({ title });
  return { title };
};
export const getArticlesHome = async () => {
  const {
    data: { articles },
  } = await fetchStuff(GET_ARTICLES_HOME);

  return {
    articles,
  };
};
export const getArticlesByCategory = async (id) => {
  const {
    data: { articles },
  } = await fetchStuff(GET_ARTICLES_BY_CATEGORY, id);

  return {
    articles,
  };
};

export const getArticle = async (id) => {
  const {
    data: { article },
  } = await fetchStuff(GET_ARTICLE_BY_ID, id);

  return {
    article,
  };
};
