function computerPlay(){
  switch(Math.floor(Math.random()*3)){
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    break;
  }
}

function playerPlay(){
  let playerPlay;
  while (playerPlay != "rock" && playerPlay != "paper" && playerPlay != "scissors"){
    playerPlay = prompt("Enter 'rock', 'paper', or 'scissors' exactly.").toLowerCase();
  }
  return playerPlay
}

function singleRound(playerSelection, computerSelection){
  switch(playerSelection){
    case "rock":
    if (computerSelection === "rock"){
      console.log("Tie!");
      return "tie";
    }else if (computerSelection ==="scissors"){
      console.log("You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "!");
      return "win";
    } else {
      console.log("You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + "!");
      return "lose";
    }
    break;
    case "paper":
    if (computerSelection === "paper"){
      console.log("Tie!");
      return "tie";
    }else if (computerSelection ==="rock"){
      console.log("You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "!");
      return "win";
    } else {
      console.log("You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " cut " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + "!") ;
      return "lose";
    }
    break;
    case "scissors":
    if (computerSelection === "scissors"){
      console.log("Tie!");
      return "tie";
    }else if (computerSelection ==="paper"){
      console.log("You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " cut " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "!");
      return "win";
    } else {
      console.log("You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + "!") ;
      return "lose";
    }
    break;
  }
}

function game(){
  let playerScore = 0
  let computerScore = 0

  while (playerScore < 3 && computerScore < 3){
    result = singleRound(playerPlay(), computerPlay());
    if (result === "win"){
      playerScore += 1;
    }else if (result === "lose"){
      computerScore += 1;
    }
  }
  if (playerScore === 3){
    console.log("You Won the Game! Your opponent had " + computerScore + " wins.")
  }
  if (computerScore === 3){
    console.log("You Lost the Game! You ended with " + playerScore + " wins.")
  }
}

//alert("Let's Play Rock Paper Scissors against a computer! Best of three!");
//game();
