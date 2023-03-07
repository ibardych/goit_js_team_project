export function createRequstByLetter (choosenLetter) {
    return fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${choosenLetter}`)
    .then(responce => responce.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error)
    });

}