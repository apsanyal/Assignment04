//STEP 1

function halfNumber(number) {
    let dividedNumber = number /2
    return console.log(`Half of ${number} is ${dividedNumber}`)}

//STEP 2

function squareNumber(number) {
    let squaredNumber = number*number
    return console.log(`The result of squaring the number ${number} is ${squaredNumber}`)
}

//STEP 3

function percentOf(numberOne, numberTwo) {
    let firstNumber = numberOne
    let secondNumber = numberTwo
    let percent = ((firstNumber/secondNumber)*100).toFixed(2)
    return (`${numberOne} is ${percent}% of ${numberTwo}`)
}

//STEP 4

function findModulus(numberOne, numberTwo) {
    let firstNumber = numberOne
    let secondNumber = numberTwo
    let modulusAnswer = (firstNumber%secondNumber)
    return (`${modulusAnswer} is the modulus (remainder) of ${numberOne} divided by  ${numberTwo}`)
}