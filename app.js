console.log('Hello')
// Computer's Random Choice From 3 Choices. 
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3+1)
    computerChoice = computerChoice.toString();
    
    (computerChoice == '1') ? computerChoice = 'rock':(computerChoice == '2') ? computerChoice = 'paper':(computerChoice == '3') ? computerChoice = 'scissors':
    '';
    return computerChoice
}
console.log(getComputerChoice());