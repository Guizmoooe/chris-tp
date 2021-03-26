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

const GET_CATEGORIES = `
  query{
      allCategories {
          id
          name
          description
          image { 
              filename
            }
      }
  }`;

const fetchStuff = (gqlQuery) => graphql(gqlQuery);

export const useCategories = () => {
  const { isLoading, data, error } = useQuery("categories", () =>
    fetchStuff(GET_CATEGORIES)
  );

  return {
    isLoading,
    data,
    error,
  };
};
