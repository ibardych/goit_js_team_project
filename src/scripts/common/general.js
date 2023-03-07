function markupGallery(data) {
  return data
    .map(
      ({ strDrinkThumb, strDrink, idDrink }) => `<li class="gallery-item">
        <img class="gallery-item__img_margin gallery-item__img"
    src="${strDrinkThumb}" alt="${strDrink} photo" />
      <h2 class="gallery-item__title gallery-item__title_margin">${strDrink}</h2>
      <div class="button-container">
        <button class="button-more" type="button" data-cocktailid="${idDrink}">Learn More</button>
        <button class="button-favorite" type="button">
          Add to
          <svg class="button-favorite__icon">
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>
        </button>
      </div>
    </li>`
    )
    .join('');
}

export { markupGallery };
