import axios from 'axios';

const requestCocktail = ({ cocktailId }) => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );
};

const requestIngredient = ({ ingredientName }) => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
  );
};

async function getRundomCocktailes() {
  const response = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  return response.data.drinks[0];
}

export { requestCocktail, requestIngredient, getRundomCocktailes };
