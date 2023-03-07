const getCocktailPattern = () => {
  const pattern1 = `
    <div class="modal-cocktail__content">
      <!--------- Name and Instructions for mobile version --------->
      <div>
        <h2 class="modal-cocktail__title hidden-in-tablet">Negroni</h2>
        <h3 class="modal-cocktail__subtitle hidden-in-tablet">Instructions:</h3>
        <p class="modal-cocktail__text">
          Add the gin, Campari and sweet vermouth to a mixing glass filled with
          ice, and stir until well-chilled. Strain into a rocks glass filled
          with large ice cubes. Garnish with an orange peel.
        </p>
      </div>
      <!--------- Name and Instructions for mobile version--------->

      <div class="modal-cocktail__card">
        <img
          class="modal-cocktail__img"
          src="https://elipili.md/wp-content/uploads/2022/01/negroni-600x618-1.jpg"
          alt=""
          width="280px"
          height="280px"
        />

        <div class="modal-cocktail__bigcard">
          <h2 class="modal-cocktail__title hidden-in-mobile">Negroni</h2>
          <h3 class="sub-ingredients">Ingredients:</h3>
          <p class="modal-cocktail__smalltitle">Per cocktail</p>
          <ul class="modal-cocktail__list">
            <li class="lish">
              <a
                href="#"
                class="modal-cocktail__link"
                data-ingredientid="1"
                data-modal-ingredient-open
                >✶ Ice</a
              >
            </li>
            <li>
              <a
                href="#"
                class="modal-cocktail__link"
                data-ingredientid="2"
                data-modal-ingredient-open
                >✶ 1 ounce gin</a
              >
            </li>
            <li>
              <a
                href="#"
                class="modal-cocktail__link"
                data-ingredientid="3"
                data-modal-ingredient-open
                >✶ 1 ounce Campari</a
              >
            </li>
            <li>
              <a
                href="#"
                class="modal-cocktail__link"
                data-ingredientid="4"
                data-modal-ingredient-open
                >✶ 1 ounce sweet vermouth</a
              >
            </li>
            <li>
              <a
                href="#"
                class="modal-cocktail__link"
                data-ingredientid="5"
                data-modal-ingredient-open
                >✶ Garnish: orange peel</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!--------- Instructions shown in tablet and desktop --------->
      <div class="modal-cocktail__tabinstructions">
        <h3 class="modal-cocktail__subtitle hidden-in-mobile">Instructions:</h3>
        <p class="hidden-in-mobile modal-cocktail__text">
          Add the gin, Campari and sweet vermouth to a mixing glass filled with
          ice, and stir until well-chilled. Strain into a rocks glass filled
          with large ice cubes. Garnish with an orange peel.
        </p>
      </div>
      <!--------- Instructions shown in tablet and desktop --------->
    </div>
  `;

  return pattern1;
};

const getIngredientPattern = ({
  id,
  title,
  country,
  subtitle,
  description,
  type,
  ingredient,
  abv,
}) => {
  const pattern1 = `
    <div class="modal-ingr__content">
      <h2 class="modal-ingr__title">${title}</h2>
      <h3 class="modal-ingr__subtitle">subtitle</h3>
      <div class="modal-ingr__horiontal-line"></div>
      <div>
        <p class="modal-ingr__description">
          ${description}
        </p>
        <ul class="modal-ingr__list">
  `;

  let patternType = ``;
  if (type)
    patternType = `
      <li class="modal-ingr__list__item">
        <span class="modal-ingr__list__item__star">✶ </span>Type: ${type}
      </li>
    `;

  let patternCountry = ``;
  if (country)
    patternCountry = `
      <li class="modal-ingr__list__item">
        <span class="modal-ingr__list__item__star">✶ </span>Country of
        origin: ${country}
      </li>
    `;

  let patternABV = ``;
  if (abv)
    patternABV = `
      <li class="modal-ingr__list__item">
        <span class="modal-ingr__list__item__star">✶ </span>Alcohol by
        volume: ${abv}
      </li>
    `;

  let patternIngredient = ``;
  if (ingredient)
    patternIngredient = `
      <li class="modal-ingr__list__item">
        <span class="modal-ingr__list__item__star">✶ </span>Flavour: ${ingredient},
        spicy and sweet
      </li>
    `;

  // const pattern2 = '';
  const pattern2 =
    patternType + patternCountry + patternABV + patternIngredient;

  const pattern3 = `
        </ul>
      </div>
      <div class="modal-ingr__btns">
        <button
          type="button"
          class="button-more modal-ingr__btn"
          data-modal-authentication-open
        >
          Add to favorite
        </button>
        <button
          type="button"
          class="button-more modal-ingr__btn"
          style="display: none"
        >
          Remove from favorite
        </button>
      </div>
    </div>
  `;

  return pattern1 + pattern2 + pattern3;
};

const loaderPattern = `
  <div data-loader='' class="loader-type1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;

export { getCocktailPattern, getIngredientPattern, loaderPattern };
