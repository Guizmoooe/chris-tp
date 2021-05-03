import CardArticle from "../components/CardArticle";
import {
  getCategories,
  getArticlesByCategory,
  getCurrentCategory,
} from "../lib/api";
import MainLayout from "../Layout/MainLayout";
const Category = ({ categories = [], articles = [], title, description }) => {
  return (
    <MainLayout categories={categories}>
      <div style={{ width: "50%", margin: "auto" }}>
        <h2>{title}</h2>
        <span className="separation left" />
        <p>{description}</p>
      </div>
      <CardArticle articles={articles} />
    </MainLayout>
  );
};

export async function getStaticProps({ params: { category: id } }) {
  const { categories } = await getCategories();
  const { articles } = await getArticlesByCategory({ id });
  const { title, description } = await getCurrentCategory({ id });
  return {
    props: { categories, articles, title, description },
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
