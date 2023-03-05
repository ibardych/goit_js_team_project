import { requestIngredient } from './requests';

const refs = {
  openModalBtn: document.querySelector('[data-modal-ingredient-open]'),
  closeModalBtn: document.querySelector('[data-modal-ingredient-close]'),
  modal: document.querySelector('[data-modal-ingredient]'),
};

refs.openModalBtn.addEventListener('click', () => {
  const ingredientId = refs.openModalBtn.dataset.ingredientid;
  requestIngredient({ ingredientId: ingredientId })
    .then(response => {
      console.log(response.data);
      //return value.json();
    })
    // .then(data => {
    //   console.log(data);
    // })
    .catch(error => {
      console.log(error);
    });

  refs.modal.classList.toggle('is-hidden');
});

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});

const loaderEl = `<div data-loader='' class="loader-type1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
