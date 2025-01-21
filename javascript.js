function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const RandomIndex = Math.floor(Math.random() * choices.length);
    return choices[RandomIndex];
}
function getHumanChoice(){
    let choice = prompt("Enter your choice(rock, paper, scissors:").toLowerCase();
    while(!["rock","paper","scissors"].includes(choice)){
        choice = prompt("Invalid Choice. Please enter rock, paper or scissors:").toLowerCase;
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);


    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Game start: Best of 5 rounds!");

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log("It's a tie game!");
    }
}

console.log(playGame());

