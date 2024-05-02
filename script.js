let humanScore=0;
let computerScore=0;

function getComputerChoice()
{
    const random = Math.floor(Math.random() * 3);
    console.log(random);
    if (random === 0) {
        return "rock";
      } else if (random === 1) {
        return "paper";
      } else {
        return "scissors";
      }
   
}



function getHumanChoice()
{
    const choice = prompt("Enter your choice (rock, paper, scissors): ");
    return choice;
}



function playRound(humanChoice, computerChoice) {
      
        if (humanChoice === computerChoice) {
          return "It's a tie!";
        } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
        ) {
          humanScore++;
          return `You win! ${humanChoice} beats ${computerChoice}`;
      
        } else {
            computerScore++;
          return `You lose! ${computerChoice} beats ${humanChoice}`;
          
        }
      }
      

  function playGame() {
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
  
      const roundResult = playRound(humanChoice, computerChoice);
      console.log(roundResult);
    }
  
    console.log("Final Scores:");
    console.log("Player:", humanScore);
    console.log("Computer:", computerScore);
  
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (humanScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  playGame();
  
