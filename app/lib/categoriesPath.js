export const getCategoriesPath = (categories) =>
  categories.map((category) => ({
    params: { category: category.name },
  }));
