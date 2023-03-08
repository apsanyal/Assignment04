let userChoice
while (true) {

    userChoice = prompt("Choose rock, paper, or scissors").toLowerCase()
    if (userChoice == "rock" || userChoice == "paper" || userChoice =="scissors"){
        break
    } else {
        alert("Does not compute. Try again.  Hit Ok.")
    }

}

alert (`You picked ${userChoice}!`)

let computerChoice
let randomNumber = Math.floor((Math.random()*3)+1)
if (randomNumber == 1) {
    computerChoice = "rock"
} else if ( randomNumber == 2 ) {
    computerChoice = "paper"
} else (
    computerChoice = "scissors"
)

alert (`The computer picked ${computerChoice}`)

if (userChoice == "rock" && computerChoice == "rock") {
    alert ("It's a tie!")
} else if (userChoice == "rock" && computerChoice == "paper" ) {
    alert ("You lose! Better luck next time!")
} else if (userChoice =="rock" && computerChoice =="scissors") {
    alert ("You win!")
} else if (userChoice == "paper" && computerChoice == "rock") {
    alert ("You win!")    
} else if (userChoice == "paper" && computerChoice =="paper") {
    alert ("It's a tie!")
} else if ( userChoice == "paper" && computerChoice == "scissors") {
    alert ("You lose! Better luck next time!")
} else if (userChoice == "scissors" && computerChoice == "rock") {
    alert ("You lose! Better luck next time!")
} else if (userChoice =="scissors" && computerChoice =="paper") {
    alert ("You win!")
} else if (userChoice =="scissors" && computerChoice =="scissors") {
    alert ("It's a tie!")
}