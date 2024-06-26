const gameOptions = ["rock", "paper", "scissors"];

//function that randomly returns “rock”, “paper” or “scissors to get computer choice
function getComputerChoice() {
    compChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(compChoice);
    return compChoice;
};

//function that takes the user choice and returns it
function getHumanChoice() {
    let state = true;
    while (state) { 
        userInput = prompt("Enter you choice(rock, paper or scissors):");
        userInput = userInput.toLowerCase();
        if (gameOptions.includes(userInput.trim()) === true){
            console.log(userInput);
            state = false;
            return userInput;
        };

    };
};


//Declare the players score variables
let humanScore = 0;
let computerScore = 0;


//function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement

function playRound(userInput, compChoice) {
    if (userInput == compChoice){
        console.log("It is a draw")
    }
    else if ((userInput == "rock" && compChoice == "scissors") || (userInput == "paper" && compChoice == "rock") || (userInput == "scissors" && compChoice == "paper")){
        humanScore += 1;
        console.log(`You win. ${userInput} beats ${compChoice}`);
    }
    else{
        computerScore += 1;
        console.log(`You lose. ${compChoice} beats ${userInput}`)
    }
    
};


//function that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end
function playGame(){
    for (let i = 0; i < 5; i++){
        let userInput = getHumanChoice();
        let compChoice = getComputerChoice();

        playRound(userInput, compChoice);

        console.log("User Score: ", humanScore)
        console.log("Bot Score: ", computerScore)
    }

    if (humanScore > computerScore){
        console.log("Congratulations! You won the whole game");
    }
    else {
        console.log("You lost the game. Refresh to start again");
    };
};


//Call a main function to start a game
playGame();