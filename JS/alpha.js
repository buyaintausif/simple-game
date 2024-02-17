// function play(){
//     // hide the reasonable section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')

//     //show the desireable section
//     const playGroundSection= document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');


// }

function handleKBDpress(event) {
    const playerPressed = event.key;
    const alphabetSource = document.getElementById('alphabet');
    const alphabet = alphabetSource.innerText.toLowerCase();


    console.log(alphabet);
    console.log(playerPressed);

    if (alphabet === playerPressed) {

        // const currentScoreElement = document.getElementById('current-score');
        // const scoreValue = currentScoreElement.innerText;
        // const currentScore = parseInt(scoreValue);

        // const updatedScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementById('current-score', updatedScore)


        removeBgById(playerPressed);
        continueGame();



    } else {
        // const currentLifeELement = document.getElementById('current-life');

        // const currentLifeText = currentLifeELement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife -1;
        // currentLifeELement.innerText = newLife;

       const currentLife=  getTextElementValueById('current-life');

       const updatedLife = currentLife -1;

       setTextElementById('current-life', updatedLife)

       if(updatedLife === 0){
        gameOver();
      
       }


    }
}

document.addEventListener('keyup', handleKBDpress)

function continueGame() {
    const alphabet = getARandomAlphabet();
    const selectElement = document.getElementById('alphabet');
    selectElement.innerText = alphabet;
    setCss(alphabet);

}

function play() {
    hideSection('home');
    addSection('play-ground');
    hideSection('score');



    setTextElementById('current-life',5);
    setTextElementById('current-score',0);



    continueGame();
   
}


function gameOver(){
    hideSection('play-ground');
    addSection('score');

}
