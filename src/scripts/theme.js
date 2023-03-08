const themeBtn = document.querySelectorAll('.toggler');
const themeActive = document.querySelector('toggler.active');

themeBtn.forEach(el => {
  el.addEventListener('click', saveTheme);
});

function selectTheme() {
  themeBtn.forEach(el => {
    el.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
  });
}

function saveTheme() {
  let setTheme = document.body;
  let theme;

  if (setTheme.classList.contains('dark-mode')) {
    theme = 'DARK';
  } else {
    theme = 'LIGHT';
  }
  localStorage.setItem('PageTheme', JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem('PageTheme'));

if (getTheme === 'DARK') {
  document.body.classList = 'dark-mode';
}
