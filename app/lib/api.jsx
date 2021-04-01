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

const fetchStuff = (gqlQuery) => graphql(gqlQuery);

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

//TEST

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch("http://localhost:3000/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    // console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllCategories() {
  const { data: { allCategories = [] } = {} } = await fetchAPI(`
    {
      allCategories {
        name
      }
    }
  `);
  return allCategories;
}

export async function getArticlesByCategory(category) {
  const { allArticles } = await fetchAPI(`
  {
    allArticles(where:{category_some:{name:"${category}"}}){
    title
    description
    main_image{
      filename
    }}}`);

  return allArticles;
}

export async function getArticle(article) {
  const { allArticles } = await fetchAPI(`
  {
    allArticles(where:{title:"${article}"}){
    title
    description
    main_image{
      filename
    }}}`);
  console.log({ allArticles });
  return allArticles;
}
