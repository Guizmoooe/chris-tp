import { useRouter } from "next/router";
import { getArticle } from "../../lib/api";
import Image from "next/image";
const Article = ({ currentArticle }) => {
  const {
    title,
    description,
    main_image: { filename },
  } = currentArticle[0];

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image width={500} height={500} src={`/uploads/${filename}`} />
    </div>
  );
};

export async function getServerSideProps({ params: { article } }) {
  const currentArticle = await getArticle(article);
  console.log({ currentArticle });
  return {
    props: { currentArticle },
  };
}
export default Article;
