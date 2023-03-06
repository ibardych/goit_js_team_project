import { onLetterClick } from "./hero_index";

const choosenLetter = onLetterClick();
let gotData;

function createRequstByLetter (choosenLetter) {
    fetch (`www.thecocktaildb.com/api/json/v1/1/search.php?f=${choosenLetter}`)
    .then(responce => responce.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error)
    });
    
}

gotData = createRequstByLetter();