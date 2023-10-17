//-------------------------Variabili------------------------------
const numberCasual = randomNumberArray(1, 100, 5);
let numberWin = [];
//-------------------------DOMElement-----------------------------
const numberDOMElement = document.getElementById("number");
const timerDOMElement = document.getElementById("timer");

// - Inseriamo i valore di numberCasual in html
numberDOMElement.innerHTML = numberCasual;

// - Creare il timer di 30 secondi
decreasingTimer(timerDOMElement, 30);

// - Cancellare i dati dopo 30 secondi
deleteDOMElementContent(numberDOMElement);

// - Inserire 5 numeti tremmite prompt
const idSetTimeOut = setTimeout(function(){
    console.log(numberCasual);
    timerDOMElement.innerHTML = "";
    const answer = userAnswerPromptNumber(5);
    numberWin = compareArrays(numberCasual, answer);
    console.log(numberWin);
    numberWinnerPrint(numberWin, numberDOMElement);
}, 35000)

// - Controllare se i numeri inseriti sono correti e capire quale sono stati indovinati



//-------------------------FUNZIONI-----------------------------

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

// Funzione per ricevere risposta di utente
function userAnswerPromptNumber(numberPrompt){
    const array = [];
    for (let i = 0; i < numberPrompt; i++){
        const answerPrompt = parseInt(prompt(`Inserisci il numero ${i + 1}`)); 
        array.push(answerPrompt);
    }
    return array;
}

// Funzione per confrontare il contenuto di una array con altra e return di una array con i numeri indivinati 
function compareArrays(array, arrayToCompare){
    const arrayNumberWin = []
    for(let i = 0; i < arrayToCompare.length; i++){
        if(array.includes(arrayToCompare[i])){
            arrayNumberWin.push(arrayToCompare[i]);
        }
    }
    return arrayNumberWin;
}

// Funzione numberWinnerPrint 
function numberWinnerPrint(arrayNumberWin, DOMElement){
    let messegeToPrint = `
        Hai indovinato i numeri: ${arrayNumberWin.join(", ")}.
        `;
    // for(let i = 0; i < arrayNumberWin.length; i++){
    //     messegeToPrint.padEnd(1, `${arrayNumberWin[i]}, `);
    // }
    DOMElement.innerHTML = messegeToPrint;
}

