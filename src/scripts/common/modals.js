import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { disableBodyScroll } from 'body-scroll-lock';

const refs = {
  modals: document.querySelectorAll('.modal'),
};

const checkOpenedWindows = () => {
  const allModalsAreHidden = Array.from(refs.modals).every(modal =>
    modal.classList.contains('is-hidden')
  );

  if (allModalsAreHidden) {
    refs.modals.forEach(modal => {
      modal.firstElementChild.style.paddingRight = '0';
    });

    clearAllBodyScrollLocks();
  }
};

refs.modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (
      !e.target.hasAttribute('data-modal-close') &&
      !e.target.hasAttribute('data-modal')
    )
      return;

    modal.classList.toggle('is-hidden');
    checkOpenedWindows();
  });
});

const checkWindowWidth = () => {
  const widthBefore = document.documentElement.clientWidth;
  disableBodyScroll(document.body, { reserveScrollBarGap: true });
  const widthAfter = document.documentElement.clientWidth;
  const scrollBarWidth = widthAfter - widthBefore;

  refs.modals.forEach(modal => {
    modal.firstElementChild.style.paddingRight = `${scrollBarWidth}px`;
  });
};

export { checkWindowWidth, checkOpenedWindows };
