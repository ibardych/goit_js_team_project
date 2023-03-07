function markupGallery(data) {
  return data
    .map(
      ({ strDrinkThumb, strDrink, idDrink }) => `<li class="gallery-item">
        <img class="gallery-item__img_margin gallery-item__img"
    src="${strDrinkThumb}" alt="${strDrink} photo" />
      <h2 class="gallery-item__title gallery-item__title_margin">${strDrink}</h2>
      <div class="button-container">
        <button class="button-more" type="button" data-cocktailid="${idDrink}">Learn More</button>
        <button class="button-favorite" data-cocktailid="${idDrink} data-add-remove-favorite="" type="button">
          <span>Add to</span>
        
        <svg class="button-favorite__icon" xmlns="http://www.w3.org/2000/svg" width="21" height="19" fill="none"><path fill="#FD5103" d="m10.5 19-1.523-1.367C3.57 12.798 0 9.61 0 5.695 0 2.505 2.541 0 5.775 0c1.827 0 3.58.839 4.725 2.164A6.324 6.324 0 0 1 15.225 0C18.459 0 21 2.506 21 5.695c0 3.914-3.57 7.103-8.977 11.949L10.5 19Z"/><path  d="m10.5 17-1.232-1.079C4.89 12.104 2 9.586 2 6.496 2 3.978 4.057 2 6.675 2c1.479 0 2.898.662 3.825 1.708A5.175 5.175 0 0 1 14.325 2C16.943 2 19 3.978 19 6.496c0 3.09-2.89 5.607-7.268 9.433L10.5 17Z"/></svg>
        </button>
      </div>
    </li>`
    )
    .join('');
}

export { markupGallery };
