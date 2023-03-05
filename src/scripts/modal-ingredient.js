const refs = {
  openModalBtn: document.querySelector('[data-modal-ingredient-open]'),
  closeModalBtn: document.querySelector('[data-modal-ingredient-close]'),
  modal: document.querySelector('[data-modal-ingredient]'),
};

refs.openModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});
