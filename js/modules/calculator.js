// ADD A PRIVATE FUNCTION CALLED CALCULATE


function calculate (operation, firstNumber, secondNumber){
    
    switch (operation) {
        case "+":
            addition (firstNumber,secondNumber)
        case "-":
            subtraction (firstNumber,secondNumber)
        case "*":
            multiplication (firstNumber,secondNumber)
        case "/":
           division (firstNumber, secondNumber)
        
        }
}


// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////


// ADD FUNCTION

function addition (firstNumber, secondNumber){
   return alert(firstNumber+" + "+ secondNumber + " = "+ (firstNumber+secondNumber))
}

// SUBTRACT FUNCTION

function subtraction (firstNumber, secondNumber){
    return alert(firstNumber+" - "+ secondNumber + " = "+ (firstNumber-secondNumber))
}


// MULTIPLY FUNCTION

function multiplication (firstNumber, secondNumber){
    return alert(firstNumber+" * "+ secondNumber + " = "+ (firstNumber*secondNumber))
}


// DIVIDE FUNCTION

function division (firstNumber, secondNumber){
    return alert(firstNumber+" / "+ secondNumber + " = "+ (firstNumber/secondNumber))
}


// EXPORT THE FOUR PUBLIC FUNCTIONS

export {addition}
export {subtraction}
export {multiplication}
export {division}