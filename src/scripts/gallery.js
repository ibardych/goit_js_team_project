import { getRundomCocktailes } from './requests';
import { markupGallery } from './common/general';

const galleryEl = document.querySelector('.gallery-list');

async function createGallery() {
  const promisesGallery = [];

  for (let i = 0; i < 9; i += 1) {
    promisesGallery.push(getRundomCocktailes());
  }

  const results = await Promise.all(promisesGallery);

  galleryEl.innerHTML = markupGallery(results);
}

createGallery();
