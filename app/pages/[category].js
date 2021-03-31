import CardArticle from "../components/CardArticle";
import { getCategoriesPath } from "../lib/categoriesPath";
const Category = ({ allArticles = [] }) => {
  return <CardArticle articles={allArticles} />;
};
export async function getStaticPaths() {
  const query = `{allCategories{name}}`;
  const {
    data: { allCategories },
  } = await fetch("http://localhost:3000/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  }).then(function (result) {
    return result.json();
  });

  return {
    paths: getCategoriesPath(allCategories),
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const query = `
  query{
    allArticles(where:{category_some:{name:"${category}"}}){
    title
    description
    main_image{
      filename
    }}}`;
  const res = await fetch("http://localhost:3000/admin/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const {
    data: { allArticles },
  } = await res.json();

  return {
    props: { allArticles },
  };
}
export default Category;
