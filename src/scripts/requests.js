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

const requestCocktails = searchText => {
  const result1 = axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  );

  const result2 = axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`
  );

  return Promise.all([result1, result2]);
};

export {
  requestCocktail,
  requestIngredient,
  getRundomCocktailes,
  requestCocktails,
};
