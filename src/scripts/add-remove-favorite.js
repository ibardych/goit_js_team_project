import { addDataToFirebase } from './firebase';

const refs = {
  addRemoveFavoriteBtns: document.querySelectorAll(
    '[data-add-remove-favorite]'
  ),
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
  const elementType = targetElement.getAttribute('data-element-type');
  const cocktailId = targetElement.getAttribute('data-cocktailid');
  const ingredientId = targetElement.getAttribute('data-ingredientid');

  let elementTitle;
  let elementData;

  if (elementType == 'cocktail') {
    const el = document.querySelector(`#cocktail-${cocktailId}`);
    const titleEl = document.querySelector(
      `#cocktail-${cocktailId} .gallery-item__title`
    );
    elementData = el.outerHTML;
    elementTitle = titleEl.textContent;
  }

  if (elementType == 'ingredient') {
    const titleEl = document.querySelector(
      `#ingredient-${ingredientId} .modal-ingr__title`
    );
    elementTitle = titleEl.textContent;
  }

  const data = {
    elementType,
    elementTitle,
    cocktailId,
    ingredientId,
    elementData,
  };

  addDataToFirebase(data);
};
