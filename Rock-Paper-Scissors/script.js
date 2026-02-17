function getComputerChoice() {
  let randomNum = Math.random();

   if (randomNum < 0.33) {
   return "rock";
  } else if (randomNum < 0.66) {
  return "paper";
  } else {
  return "scissors";
   }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let userInput = prompt("Enter choice: ")
  userInput = userInput.toLowerCase();

  if (userInput === "rock") {
    return "rock";
  } else if (userInput === "paper") {
    return "paper";
  } else if (userInput === "scissors") {
    return "scissors";
  } else {
    return "invalid choice";
  }
} 

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human wins")
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer wins");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer wins");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Human wins");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human wins")
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer wins")
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human: ", humanScore, "Computer: ", computerScore);

