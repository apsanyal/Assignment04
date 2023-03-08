// IMPORT THE MODULE

import { addition } from "./modules/calculator.js";
import {subtraction} from "./modules/calculator.js";
import {multiplication} from "./modules/calculator.js";
import {division} from "./modules/calculator.js";


// COLLECT FIRST NUMBER FROM USER




let again = "y"
do {

let firstNumber = Number(prompt("Enter a number."))

// COLLECT SECOND NUMBER FROM USER
let secondNumber = Number(prompt("Enter a number."))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = (prompt("Pick an operation: +,-,*,/"))


// CHECK TO SEE WHAT OPERATION THEY'RE USING
console.log(operation)

// CALL THE APPROPRIATE FUNCTION

calculate (operation)

again = prompt('Play again? (y or n)')

} while (again === "y")

