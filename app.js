 const choice = ["rock", "paper", "scissors"]


 let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choice.length) 
    let computerChoice = choice[randomIndex]
    return computerChoice
}

let getPlayerChoice = () => {
    let choice = prompt("Choose rock paper or scissors :")
    return choice
}

export let rules = (computerChoice = getComputerChoice() , playerChoice = getPlayerChoice()) => {
    let message
    if(
    (computerChoice === "rock" && playerChoice === "scissors") || 
    (computerChoice === "paper" &&  playerChoice === "rock")   ||
    (computerChoice === "scissors" && playerChoice === "paper")){
        message = "You lost"
    } else if (computerChoice === playerChoice){
        message = "Tie"
    }else{
        message = "You win"
    }
    
    return message
}

export let determinateWinner = (computerChoice = getComputerChoice(), playerChoice = getPlayerChoice()) => {
    let result = rules(computerChoice, playerChoice)
    let winner

    if(result === "You lost"){
        winner = "computer"
        return winner
    }else if (result === "Tie"){
         winner = "tie"
         return winner}
    else{
        winner = "you"
        return winner
    }
