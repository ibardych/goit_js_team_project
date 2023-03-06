const alphabetButton = document.querySelector('.selector');
const alphabetContainer = document.querySelector('.container-alphabet');

alphabetContainer.addEventListener('click', onLetterClick);

 export function onLetterClick (evt) {

    if (evt.target.nodeName !== 'BUTTON') {
        return
    }

    const currentLetter = alphabetButton.textContent;

    console.log(currentLetter);

    return currentLetter;
}
