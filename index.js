let choices = ["rock", "paper", "scissors"]
const winners = []
function game() {
    for (let i = 1; i<6; i++){
        
        console.log("Game: "+ i)
        playRound();
    }
    renderResults()
}

function playRound(){
    const playerSelection = playerChoice();
    //console.log ("Player choice: " + playerSelection)
    const computerSelection = computerChoice();
    //console.log ("Computer choice: " + computerSelection)
    const winner = compareChoices(playerSelection, computerSelection)
    winners.push(winner);
}

function playerChoice(){
    let input = prompt("Pick rock, paper or scissors");
     while (input == null){
        input = prompt("Pick again! rock, paper or scissors");
    }
        input = input.toLowerCase();
        let check = validateInput(input);
        while (check == false ){
         input = prompt("PICK AGAIN WITH PROPER SPELLING!!!! ROCK, PAPER OR SCISSOR ONLY U DUMB ASS");
        
         
         while (input == null){
            input = prompt("Pick again! rock, paper or scissors");
         }

         input = input.toLowerCase();
         check = validateInput(input);
        }
       return input;
    } 



function validateInput(choice){
    return choices.includes(choice);
    }


function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function compareChoices(choiceP, choiceC){
    if (choiceP === choiceC) {
        return 'Tie'
    } else if (
        (choiceP === "rock" && choiceC === "scissor")||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissor" && choiceC === "paper")
    ){
        return "Player";
    } else {
        return "Computer"
    }
}

function renderResults(){
    let playerWins = winners.filter((item)=> item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log ("Results: ")
    console.log ("Player wins: ", playerWins)
    console.log ("Computer wins: ", computerWins)
    console.log ("Ties: ", ties)
}


game();