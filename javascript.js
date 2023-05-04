// const playerSelection = "rock";
let scorePlayer = 0
let scoreComputer = 0
let playerSelection = "";

function getComputerChoice() {
    let createChoice = ['rock', 'paper', 'scissors']
    return createChoice[Math.floor(Math.random()*createChoice.length)];
}



function playRound(playerSelection, computerSelection){
    playerSelection = "rock";
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "The computer wins!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "The computer wins!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "The computer wins!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!"
    } else {
        return "It's a tie!"
    }
}


function game() {

    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerChoice()
            playRound(playerSelection, computerSelection)
            if (playRound === "You win!") {
                scorePlayer++;
            } else if (playRound === "The computer wins!") {
                scoreComputer++;
            } else {
                continue;
        }
        return console.log("User Score: " + scorePlayer + "/n"+ "Computer score: " + scoreComputer);
    }
}

game(playRound);