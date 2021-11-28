import CardArticle from "../components/CardArticle";
import {
  getCategories,
  getArticlesByCategory,
  getCurrentCategory,
} from "../lib/api";
import MainLayout from "../Layout/MainLayout";
import { useDeviceContext } from "../context/DeviceContext";
const Category = ({ categories = [], articles = [], title, description }) => {
  const currentDevice = useDeviceContext();
  return (
    <MainLayout categories={categories}>
      <div style={{ width: "50%", margin: "auto" }}>
        {currentDevice && <h2>{title}</h2>}
        {!currentDevice && <h2 style={{ fontSize: "2rem" }}>{title}</h2>}
        <span className={currentDevice ? "separation left" : "separation"} />
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
