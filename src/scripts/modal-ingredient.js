import { requestIngredient } from './requests';
import { getIngredientPattern, loaderPattern } from './common/patterns';
import PerfectScrollbar from 'perfect-scrollbar';

const refs = {
  modalWindow: document.querySelector('[data-modal-ingredient-window]'),
  modalContentEl: document.querySelector('[data-modal-ingredient-content]'),
  modal: document.querySelector('[data-modal-ingredient]'),
  modalCocktail: document.querySelector('.modal-cocktail'),
  modalBts: document.querySelector('[data-modal-ingredient-buttons]'),
};

const psModal = new PerfectScrollbar(refs.modalWindow);

refs.modalCocktail.addEventListener('click', e => {
  if (!e.target.hasAttribute('data-ingredientname')) return;

  const ingredientName = e.target.getAttribute('data-ingredientname');

  refs.modalContentEl.innerHTML = loaderPattern;
  refs.modal.classList.toggle('is-hidden');

  // const ingredientName = btn.dataset.ingredientid;
  requestIngredient({ ingredientName: ingredientName })
    .then(response => {
      refs.modalBts.classList.remove('visually-hidden');
      renderContent(response.data.ingredients[0]);
    })
    .catch(error => {
      console.log(error);
    });
});

const renderContent = data => {
  refs.modalWindow.scrollTop = 0;

  const ingredientData = {
    id: data.idIngredient,
    country: '',
    alcohol: data.strAlcohol,
    title: data.strIngredient,
    subtitle: '',
    description: data.strDescription,
    abv: data.strABV,
    type: data.strType,
    ingredient: data.strIngredient,
  };

  const content = getIngredientPattern(ingredientData);
  refs.modalContentEl.innerHTML = content;

  finalizeModal();
};

const finalizeModal = () => {
  psModal.update();
};
