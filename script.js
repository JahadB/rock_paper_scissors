const gameOptions = ["rock", "paper", "scissors"];

//function that randomly returns “rock”, “paper” or “scissors to get computer choice
let compChoice = "";
function getComputerChoice() {
    compChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    console.log(compChoice);
};
    
getComputerChoice();
//function that takes the user choice and returns it
let userInput = "";
function getHumanChoice() {
    let state = true;
    while (state) { 
        userInput = prompt("Enter you choice(rock, paper or scissors):");
        userInput = userInput.toLowerCase();
        if (gameOptions.includes(userInput.trim()) === true){
            console.log(userInput);
            state = false;
        };

    };
};
getHumanChoice();


//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

console.log("User Score: ", humanScore)
console.log("Bot Score: ", computerScore)


