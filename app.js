console.log('Hello')
// Computer's Random Choice From 3 Choices. 
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3+1)
    computerChoice = computerChoice.toString();
    
    (computerChoice == '1') ? computerChoice = 'rock':(computerChoice == '2') ? computerChoice = 'paper':(computerChoice == '3') ? computerChoice = 'scissors':
    '';
    return computerChoice
}
// console.log('Computer : '+getComputerChoice());

// Human's Choice taken from input by user
function getHumanChoice(){
    let humanChoice = prompt('Rock Paper Scissors\nEnter your Choice : ','')
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == 'rock'||humanChoice == 'paper'|| humanChoice =='scissors'){
        return humanChoice;
    }
}
// console.log('Human : '+getHumanChoice())

//Declaring Players Score Variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
        console.log('Human : '+humanChoice);
        console.log('Computer : '+computerChoice);


        if(humanChoice == computerChoice){
            console.log(`%cIt\'s a TIE!!!! ¯\\_(ツ)_/¯`,'background-color:lightgrey')
        }
        else if(humanChoice == 'rock'&&computerChoice=='scissors'){
            console.log(`%cYou Win!!! ヾ(⌐■_■)ノ`,'background-color:lightgreen')
            humanScore++;

        }
        else if(humanChoice == 'paper'&& computerChoice=='rock'){
            console.log(`%cYou Win!!! ヾ(⌐■_■)ノ`,'background-color:lightgreen')
            humanScore++;
            
        }
        else if(humanChoice == 'scissors' && computerChoice == 'paper'){
            console.log(`%cYou Win!!! ヾ(⌐■_■)ノ`,'background-color:lightgreen')
            humanScore++;
        }else{
            console.log('%cYou Lost!!! (ノಠ益ಠ)ノ彡┻━┻','background-color:red')
            computerScore++;
        }

}
playRound(getHumanChoice(),getComputerChoice());