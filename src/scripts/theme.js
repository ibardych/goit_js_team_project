const themeBtn = document.querySelector('.toggler');
// console.log(themeBtn);

themeBtn.addEventListener('click', selectTheme);

function selectTheme() {
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
