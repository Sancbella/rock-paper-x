

    
var input = prompt("rock, paper or scissors?");
var computer = computerPlay();
var player = playerChoice(input);
var processed = processChoices(player, computer);
var result = determineWinner();
let playerCount = null;
let computerCount = null;

function computerPlay(){
    var choice = Math.floor((Math.random() * 3) + 1);
    switch(choice) {
        case 1:
        var stringChoice = 'rock';
        case 2:
        var stringChoice = 'paper';
        case 3:
        var stringChoice = 'scissors';
        default:
        console.log('something went terribly wrong with objectifying');
            break;
    }
    console.log(`Computer play completed with the choice being ${stringChoice}`)
    return stringChoice; 
       
};
function playerChoice(input){
    safetext = input.toLowerCase().trim();
    console.log(input + 'is a' + typeof input);
    return safetext
}
function processChoices(player, computer){
    switch (player) {
        case player == 'rock':
            if (computer == 'paper'){
                var winner = 2; 
            } else if (computer == 'scissors'){
                var winner = 1; 
            }
            break;
        case player == 'paper':
            if (computer == 'scissors'){
                var winner = 2;
            } else if (computer == 'rock'){
                var winner = 1;
            }
            break;
        case player == 'scissors':
            if (computer == 'rock'){
                var winner = 2;
            } else if (computer == 'paper'){
                var winner = 1;
            }
            break;
        default:
            if (computer == player){
        var winner = console.log('We have a tie, go again!');
            } 
            break;
    }
    return winner
}

function determineWinner(){
    var message = (processed == 2) ? `The computer wins! ${computer} beats ${player}!` : `The player wins! ${player} beats ${computer}!`;
    console.log(message);
    
}

for (i = 0; i < 5; i++) {
    if (playerCount + computerCount >= 5) {
if (playerCount > computer){
    console.log('Player beats computer');
} else {
    console.log('Computer beats player');
}
    } else {
        prompt("rock, paper or scissors?");
        computerPlay();
        playerChoice(input);
        processChoices(player, computer);
        determineWinner();
    }
  }