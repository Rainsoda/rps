function computerPlay() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            return declareResult("tie", playerSelection, computerSelection);
        } else if (computerSelection === "PAPER") {
            return declareResult("lose", playerSelection, computerSelection);
        } else {
            return declareResult("win", playerSelection, computerSelection);
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return declareResult("win", playerSelection, computerSelection);
        } else if (computerSelection === "PAPER") {
            return declareResult("tie", playerSelection, computerSelection);
        } else {
            return declareResult("lose", playerSelection, computerSelection);
        }
    } else {
        if (computerSelection === "ROCK") {
            return declareResult("lose", playerSelection, computerSelection);
        } else if (computerSelection === "PAPER") {
            return declareResult("win", playerSelection, computerSelection);
        } else {
            return declareResult("tie", playerSelection, computerSelection);
        }
    }
}

function declareResult(result, playerSelection, computerSelection) {
    if (result === 'tie') {
        return `TIE! Both ${playerSelection}`;
    } else if (result === 'win') {
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tallyMsg = `Player score: ${playerScore} Computer score: ${computerScore}`;
    
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}!`);
        
        let playerSelection = inputChoice();
        if (playerSelection === null) break;
        console.log(`Player choice: ${playerSelection}`);
        
        let computerSelection = computerPlay();
        console.log(`Computer choice: ${computerSelection}`);
        
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("WIN")) playerScore++;
        else if (roundResult.includes("LOSE")) computerScore++;
        
        tallyMsg = `Player score: ${playerScore} Computer score: ${computerScore}\n\n`;
        console.log(tallyMsg);
    }    
    
    if (playerScore > computerScore) console.log(`Player wins! ${tallyMsg}`);
    else if (playerScore < computerScore) console.log(`Computer wins! ${tallyMsg}`);
    else console.log(`Tie! No one wins! ${tallyMsg}`);
}

function inputChoice() {
    let input = prompt("Choose ROCK, PAPER or SCISSORS");
    if (input === null) return null;
    input = input.toUpperCase();
    while (input !== "ROCK" && input !== "PAPER" && input !== "SCISSORS" && input !== "SCISSOR") {
        errorMsg = `Your input is ${input}. Choose ROCK, PAPER or SCISSORS`;
        input = prompt(errorMsg);
        if (input === null) return null;
        input = input.toUpperCase();
    }
    return input;
}

game();