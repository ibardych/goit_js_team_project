const getCocktailPattern = ({ title, image, instructions, ingredients }) => {
  const pattern1 = `
    <div class="modal-cocktail__content">
      <!--------- Name and Instructions for mobile version --------->
      <div>
        <h2 class="modal-cocktail__title hidden-in-tablet">${title}</h2>
        <h3 class="modal-cocktail__subtitle hidden-in-tablet">Instructions:</h3>
        <p class="modal-cocktail__text">
          ${instructions}
        </p>
      </div>
      <!--------- Name and Instructions for mobile version--------->

      <div class="modal-cocktail__card">
        <img
          class="modal-cocktail__img"
          src="${image}"
          alt="${title}"
          width="280px"
          height="280px"
        />

        <div class="modal-cocktail__bigcard">
          <h2 class="modal-cocktail__title hidden-in-mobile">${title}</h2>
          <h3 class="sub-ingredients">Ingredients:</h3>
          <p class="modal-cocktail__smalltitle">Per cocktail</p>
          <ul class="modal-cocktail__list">
  `;

  const pattern2 = ingredients.map(ingredient => {
    return `<li class="lish">
        <a
          href="#"
          class="modal-cocktail__link"
          data-ingredientname="${ingredient}"
          >✶ ${ingredient}</a
        >
      </li>`;
  });

  const pattern3 = `
          </ul>
        </div>
      </div>

      <!--------- Instructions shown in tablet and desktop --------->
      <div class="modal-cocktail__tabinstructions">
        <h3 class="modal-cocktail__subtitle hidden-in-mobile">Instructions:</h3>
        <p class="hidden-in-mobile modal-cocktail__text">
          ${instructions}
        </p>
      </div>
      <!--------- Instructions shown in tablet and desktop --------->
    </div>
  `;

  return pattern1 + pattern2.join('') + pattern3;
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
    </div>
  `;

  return pattern1 + pattern2 + pattern3;
};

const loaderPattern = `
  <div data-loader='' class="loader-type1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;

export { getCocktailPattern, getIngredientPattern, loaderPattern };
