function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  computerChoice = computerChoice.toString();

  computerChoice == "1"
    ? (computerChoice = "rock")
    : computerChoice == "2"
    ? (computerChoice = "paper")
    : computerChoice == "3"
    ? (computerChoice = "scissors")
    : "";
  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

const pComputerScore = document.createElement("p");
const pHumanScore = document.createElement("p");

const message = document.createElement("div");

const pHumanChoice = document.createElement("p");
const pComputerChoice = document.createElement("p");

function playRound(humanChoice, computerChoice = getComputerChoice()) {
  pHumanChoice.innerText = "You :" + humanChoice;
  pComputerChoice.innerText = "Computer :" + computerChoice;

  if (humanChoice == computerChoice) {
    // console.log(`%cIt\'s a TIE!!!! ¯\\_(ツ)_/¯`, "background-color:lightgrey");
    message.innerText = `It\'s a TIE!!!! ¯\\_(ツ)_/¯`;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    // console.log(`%cYou Win!!! ヾ(⌐■_■)ノ`, "background-color:lightgreen");
    message.innerText = `You Win!!! ヾ(⌐■_■)ノ`;
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    // console.log(`%cYou Win!!! ヾ(⌐■_■)ノ`, "background-color:lightgreen");
    message.innerText = `You Win!!! ヾ(⌐■_■)ノ`;
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    // console.log(`%cYou Win!!! ヾ(⌐■_■)ノ`, "background-color:lightgreen");
    message.innerText = `You Win!!! ヾ(⌐■_■)ノ`;
    humanScore++;
  } else {
    // console.log("%cYou Lost!!! (ノಠ益ಠ)ノ彡┻━┻", "background-color:red");
    message.innerText = `You Lost!!! (ノಠ益ಠ)ノ彡┻━┻`;
    computerScore++;
  }

  pComputerScore.innerText = "Computer :" + computerScore;
  pHumanScore.innerText = "You :" + humanScore;

  if (computerScore == 5 || humanScore == 5) {
    message.innerText =
      "Game Over || Winner is : " + winner() + " with 5 scores!!.";
    humanScore = 0;
    computerScore = 0;
    pComputerScore.innerText = "Computer :" + computerScore;
    pHumanScore.innerText = "You :" + humanScore;
  }
}

function winner() {
  if (computerScore == humanScore) {
    return "No one";
  } else if (computerScore > humanScore) {
    return "Computer";
  } else {
    return "Human";
  }
}

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorsBtn.innerText = "Scissors";

rockBtn.addEventListener("click", () => {
  playRound("rock");
});
paperBtn.addEventListener("click", () => {
  playRound("paper");
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

const div = document.querySelector("div");

const divChoice = document.createElement("div");
const divButtons = document.createElement("div");
const divScore = document.createElement("div");

divChoice.appendChild(pHumanChoice);
divChoice.appendChild(pComputerChoice);

divScore.appendChild(pHumanScore);
divScore.appendChild(pComputerScore);

divButtons.appendChild(rockBtn);
divButtons.appendChild(paperBtn);
divButtons.appendChild(scissorsBtn);

div.appendChild(message);
div.appendChild(divChoice);
div.appendChild(divButtons);
div.appendChild(divScore);
