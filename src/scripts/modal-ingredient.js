import { enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { requestIngredient } from './requests';
import { getIngredientPattern, loaderPattern } from './common/patterns';
import { checkWindowWidth } from './common/modals';

const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-ingredient-open]'),
  closeModalBtn: document.querySelector('[data-modal-ingredient-close]'),
  modalContentEl: document.querySelector('[data-modal-ingredient-content]'),
  modal: document.querySelector('[data-modal-ingredient]'),
};

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const ingrInput = document.querySelector('input[data-ingredientname]');
    const ingredientName = ingrInput.value || 'Vodka';
    // const ingredientName = btn.dataset.ingredientid;
    requestIngredient({ ingredientName: ingredientName })
      .then(response => {
        const ingredient = response.data.ingredients[0];
        console.log(ingredient);
        const ingredientData = {
          id: ingredient.idIngredient,
          country: '',
          alcohol: ingredient.strAlcohol,
          title: ingredient.strIngredient,
          subtitle: '',
          description: ingredient.strDescription,
          abv: ingredient.strABV,
          type: ingredient.strType,
          ingredient: ingredient.strIngredient,
        };
        const content = getIngredientPattern(ingredientData);
        refs.modalContentEl.innerHTML = content;

        checkWindowWidth();

        const modal = document.querySelector('.modal');
        //modal.style.paddingRight = '0px';
        // clearAllBodyScrollLocks();
        // enableBodyScroll(document.body);
      })
      .catch(error => {
        console.log(error);
      });

    refs.modal.classList.toggle('is-hidden');
  });
});
