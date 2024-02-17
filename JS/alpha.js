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

        const currentScoreElement = document.getElementById('current-score');
        const scoreValue = currentScoreElement.innerText;
        const currentScore = parseInt(scoreValue);



        const newScore = currentScore + 1;


        currentScoreElement.innerText = newScore;


        removeBgById(playerPressed);
        continueGame();



    } else {
        const currentLifeELement = document.getElementById('current-life');

        const currentLifeText = currentLifeELement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife -1;



        currentLifeELement.innerText = newLife;



        console.log('you fuck')
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
    continueGame()
}

