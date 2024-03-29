function hideSection(elementId){
    const hideSec = document.getElementById(elementId);
    hideSec.classList.add('hidden');
}

function addSection(elementId){
    const addSec = document.getElementById(elementId);
    addSec.classList.remove('hidden');
}

function setCss(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}

function removeBgById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}


function getTextElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value =parseInt( elementValueText);

    return value;
}

function setTextElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet(){
    const alphabets =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);

    const alphabet = alphabets[index];

    return alphabet;
}
