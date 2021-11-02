// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

const selbtn = document.querySelector('.btn-play');
const contGrid = document.querySelector('.cont-grid');
const difficulty = document.querySelector('#difficulty')

//griglia
selbtn.addEventListener('click', () => {
    contGrid.innerHTML = ''; 

    const gridDifficulty = difficulty.value;
    console.log(gridDifficulty);
    let squareNumber;
    let squareForSide;

    switch (gridDifficulty) {
        case '1':
            squareNumber = 100;
            squareForSide = 10
            break;
        case '2':
            squareNumber = 81;
            squareForSide = 9
            break;
        case '3':
            squareNumber = 49;
            squareForSide = 7
            break;
    }
    console.log(squareNumber);
    console.log(squareForSide);
});