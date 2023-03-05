const refs = {
  openModalBtn: document.querySelector('[data-modal-authentication-open]'),
  closeModalBtn: document.querySelector('[data-modal-authentication-close]'),
  modal: document.querySelector('[data-modal-authentication]'),
};

refs.openModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});
