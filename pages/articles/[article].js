import { getArticles, getArticle, getCategories } from "../../lib/api";
import Image from "next/image";
import MainLayout from "../../Layout/MainLayout";
const Article = ({ article = {}, categories = [] }) => {
  const { title, description, main_image, images } = article;
  console.log({ images });
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <MainLayout categories={categories}>
      <h2>{title.toUpperCase()}</h2>
      <span className="separation" />
      <p>{description}</p>
      <Image loader={myLoader} width={400} height={275} src={main_image.url} />
      {images.map((image) => (
        <Image loader={myLoader} width={400} height={275} src={image.url} />
      ))}
    </MainLayout>
  );
};

export async function getStaticProps({ params: { article: id } }) {
  const { article } = await getArticle({ id });
  const { categories } = await getCategories();
  return {
    props: { article, categories },
  };
}

export async function getStaticPaths() {
  const { articles } = await getArticles();
  return {
    paths: articles?.map((article) => `/article/${article.id}`) || [],
    fallback: true,
  };
}
export default Article;
