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
const displayResult = document.querySelector(".result");

//generating the random number
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

//collecting the guess number from the user input using click event in submit button
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guessNumber = parseInt(guessField.value);
    validateGuess(guessNumber);
})

function validateGuess(guess){
    if(isNaN(guess)){
        return alert('Please provide a valid number');
    }
    else if(guess < 1 || guess > 100){
        return alert('Please provide a number between 1 and 100');
    }

    checkGuess(guess);

    
}

function checkGuess(guess){
    if(guess === randomNumber){
        return displayResult.innerHTML = `<h2>You guessed it right</h2>`;
    }
    else if(guess < randomNumber){
        return displayResult.innerHTML = `<h2>Sorry, Your guess is low. Try Again</h2>`;
    }
    else if(guess > randomNumber){
        return displayResult.innerHTML = `<h2>Sorry, Your guess is high. Try Again</h2>`;
    }
}
