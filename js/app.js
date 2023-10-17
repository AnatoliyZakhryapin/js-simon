// - Visualizzare in pagina 5 numeri casuali (anche tramite alert).
const numberCasual = randomNumberArray(1, 100, 5);

//     - Creare DOMElement per inserire i numeri
const numberDOMElement = document.getElementById("number");
numberDOMElement.innerHTML = numberCasual;

// - Creare il timer di 30 secondi
deleteDOMElementContent(numberDOMElement);

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

// Funzione deleteDOMElementContent 
// function deleteDOMElementContent(DOMElement){
//     DOMElement.innerHTML = "";
// }
// setTimeout(deleteDOMElementContent(numberDOMElement), 5000)

function deleteDOMElementContent(DOMElement){
    setTimeout(() => {
        DOMElement.innerHTML = "";
    }, 30000)
}



