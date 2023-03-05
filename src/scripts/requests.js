import axios from 'axios';

const requestIngredient = ({ ingredientId }) => {
  return axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ingredientId}`
  );
};

export { requestIngredient };
