const displayInput = document.getElementById('inputValue')

// Variables
const operators = ['-', '+', '%', '*', '/', '(', ')']
let operations =[]
let currValue = ''

//Functions & Operations

// Handle Interactions
function handleInteraction(value) {
    console.log(value)
    if (operators.includes(value)) {
        console.log('Clicked an operator: ', value)
        handleOperatorInput(value)
    } else {
        console.log('Clicked a numeric value: ', value)
        handleNumericInput(value)
    }
    updateUi()
}

function handleNumericInput(value) {
    currValue += value
    console.log('NEW VALUE: ', currValue)
}

function handleOperatorInput(value) {
    
}

function handleEvaluate() {

}

function handleReset() {

}

function updateUi() {

}