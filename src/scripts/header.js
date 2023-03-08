import { requestCocktails } from './requests';
import { markupGalleryTwo } from './common/general';
import { loaderPattern } from './common/patterns';
import Pagination from 'tui-pagination';

import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('tui-pagination-container');

const options = {
  // below default value of options
  totalItems: 0,
  itemsPerPage: 6,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const refs = {
  searchForm: document.querySelector('form[name=search-form]'),
  galleryList: document.querySelector('.gallery-list'),
  errorSection: document.querySelector('[data-error-section]'),
  galleryTitle: document.querySelector('h1.gallery-title'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchText = e.target.elements.search.value;

  refs.galleryList.innerHTML = `<div class="gallery-loading">${loaderPattern}</div>`;

  refs.errorSection.classList.add('visually-hidden');
  refs.galleryTitle.classList.remove('visually-hidden');
  refs.galleryList.classList.remove('visually-hidden');
  refs.galleryList.classList.add('show-all-items');

  requestCocktails(searchText)
    .then(data => {
      const resutlt1 = data[0].data.drinks || [];
      const resutlt2 = data[1].data.drinks || [];

      const allDrinks = resutlt1.concat(resutlt2);

      if (!allDrinks.length) {
        refs.galleryList.innerHTML = ``;
        refs.galleryTitle.classList.add('visually-hidden');
        refs.errorSection.classList.remove('visually-hidden');
        refs.galleryList.classList.add('visually-hidden');
        return;
      }

      const uniqueDrinks = Array.from(
        new Set(allDrinks.map(obj => obj.idDrink))
      ).map(idDrink => {
        return allDrinks.find(obj => obj.idDrink === idDrink);
      });

      const allItems = markupGalleryTwo(uniqueDrinks);
      const totalItems = allItems.length;

      const itemsPerPage = getItemsPerPage();

      options.totalItems = totalItems;
      options.itemsPerPage = itemsPerPage;
      const pagination = new Pagination(container, options);

      refs.galleryList.innerHTML = allItems.slice(0, itemsPerPage).join('');

      pagination.on('afterMove', event => {
        const currentPage = event.page;

        const startKey = (currentPage - 1) * itemsPerPage;
        const endKey = startKey + itemsPerPage;

        const selectedItems = allItems.slice(startKey, endKey);

        refs.galleryList.innerHTML = selectedItems.join('');
      });
    })
    .catch(error => console.log(error))
    .finally();
});

function getItemsPerPage() {
  const windowWidth = window.innerWidth;
  let itemsPerPage = 3;
  if (windowWidth >= 768) itemsPerPage = 6;
  if (windowWidth >= 1280) itemsPerPage = 9;
  return itemsPerPage;
}
