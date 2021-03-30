import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { article } = router.query;

  return (
    <div>
      <h1>TOTO</h1>
    </div>
  );
};

export default Article;
