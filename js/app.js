//-------------------------Variabili------------------------------
const numberCasual = randomNumberArray(1, 100, 5);

//-------------------------DOMElement-----------------------------
const numberDOMElement = document.getElementById("number");
const timerDOMElement = document.getElementById("timer");

// - Inseriamo i valore di numberCasual in html
numberDOMElement.innerHTML = numberCasual;

// - Creare il timer di 30 secondi

deleteDOMElementContent(numberDOMElement);
decreasingTimer(timerDOMElement, 30);
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

// Funzione decreasingTimer
function decreasingTimer(DOMElement, counterStart){
    let counter = counterStart;
    const idecreasingTimer = setInterval(function(){
        counter--;
        console.log(counter)
        DOMElement.innerHTML = counter;
        if(counter === 0){
            clearInterval(idecreasingTimer);
            DOMElement.innerHTML = "Tempo scaduto";
        }
    }, 1000)
}



