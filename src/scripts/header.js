import { requestCocktails } from './requests';
import { loaderPattern } from './common/patterns';
import { outputPagination } from './common/general';

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
      outputPagination(uniqueDrinks);
    })
    .catch(error => console.log(error))
    .finally();
});
