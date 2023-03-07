import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll } from 'body-scroll-lock';

const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target.hasAttribute('data-modal-close')) {
      modal.classList.toggle('is-hidden');
      modal.firstElementChild.style.paddingRight = `0px`;
      clearAllBodyScrollLocks();
    }
    if (e.target.hasAttribute('data-modal')) {
      //modal.classList.toggle('is-hidden');
      modal.firstElementChild.style.paddingRight = `0px`;
      clearAllBodyScrollLocks();
    }
  });
});

const checkWindowWidth = () => {
  const widthBefore = document.documentElement.clientWidth;
  disableBodyScroll(document.body, { reserveScrollBarGap: true });
  const widthAfter = document.documentElement.clientWidth;
  const scrollBarWidth = widthAfter - widthBefore;

  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {
    modal.firstElementChild.style.paddingRight = `${scrollBarWidth}px`;
  });
};

export { checkWindowWidth };
