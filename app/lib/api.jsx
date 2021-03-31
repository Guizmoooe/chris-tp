import { useQuery } from "react-query";

const graphql = (query, variables = {}) =>
  fetch("/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function (result) {
    return result.json();
  });

const GET_CATEGORIES_HOME = `
  query{
      allCategories {
        name
      }
  }`;
const GET_ARTICLES_HOME = `
  query{
    allArticles(sortBy:updatedAt_DESC, first: 3){
      title
      description 
      main_image{ 
        filename
      }
    }
  }`;

const fetchStuff = (gqlQuery, name) => graphql(gqlQuery, name);

export const useCategories = () => {
  const { isLoading, data, error } = useQuery("categories", () =>
    fetchStuff(GET_CATEGORIES_HOME)
  );

  return {
    isLoading,
    data,
    error,
  };
};
export const useHomeArticles = () => {
  const { isLoading, data, error } = useQuery("articles", () =>
    fetchStuff(GET_ARTICLES_HOME)
  );

  return {
    isLoading,
    data,
    error,
  };
};
