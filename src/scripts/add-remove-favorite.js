const refs = {
  addRemoveFavoriteBtns: document.querySelectorAll(
    '[data-add-remove-favorite]'
  ),
  modalAuthentication: document.querySelector('[data-modal-authentication]'),
};

document.body.addEventListener('click', e => {
  e.preventDefault();

  let targetElement;

  if (e.target.hasAttribute('data-add-remove-favorite')) {
    targetElement = e.target;
  }
  if (e.target.parentElement.hasAttribute('data-add-remove-favorite')) {
    targetElement = e.target.parentElement;
  }
  if (
    e.target.parentElement.parentElement.hasAttribute(
      'data-add-remove-favorite'
    )
  ) {
    targetElement = e.target.parentElement.parentElement;
  }

  if (!targetElement) return;

  addRemoveFavorite(targetElement);
});

const addRemoveFavorite = targetElement => {
  const buttonState = 'add';
  const cocktailId = targetElement.getAttribute('data-cocktailid');

  checkIfUserLoggedIn();
};

const checkIfUserLoggedIn = () => {
  refs.modalAuthentication.classList.toggle('is-hidden');
};
