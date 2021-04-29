import CardArticle from "../components/CardArticle";
import ContactForm from "../components/ContactForm";
import MainLayout from "../Layout/MainLayout";
import { getArticlesHome, getCategories } from "../lib/api";
import Link from "next/link";

const Home = ({ articles, categories }) => {
  const presentation = {
    description:
      "At chris tp, we believe we know how to recontextualize globally. Think real-time, global. Is it more important for something to be best-of-breed or to be short-term? What do we transition? Anything and everything, regardless of abstruseness! Your budget for extending should be at least three times your budget for actualizing. The capacity to unleash compellingly leads to the capability to engineer intuitively. Think C2C2B, wireless. Without meticulously-planned partnerships, portals are forced to become clicks-and-mortar. Quick: do you have a frictionless strategy for dealing with emerging initiatives? What do we recontextualize? Anything and everything, regardless of semidarkness!",
  };

  return (
    <MainLayout categories={categories}>
      <div style={{ display: "flex", marginLeft: "5%" }}>
        <div id="presentation" style={{ textAlign: "left", width: "30%" }}>
          <h2 stytle={{ marginBottom: 0 }}>À PROPOS</h2>
          <span className="separation left" />
          <p>{presentation.description}</p>
        </div>
        <div id="apropos" />
      </div>
      <h2 style={{ textAlign: "center" }}>
        {"Nos dernières réalisations".toUpperCase()}
      </h2>
      <span className="separation center" />
      <CardArticle articles={articles} />
      {/* TODO <div id="contact" style={{ width: "50%" }}>
        <Link href="/">
          <button className="button-home">Devis</button>
        </Link>
        <Link href="/">
          <button className="button-home">Contacter</button>
        </Link>
        <ContactForm />
      </div> */}
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const { articles } = await getArticlesHome();
  const { categories } = await getCategories();

  return {
    props: { articles, categories },
  };
}
export default Home;
