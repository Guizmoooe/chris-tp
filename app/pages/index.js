import { useHomeArticles } from "../lib/api";
import CardArticle from "../components/CardArticle";
import Link from "next/link";

const Home = () => {
  const {
    // todo isLoading,
    data: { data: { allArticles = [] } = {} } = {},
    // todo error,
  } = useHomeArticles();

  const presentation = {
    description:
      "At chris tp, we believe we know how to recontextualize globally. Think real-time, global. Is it more important for something to be best-of-breed or to be short-term? What do we transition? Anything and everything, regardless of abstruseness! Your budget for extending should be at least three times your budget for actualizing. The capacity to unleash compellingly leads to the capability to engineer intuitively. Think C2C2B, wireless. Without meticulously-planned partnerships, portals are forced to become clicks-and-mortar. Quick: do you have a frictionless strategy for dealing with emerging initiatives? What do we recontextualize? Anything and everything, regardless of semidarkness!",
  };
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  return (
    <>
      <div id="presentation">
        <p>{presentation.description}</p>
        <Link href="/">
          <button className="button-home">Devis</button>
        </Link>
        <Link href="/">
          <button className="button-home">Contacter</button>
        </Link>
      </div>
      <h2>Nos dernières réalisations</h2>
      <CardArticle articles={allArticles} />
    </>
  );
};

export default Home;
