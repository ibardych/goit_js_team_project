import { requestCocktail } from './requests';

const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-cocktail-open]'),
  closeModalBtn: document.querySelector('[data-modal-cocktail-close]'),
  modal: document.querySelector('[data-modal-cocktail]'),
};

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cocktailId = btn.dataset.cocktailid;
    requestCocktail({ cocktailId: cocktailId })
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
});

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});

refs.modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    refs.modal.classList.toggle('is-hidden');
  }
});
