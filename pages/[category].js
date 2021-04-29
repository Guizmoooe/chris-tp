import CardArticle from "../components/CardArticle";
import {
  getCategories,
  getArticlesByCategory,
  getCurrentCategory,
} from "../lib/api";
import MainLayout from "../Layout/MainLayout";
const Category = ({ categories = [], articles = [], title }) => {
  return (
    <MainLayout categories={categories}>
      <h2>{title}</h2>
      <CardArticle articles={articles} />
    </MainLayout>
  );
};

export async function getStaticProps({ params: { category: id } }) {
  const { categories } = await getCategories();
  const { articles } = await getArticlesByCategory({ id });
  const { title } = await getCurrentCategory({ id });
  return {
    props: { categories, articles, title },
  };
}

export async function getStaticPaths() {
  const { categories } = await getCategories();
  return {
    paths: categories?.map((category) => `/${category.id}`) || [],
    fallback: true,
  };
}
export default Category;