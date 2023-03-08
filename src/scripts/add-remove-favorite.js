import { updateDataInFirebase } from './firebase';

const refs = {
  addRemoveFavoriteBtns: document.querySelectorAll(
    '[data-add-remove-favorite]'
  ),
};

document.body.addEventListener('click', e => {
  let targetElement;

  if (e.target.hasAttribute('data-add-remove-favorite')) {
    targetElement = e.target;
  }
  if (
    e.target.parentElement &&
    e.target.parentElement.hasAttribute('data-add-remove-favorite')
  ) {
    targetElement = e.target.parentElement;
  }
  if (
    e.target.parentElement.parentElement &&
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
  const action = targetElement.getAttribute('data-action') || 'add';
  const cardType = targetElement.getAttribute('data-card-type') || '';

  let elementTitle;
  let elementSubtitle;
  let elementData;
  let elementId;

  if (elementType == 'cocktail') {
    const el = document.querySelector(`#cocktail-${cocktailId}`);
    const titleEl = document.querySelector(
      `#cocktail-${cocktailId} .gallery-item__title`
    );
    elementData = el.outerHTML;
    elementTitle = titleEl.textContent;
    elementId = cocktailId;
  }

  if (elementType == 'ingredient') {
    const titleEl = document.querySelector(
      `#ingredient-${ingredientId} .ingr-title`
    );
    const subTitleEl = document.querySelector(
      `#ingredient-${ingredientId} .ingr-subtitle`
    );
    elementTitle = titleEl.textContent;
    elementSubtitle = subTitleEl.textContent;
    elementId = ingredientId;
    //if (cardType != 'favorite') {}
  }

  const data = {
    action: action,
    elementType,
    elementTitle,
    elementSubtitle,
    elementId,
    elementData,
    targetElement,
  };

  const response = updateDataInFirebase(data);

  if (response == 'successfully') {
    alert('test');
  }
};
