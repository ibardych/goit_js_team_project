import axios from 'axios';
import { getRundomCocktailes } from './requests';

const galleryEl = document.querySelector('.gallery-list');

async function createGallery() {
  const screenWidth = window.innerWidth;
  const promisesGallery = [];
  let numColumns;

  if (screenWidth >= 1280) {
    numColumns = 9;
  } else if (screenWidth < 1280 && screenWidth >= 768) {
    numColumns = 6;
  } else {
    numColumns = 3;
  }

  galleryEl.innerHTML = '';

  for (let i = 0; i < numColumns; i += 1) {
    promisesGallery.push(getRundomCocktailes());
  }

  const results = await Promise.all(promisesGallery);

  const galleryItem = results
    .map(
      ({ strDrinkThumb, strDrink, idDrink }) => `<li class="gallery-item">
        <img class="gallery-item__img_margin gallery-item__img"
    src="${strDrinkThumb}" alt="${strDrink} photo" />
      <h2 class="gallery-item__title gallery-item__title_margin">${strDrink}</h2>
      <div class="button-container">
        <button class="button-more" type="button" cocktailid="${idDrink}">Learn More</button>
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

  galleryEl.insertAdjacentHTML('beforeend', galleryItem);
}

createGallery();
window.addEventListener('resize', createGallery);
