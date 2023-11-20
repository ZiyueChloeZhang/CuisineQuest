export const fetchRecipes = async () => {
  try {
    const response = await fetch('https://localhost:8000/recipes$location=America');
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
};
