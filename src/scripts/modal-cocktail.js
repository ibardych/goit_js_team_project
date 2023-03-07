import { requestCocktail } from './requests';
import { getCocktailPattern, loaderPattern } from './common/patterns';
import { checkWindowWidth } from './common/modals';
import PerfectScrollbar from 'perfect-scrollbar';

const refs = {
  galleryListEl: document.querySelector('.gallery-list'),
  closeModalBtn: document.querySelector('[data-modal-cocktail-close]'),
  modal: document.querySelector('[data-modal-cocktail]'),
  modalWindow: document.querySelector('[data-modal-cocktail-window]'),
  modalBts: document.querySelector('[data-modal-cocktail-buttons]'),
  modalContentEl: document.querySelector('[data-modal-cocktail-content]'),
};

const psModal = new PerfectScrollbar(refs.modalWindow);

refs.galleryListEl.addEventListener('click', e => {
  if (e.target.classList.contains('button-more')) {
    refs.modalContentEl.innerHTML = loaderPattern;
    refs.modal.classList.toggle('is-hidden');

    const cocktailId = e.target.dataset.cocktailid;

    requestCocktail({ cocktailId: cocktailId })
      .then(response => {
        console.log(response.data);
        refs.modalBts.classList.remove('visually-hidden');
        renderContent(response.data.drinks[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }
});

const renderContent = data => {
  refs.modalWindow.scrollTop = 0;

  // const cocktailData = {
  //   id: data.idIngredient,
  //   country: '',
  //   alcohol: data.strAlcohol,
  //   title: data.strIngredient,
  //   subtitle: '',
  //   description: data.strDescription,
  //   abv: data.strABV,
  //   type: data.strType,
  //   ingredient: data.strIngredient,
  // };

  const content = getCocktailPattern();
  refs.modalContentEl.innerHTML = content;

  finalizeModal();
};

const finalizeModal = () => {
  psModal.update();

  checkWindowWidth();
};
