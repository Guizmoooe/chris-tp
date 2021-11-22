import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getArticle, getCategories } from "../../lib/api";
import Image from "next/image";
import MainLayout from "../../Layout/MainLayout";
import { Row, Col } from "antd";
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
      <div style={{ width: "50%", textAlign: "center", margin: "auto" }}>
        <h2>{title.toUpperCase()}</h2>
        <span className="separation left" />
        <p>{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        {images.map((image) => (
          <div
            style={{
              width: 450,
              marginBottom: "3.5rem",
              // marginRight: "2rem",
              minHeight: "250px",
              maxHeight: "450px",
              minWidth: "33%",
              maxWidth: "33%",
              textAlign: "center",
              // backgroundImage: `url(${main_image.url})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "contain",
            }}
          >
            <Image
              loader={myLoader}
              height={450}
              width={450}
              src={image.url}
              className="cardImage"
            />
          </div>
        ))}
      </div>
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
