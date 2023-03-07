import { requestIngredient } from './requests';
import { getIngredientPattern, loaderPattern } from './common/patterns';
import { checkWindowWidth } from './common/modals';
import PerfectScrollbar from 'perfect-scrollbar';

const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-ingredient-open]'),
  modalWindow: document.querySelector('[data-modal-ingredient-window]'),
  closeModalBtn: document.querySelector('[data-modal-ingredient-close]'),
  modalContentEl: document.querySelector('[data-modal-ingredient-content]'),
  modal: document.querySelector('[data-modal-ingredient]'),
  openModalBtn: document.querySelector('[data-modal-authentication-open]'),
};

const psModal = new PerfectScrollbar(refs.modalWindow);

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const ingrInput = document.querySelector('input[data-ingredientname]');
    const ingredientName = ingrInput.value || 'Vodka';

    refs.modalContentEl.innerHTML = loaderPattern;
    refs.modal.classList.toggle('is-hidden');

    // const ingredientName = btn.dataset.ingredientid;
    requestIngredient({ ingredientName: ingredientName })
      .then(response => {
        renderContent(response.data.ingredients[0]);
      })
      .catch(error => {
        console.log(error);
      });
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

  checkWindowWidth();

  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener('click', () => {
      refs.modal.classList.toggle('is-hidden');
    });
  }
};
