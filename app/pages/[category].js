import CardArticle from "../components/CardArticle";
import { getArticlesByCategory } from "../lib/api";
const Category = ({ allArticles = [] }) => {
  return <CardArticle articles={allArticles} />;
};

export async function getServerSideProps({ params: { category } }) {
  const allArticles = await getArticlesByCategory(category);

  return {
    props: { allArticles },
  };
}
export default Category;
