import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getArticles, getArticle, getCategories } from "../../lib/api";
import Image from "next/image";
import MainLayout from "../../Layout/MainLayout";
const Article = ({ article = {}, categories = [] }) => {
  const { title, description, main_image, images } = article;
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  const router = useRouter();
  if (!router.isFallback && !article?.id) {
    return <ErrorPage statusCode={404} />;
  }
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

export async function getServerSideProps({ params: { article: id } }) {
  const { article } = await getArticle({ id });
  const { categories } = await getCategories();

  return {
    props: { article, categories },
  };
}

// export async function getStaticPaths() {
//   const { articles } = await getArticles();
//   return {
//     paths: articles?.map((article) => `/articles/${article.id}`) || [],
//     fallback: true,
//   };
// }
export default Article;
