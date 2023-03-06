import { createRequstByLetter } from "./hero_api";

const alphabetButton = document.querySelector('.selector');
const alphabetContainer = document.querySelector('.container-alphabet');
const selector = document.querySelector('.custom-select');

alphabetContainer.addEventListener('click', onLetterClick);
selector.addEventListener('change', onLetterChoose);

 export function onLetterClick(evt) {

    if (evt.target.tagName !== 'BUTTON') {
        return
    }


    const currentLetter  = evt.target.textContent;    
    
    console.log(currentLetter);
    
    createRequstByLetter(currentLetter).then(data => console.log(data));
}

function onLetterChoose(evt) {

    const selectedOption = evt.target.options[evt.target.selectedIndex];

    const selectedOptionText = selectedOption.textContent;

    createRequstByLetter(selectedOptionText).then(data => console.log(data));

  }

