import { useRouter } from "next/router";
import CardArticle from "../components/CardArticle";
import { useArticles } from "../lib/api";
const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const {
    isLoading,
    data: { data: { allArticles = [] } = {} } = {},
    error,
  } = useArticles();
  return <CardArticle articles={allArticles} />;
};

export default Category;
