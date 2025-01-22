// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;
const message = document.querySelector("#message");
const score = document.querySelector("#score");

// Function to handle a round of the game
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    let resultMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage += `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage += `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    // Update the DOM
    message.textContent = resultMessage;
    score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    // Check for a winner
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        alert(winner);
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    message.textContent = "Game reset! Play again.";
    score.textContent = `Score: Human 0 - Computer 0`;
}

// Add event listeners to buttons
const buttons = document.querySelectorAll("button[data-choice]");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.getAttribute("data-choice");
        playRound(humanChoice);
    });
});
