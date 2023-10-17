// - Visualizzare in pagina 5 numeri casuali (anche tramite alert).
//     - Creare array numberCasual
//     - Creare funzione randomNumber
//     - Creare DOMElement per inserire i numeri
// - Creare il timer di 30 secondi
// - Cancellare i dati dopo 30 secondi
// - Inserire 5 numeti tremmite prompt
// - Controllare se i numeri inseriti sono correti e capire quale sono stati indovinati

// FUNZIONI 

// Funzione getRandomIntInclusive - crea il numero random nel range indicato
function getRandomIntInclusive(min, max){
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

// Funzione randomNumberArray 
function randomNumberArray(min, max, n){
    const array = [];
    for (let i = 0; i < n; i++){
        array.push(getRandomIntInclusive(min, max));
    }
    return array;
}

