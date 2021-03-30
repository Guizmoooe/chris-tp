import React from "react";
import { useMediaQuery } from "react-responsive";
import { useArticles } from "../lib/api";
import CarouselCustom from "../components/CarouselCustom";
import CardArticle from "../components/CardArticle";
import { Burger } from "../components/Burger";
import Link from "next/link";

const Home = () => {
  const {
    isLoading,
    data: { data: { allArticles = [] } = {} } = {},
    error,
  } = useArticles();

  const presentation = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

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
      <CardArticle articles={allArticles} currentDevice={isDesktopOrLaptop} />
    </>
  );
};

export default Home;
