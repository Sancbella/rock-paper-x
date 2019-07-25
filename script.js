var playerCount = 0;
var computerCount = 0;
var i = 1;
const buttons = document.querySelectorAll('#choice')
const resetBtn = document.querySelector("body > div.game-options > button")
const verdictText = document.querySelector("body > div.verdict > p");
const computerPts = document.querySelector("body > div.computer.count > p")
const playerPts = document.querySelector("body > div.player.count > p")
var compHTMLChoice = document.querySelector("body > div.computer.count > p.compChoice") 
var playHTMLChoice = document.querySelector("body > div.player.count > p.playerChoice")

var resetColorVerdict = function(){
    if (verdictText.getAttribute('class') == 'win') {
        verdictText.classList.toggle(`win`)} else if (verdictText.getAttribute('class') == 'lose') {
        verdictText.classList.toggle(`lose`)
    } else if (verdictText.getAttribute('class') == 'tie') {
        verdictText.classList.toggle(`tie`)
    }
}

resetBtn.addEventListener('click' , () => {
    i = 0;
    playerCount = 0;
    computerCount = 0;
    buttons.forEach ((button) => {
        button.classList.remove('grey')
    })
    resetBtn.classList.remove('restart')
    const verdictText = document.querySelector("body > div.verdict > p")
    const computerPts = document.querySelector("body > div.computer.count > p")
    const playerPts = document.querySelector("body > div.player.count > p")
    verdictText.textContent = `Click a button to start the game!`;
    computerPts.textContent = `${computerCount}`
    playerPts.textContent = `${playerCount}` 
    resetColorVerdict();
});

var resetCheck = function(buttons){
    resetColorVerdict();
    if (i >= 5){
        buttons.forEach ((button) => {
            button.classList.add('grey')
        })
            resetBtn.classList.add('restart')
            //grey out all other buttons
            //highlight reset button
    } 
}

buttons.forEach ((button) => {
button.addEventListener('click',(e) => {
    let player = button.getAttribute('class');
    console.log(player);
    if (i < 5) {
    game(player);
    
} else if (i >= 5){
        determineFinalist(playerCount, computerCount);
        resetCheck(buttons);
        
}
i += 1
}) 
})

var computerPlay = function(){
    var choice = Math.floor((Math.random() * 3) + 1);
    switch(choice) {
        case 1:
        var stringChoice = 'rock'
        break;
        case 2:
        var stringChoice = 'paper'
        break;
        case 3:
        var stringChoice = 'scissors'
        break;
        default:
        console.log('something went terribly wrong with objectifying');
            break;
    }
    console.log(`Computer chose ${stringChoice}`)
    return stringChoice; 
       
};
var processChoices = function (player, computer){
    var winner = 0;
    switch (player) {
        case computer:
            if (player == computer) {
                winner = 3
            }
            break;
        case 'rock':
            if (computer == 'paper'){
                winner = 2; 
            } else if (computer == 'scissors'){
                winner = 1; 
            }
            break;
        case 'paper':
            if (computer == 'scissors'){
                winner = 2;
            } else if (computer == 'rock'){
                winner = 1;
            }
            break;
        case 'scissors':
            if (computer == 'rock'){
                winner = 2;
            } else if (computer == 'paper'){
                winner = 1;
            }
            break;
    }
    return winner
}

var game = function (player){
    var computer = computerPlay();
    var processed = processChoices(player, computer);
    
    compHTMLChoice.textContent = `${computer}`
    playHTMLChoice.textContent = `${player}`
    if (verdictText.getAttribute('class') == 'win') {
        verdictText.classList.toggle(`win`)} else if (verdictText.getAttribute('class') == 'lose') {
        verdictText.classList.toggle(`lose`)
    } else if (verdictText.getAttribute('class') == 'tie') {
        verdictText.classList.toggle(`tie`)
    }
    switch (processed) {
        case 1:
        verdict = `The player wins! ${player} beats ${computer}!`
        colorVar = 'win';
        playerCount += 1
        break;
        case 2: 
        verdict =`The computer wins! ${computer} beats ${player}!`
        colorVar = 'lose';
        computerCount += 1;
        break;
        case 3:
        verdict = `We have a tie, go again!`
        colorVar = 'tie'; 
        break;
}   
if (verdictText.getAttribute('class') == 'win') {
    verdictText.classList.toggle(`win`)} else if (verdictText.getAttribute('class') == 'lose') {
    verdictText.classList.toggle(`lose`)
} else if (verdictText.getAttribute('class') == 'tie') {
    verdictText.classList.toggle(`tie`)
}
verdictText.classList.add(`${colorVar}`)
verdictText.textContent = `${verdict}`;
computerPts.textContent = `${computerCount}`
playerPts.textContent = `${playerCount}`
console.log(`Player ${playerCount}; Computer ${computerCount}`);

}
var determineFinalist = function (playerCount, computerCount){
    resetColorVerdict();
if (playerCount > computerCount) {
    verdict ='Results are in! Player beats computer! Click Reset to play again!';
    colorVar = 'win';
} else if (playerCount < computerCount) {
    verdict ='Results are in! Computer beats player! Click Reset to play again!';
    colorVar = 'lose';
} else if (playerCount == computerCount) {
    verdict ='Results are in! We have a tie! Go again! Click Reset to play again!';
    colorVar = 'tie';
} 

verdictText.classList.add(`${colorVar}`)
verdictText.textContent = `${verdict}`;
}


// for (i = 0; i < 5; i++) {
//         game();
//     } 
// 
  