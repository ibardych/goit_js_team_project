import { createRequstByLetter } from './hero_api';
import { markupGallery } from '../scripts/common/general';
import { storeData } from '../scripts/gallery';
import { getRundomCocktailes } from './hero_api';
import { markupGalleryTwo } from '../scripts/common/general';

import jQuery from 'jquery';
import Pagination from 'tui-pagination';

const alphabetButton = document.querySelector('.selector');
const alphabetContainer = document.querySelector('.container-alphabet');
const selector = document.querySelector('.custom-select');
const galleryEl = document.querySelector('.gallery-list');
const galleryError = document.querySelector('.gallery-error');
const cardContainer = document.querySelector('.gallery-list');

if (alphabetContainer) {
  alphabetContainer.addEventListener('click', onLetterClick);
  selector.addEventListener('change', onLetterChoose);
}

// getRundomCocktailes('d').then(data => console.log(data))

// async function myFunction() {
//     const data = await getRundomCocktailes('a'); // Запит на випадкові напої з назвами, що починаються на літеру "a"
//     console.log(data); // Список випадкових напоїв з відповідного запиту API
//   }

//   myFunction();
export function onLetterClick(evt) {
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }

  const currentLetter = evt.target.textContent;
  const requestedInfo = createRequstByLetter(currentLetter).then(data =>
    galleryCardsRender(data.drinks)
  );
}

export function onLetterChoose(evt) {
  const selectedOption = evt.target.options[evt.target.selectedIndex];

  const selectedOptionText = selectedOption.textContent;

  createRequstByLetter(selectedOptionText).then(data =>
    console.log(markupGallery(data.drinks))
  );
}

function galleryCardsRender(data) {
  if (!data) {
    galleryEl.innerHTML = '';
    galleryError.innerHTML = 'Немає відповідності';
    return;
  }
  galleryError.innerHTML = '';
  //   galleryEl.innerHTML = markupGalleryTwo(data);
  const dataSource = markupGalleryTwo(data);
  //   console.log(dataSource);

  //     const options = {
  //         dataSource: dataSource,
  //         pageSize: 6,
  //         callback: function(data, pagination) {
  //             data.forEach(function(item) {

  //               galleryEl.appendChild(item);
  //             });
  //           }

  //       };

  //       const paginationContainer = document.getElementById('pagination-container');
  //       const paginationInstance = new Pagination(paginationContainer, options);

  const container = document.getElementById('pagination-container');

  const options = {
    totalItems: 100,
    itemsPerPage: 10,
    visiblePages: 5,
    centerAlign: true,
  };

  const pagination = new Pagination(container, options);
}
