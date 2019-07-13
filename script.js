

    
//var input = prompt("rock, paper or scissors?");
let playerCount = 0;
let computerCount = 0;
var game = function(){
    determineWinner();
}

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
var playerChoice = function (){
    var input= prompt("rock, paper or scissors?");
    safetext = input.toLowerCase().trim();
    //console.log(input + 'is a' + typeof input);
    return safetext
}
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

var determineWinner = function (){
    var computer = computerPlay();
    var player = playerChoice();
    var processed = processChoices(player, computer);

    switch (processed) {
        case 1:
        console.log(`The player wins! ${player} beats ${computer}!`);
        playerCount += 1
        break;
        case 2: 
        console.log(`The computer wins! ${computer} beats ${player}!`);
        computerCount += 1;
        break;
        case 3:
    console.log(`We have a tie, go again!`);    
        break;
}   
console.log(`Player ${playerCount}; Computer ${computerCount}`);

}
var determineFinalist = function (playerCount, computerCount){
if (playerCount > computerCount) {
        console.log('Player beats computer');
} else if (playerCount < computerCount) {
    console.log('Computer beats player');
} else if (playerCount == computerCount) {
    console.log('We have a tie! Go again!');
}
}

for (i = 0; i < 5; i++) {
        game();
    } 
determineFinalist (playerCount, computerCount);
  