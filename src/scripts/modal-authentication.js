const refs = {
  openModalBtn: document.querySelector('[data-modal-authentication-open]'),
  closeModalBtn: document.querySelector('[data-modal-authentication-close]'),
  modal: document.querySelector('[data-modal-authentication]'),
  joinModalBtn: document.querySelector('[data-modal-authentication-join]'),
  loginModalBtn: document.querySelector('[data-modal-authentication-login]'),
  loginForm: document.querySelector('#login-form'),
  joinForm: document.querySelector('#join-form'),
};

refs.openModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('is-hidden');
});

refs.joinModalBtn.addEventListener('click', () => {
  refs.loginForm.classList.toggle('visually-hidden');
  refs.joinForm.classList.toggle('visually-hidden');
});

refs.loginModalBtn.addEventListener('click', () => {
  refs.loginForm.classList.toggle('visually-hidden');
  refs.joinForm.classList.toggle('visually-hidden');
});
