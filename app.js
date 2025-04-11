const computerChoiceDisplay = document.getElementById("computer choice");
const playerChoiceDisplay = document.getElementById("player choice");
const displayResult = document.getElementById("result");
const possibleOutcome = document.querySelectorAll("button");

let computerChoice;
let playerChoice;
let result;

possibleOutcome.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    playerChoice = event.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "It's a tie 🤝";
  }

  if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "You lose!";
  }

  if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "You lose!";
  }

  if (computerChoice === "paper" && playerChoice === "rock") {
    result = "You lose!";
  }

  if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "You win!";
  }

  if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "You win!";
  }

  if (computerChoice === "rock" && playerChoice === "paper") {
    result = "You win!";
  }
  displayResult.innerHTML = result;
}
