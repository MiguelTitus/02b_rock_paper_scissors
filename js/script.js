// variables
let message = document.querySelector('#message');
let counter = document.querySelector('#counter');
let start = document.querySelector('.startButton');
let playerScore = 0;
let computerScore = 0;
let scoreMax = 5;
const playerChoices = ["rock", "paper", "scissors"];
// Returns a random integer between min (included) and max (included)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// computer's play
function computerPlay(){
  let computerGame = getRandomInt(1, 3);
  if(computerGame == 1){
    return ("rock");
  }else if(computerGame == 2){
    return ("paper");
  }else{
    return ("scissors");
  }
}
// single round
function playRound(playerSelection, computerSelection){
  switch (playerSelection){
    case "rock":
    if(computerSelection == "paper"){
      computerScore++;
      message.innerHTML = "Paper covers Rock: Computer wins!";
    }else if(computerSelection == "scissors"){
      playerScore++;
      message.innerHTML = "Rock crushes Scissors: Player wins!";
    }else if(computerSelection == playerSelection){
      message.innerHTML = "Rock & Rock: It's a tie!";
    }
    break;
    case "paper":
    if(computerSelection == "rock"){
      playerScore++;
      message.innerHTML = "Paper covers Rock: Player wins!";
    }else if(computerSelection == "scissors"){
      computerScore++;
      message.innerHTML = "Scissors cut Paper: Computer wins!";
    }else if(computerSelection == playerSelection){
      message.innerHTML = "Paper & Paper: It's a tie!";
    }
    break;
    case "scissors":
    if(computerSelection == "paper"){
      playerScore++;
      message.innerHTML = "Scissors cuts Paper: Player wins!";
    }else if(computerSelection == "rock"){
      computerScore++;
        message.innerHTML = "Rock crushes Scissors: Computer wins!";
      }else if(computerSelection == playerSelection){
        message.innerHTML = "Scissors & Scissors: It's a tie!";
      }
    break;
  }
}
// 5 round game
function game(){
  let totalRounds = 5;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  score();
}
// start button
function showStart(){
  start.setAttribute('style', 'visibility: visible');
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
// score
function score(){
  if (playerScore > computerScore){
    counter.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (playerScore < computerScore){
    counter.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
  } else {
    counter.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
  }
  if (playerScore == scoreMax){
    counter.innerHTML += `${"<br>"} ${"<br>"} Player Wins!`;
    showStart();
  }else if(computerScore == scoreMax){
    counter.innerHTML += `${"<br>"} ${"<br>"} Computer Wins!`;
    showStart();
  }
}
// button scripts
var btn1 = document.querySelector('#rock');
var btn2 = document.querySelector('#paper');
var btn3 = document.querySelector('#scissors');
var btn4 = document.querySelector('#start');
btn1.addEventListener('click', () => {
  playerSelection = "rock";
  game();
});
btn2.addEventListener('click', () => {
  playerSelection = "paper";
  game();
});
btn3.addEventListener('click', () => {
  playerSelection = "scissors";
  game();
});
btn4.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  message.innerHTML = "";
  counter.innerHTML = "";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  start.setAttribute('style', 'visibility: hidden');
});
