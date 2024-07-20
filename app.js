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
message.innerText = "Rock Paper Scissors \n Start!!";

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
      "Game Over || Winner is : " +
      winner() +
      " with 5 scores!!. \n Start Again!!";
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

//styling

message.style.fontSize = "25px";
message.style.textAlign = "center";
message.style.padding = "50px";

divChoice.style.background = "lightgrey";
divChoice.style.display = "flex";
divChoice.style.justifyContent = "space-around";
divChoice.style.borderRadius = "50px";
divChoice.style.padding = "30px";
divChoice.style.fontSize = "25px";

divButtons.style.display = "flex";
divButtons.style.justifyContent = "space-around";
divButtons.style.margin = "20px";

const allBtn = document.querySelectorAll("div button");

allBtn.forEach((button) => {
  button.style.flexGrow = "1";
  button.style.padding = "50px";
  button.style.borderRadius = "50px";
  button.style.fontSize = "20px";
});

divScore.style.display = "flex";
divScore.style.justifyContent = "space-around";
divScore.style.fontSize = "20px";
