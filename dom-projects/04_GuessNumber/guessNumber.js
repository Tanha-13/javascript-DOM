//imp: Project overview
/**
 * 01. validation
 * 02. check the guess number will match the random number or not.
 * 03. display previous and remaining guess
 * 04. display message
 * 05. end the game
 * 06. start the message
 */

const guessField = document.querySelector('#guessField');
const submit = document.querySelector("#submitButton");
const preGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

//generating the random number
const randomNumber = Math.floor(Math.random() * 100 + 1);

//collecting the guess number from the user input using click event in submit button
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guessNumber = parseInt(guessField.value);
    validateGuess(guessNumber);
})

function validateGuess(guess){
    
    
}
