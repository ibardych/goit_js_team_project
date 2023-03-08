import { getRundomCocktailes } from './requests';
import { outputPagination } from '../scripts/common/general';

const galleryEl = document.querySelector('.gallery-list');

function createGallery() {
  const promisesGallery = [];

  for (let i = 0; i < 9; i += 1) {
    promisesGallery.push(getRundomCocktailes());
  }

  Promise.all(promisesGallery)
    .then(data => {
      outputPagination(data);
    })
    .catch();
}

const uri = window.location.pathname;

if (uri == '/' || uri == '/index.html') {
  createGallery();
}
