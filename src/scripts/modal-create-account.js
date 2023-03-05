const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
  // setTimeout(() => {
  //   refs.modalForm.classList.remove('visually-hidden');
  //   refs.modalForm.style.opacity = 1;
  //   refs.gratitudePopup.classList.add('visually-hidden');
  // }, 500);
});
