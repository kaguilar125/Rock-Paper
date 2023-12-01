let compChoice;
let userChoice;
let randomNum;
let numLimit;
let winner;


function getRandomNum(low, high){
    return Math.floor(Math.random() * (high - low)) + low;
}

switch (randomNumber){
    case '0':
        userChoice = ('rock')
        break;

        case'1':
        userChoice=('paper');
        break;

        case'2':
        userChoice=('scissors');
        break;
}

    function determineWinner(){
    if(userChoice === "rock" && compChoice === "paper"){
        riturn = "Computer"
    } else if(userChoice === "rock" && compChoice === "scissors"){
        riturn = "User";
        } else if(userChoice === "rock" && compChoice === "rock"){
            riturn = "User";
        } else if(userChoice === "rock" && compChoice === "scissors"){
            riturn = "Computer";
        } else if(userChoice === "rock" && compChoice === "rock"){
            riturn = "Computer";
        } else if(userChoice === "rock" && compChoice === "paper"){
            riturn = "User";
        } else if(userChoice === compChoice){
            riturn = "No win! Its a tie";
    }
}

userChoice = chooseMove(getRandomNum(0.3));
console.log("User Chose" + userChoice);

userChoice = chooseMove(getRandomNum(0.3));
console.log("Computer Chose" + compChoice);

userChoice = chooseMove(getRandomNum(0.3));
console.log("The winner is..." + winner);
