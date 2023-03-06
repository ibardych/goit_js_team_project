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
  `;

  return pattern1 + pattern2 + pattern3;
};

const loaderPattern = `
  <div data-loader='' class="loader-type1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;

export { getIngredientPattern };
