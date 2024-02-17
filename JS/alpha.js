// function play(){
//     // hide the reasonable section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')

//     //show the desireable section
//     const playGroundSection= document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');


// }

function continueGame(){
    const alphabet =getARandomAlphabet();
    const currentAlphabet =document.getElementById('alphabet');
    currentAlphabet.innerText = alphabet;
    setCss(alphabet);

}

function play(){
    hideSection('home');
    addSection('play-ground');
    continueGame()
}

