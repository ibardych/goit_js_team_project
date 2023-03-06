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

export { requestCocktail, requestIngredient };
