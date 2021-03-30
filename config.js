module.exports = {
  port: process.env.PORT || 3000,
  staticRoute: "app/public", // The URL portion
  staticPath: "app/public", // The local path on disk
  distDir: "dist",
};
