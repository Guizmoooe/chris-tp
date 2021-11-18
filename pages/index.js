/* eslint-disable react/react-in-jsx-scope */
import CardArticle from "../components/CardArticle";
import MainLayout from "../Layout/MainLayout";
import { getArticlesHome, getCategories } from "../lib/api";
import { PropTypes } from "prop-types";
import { useDeviceContext } from "../context/DeviceContext";
const Home = ({ articles, categories }) => {
  const currentDevice = useDeviceContext();
  const presentation = {
    description:
      "At chris tp, we believe we know how to recontextualize globally. Think real-time, global. Is it more important for something to be best-of-breed or to be short-term? What do we transition? Anything and everything, regardless of abstruseness! Your budget for extending should be at least three times your budget for actualizing. The capacity to unleash compellingly leads to the capability to engineer intuitively. Think C2C2B, wireless. Without meticulously-planned partnerships, portals are forced to become clicks-and-mortar. Quick: do you have a frictionless strategy for dealing with emerging initiatives? What do we recontextualize? Anything and everything, regardless of semidarkness!",
  };
  const desktopStyle = {
    display: "flex",
    marginLeft: "5%",
  };

  const mobileStyle = {
    display: "flex",
    margin: "auto",
  };

  return (
    <>
      {currentDevice ? (
        <MainLayout categories={categories}>
          <div style={desktopStyle}>
            <div id="presentation" style={{ textAlign: "left", width: "30%" }}>
              <h2 stytle={{ marginBottom: 0 }}>À PROPOS</h2>
              <span className="separation left" />
              <p>{presentation.description}</p>
            </div>
            {currentDevice && <div id="apropos" />}
          </div>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            {"Nos dernières réalisations".toUpperCase()}
          </h2>
          <span className="separation center" />
          <CardArticle articles={articles} />
        </MainLayout>
      ) : (
        <MainLayout categories={categories}>
          <div style={mobileStyle}>
            <div
              id="presentation"
              style={{ textAlign: "center", width: "70%" }}
            >
              <h3 stytle={{ marginBottom: 0 }}>À PROPOS</h3>
              <span className="separation left" />
              <p>{presentation.description}</p>
            </div>
            {currentDevice && <div id="apropos" />}
          </div>
          <h3 style={{ textAlign: "center", marginTop: "50px" }}>
            {"Nos dernières réalisations".toUpperCase()}
          </h3>
          <span className="separation center" />
          <CardArticle articles={articles} />
        </MainLayout>
      )}
    </>
  );
};

export async function getStaticProps() {
  const { articles } = await getArticlesHome();
  const { categories } = await getCategories();

  return {
    props: { articles, categories },
  };
}

Home.propTypes = {
  articles: PropTypes.array,
  categories: PropTypes.array,
};
export default Home;
