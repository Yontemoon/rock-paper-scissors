let scorePlayer = 0;
let scoreComputer = 0;

const buttons = document.querySelectorAll("button");
let result = document.getElementById("#result");

function getComputerChoice() {
    let createChoice = ['rock', 'paper', 'scissors']
    return createChoice[Math.floor(Math.random()*createChoice.length)];
}



function playRound(playerSelection){
    if (scoreComputer !== 5 || scorePlayer !== 5) {
        let computerSelection = getComputerChoice();
        if ((playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "rock")) {
                scoreComputer += 1;
                result = `The computer wins! The computer has ${scoreComputer} points and you have ${scorePlayer} points.`;
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "paper")) {
                scorePlayer += 1;
                result = `You win! The computer has ${scoreComputer} points and you have ${scorePlayer} points.`;
        } else {
            result = `It's a tie! The computer has ${scoreComputer} points and you have ${scorePlayer} points.`;
        } 
    } 

    if (scoreComputer === 5) {
        result = `The computer has won! Please refresh the page if you want to play again.`;
    } 
    if (scorePlayer ===5 ) {
        result = `You won! Please refresh the page if you want to play again.`;
    }
    document.getElementById('result').innerHTML = result; // Confusing... copied from answers
}





buttons.forEach(button => { // Copied from answer
    button.addEventListener('click', function() {
        playRound(button.id);
    })
})