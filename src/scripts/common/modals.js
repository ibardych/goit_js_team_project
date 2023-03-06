import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll } from 'body-scroll-lock';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target.hasAttribute('data-modal-close')) {
      modal.classList.toggle('is-hidden');
      modal.style.borderRight = `solid 0px rgb(0 0 0 / 0)`;
      clearAllBodyScrollLocks();
    }
    if (e.target.hasAttribute('data-modal')) {
      modal.classList.toggle('is-hidden');
      modal.style.borderRight = `solid 0px rgb(0 0 0 / 0)`;
      clearAllBodyScrollLocks();
    }
  });
});

const modalWindows = document.querySelectorAll('.modal__window');

modalWindows.forEach(modal => {
  const psModal = new PerfectScrollbar(modal);
});

const checkWindowWidth = () => {
  const widthBefore = document.documentElement.clientWidth;
  disableBodyScroll(document.body, { reserveScrollBarGap: true });
  const widthAfter = document.documentElement.clientWidth;
  const scrollBarWidth = widthAfter - widthBefore;

  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {
    modal.style.borderRight = `solid ${scrollBarWidth}px rgb(0 0 0 / 0)`;
  });
};

export { checkWindowWidth };
