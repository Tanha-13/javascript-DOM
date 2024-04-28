//imp: Project overview
/**
 * 01. validation
 * 02. check the guess number will match the random number or not.
 * 03. display previous and remaining guess
 * 04. display message
 * 05. end the game
 * 06. start the message
 */

const guessField = document.querySelector("#guessField");
const submit = document.querySelector("#submitButton");
const displayNone = document.querySelectorAll(".displayNone");
const preGuess = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
const displayResult = document.querySelector(".result");
const resultContainer = document.querySelector(".resultParas");


const p = document.createElement("p");

//generating the random number
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

//collecting the guess number from the user input using click event in submit button
let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guessNumber = parseInt(guessField.value);
    validateGuess(guessNumber);
  });
}

let remainingGuess = parseInt(remaining.innerText);
function validateGuess(guess) {
  if (isNaN(guess)) {
    return alert("Please provide a valid number");
  } else if (guess < 1 || guess > 100) {
    return alert("Please provide a number between 1 and 100");
  } else {
    previousAndRemaining(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right.");
    endGame();
  } else if (guess < randomNumber) {
    return displayMessage("Number is Low");
  } else if (guess > randomNumber) {
    return displayMessage("Number is High");
  }
}

function previousAndRemaining(guess) {
  guessField.value = "";
  preGuess.innerHTML += `${guess} `;
  --remainingGuess;
  remaining.innerHTML = `${remainingGuess}`;

  if (remainingGuess === 0) {
    endGame();
  }
}

function displayMessage(message) {
  displayResult.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guessField.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  displayNone.forEach((element) => {
    element.style.display = "none";
  });
  p.innerHTML = `
    <button
          id="newGame"
          class="submitButton"
        >Start Over </button>
    `;
  resultContainer.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    guessField.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    displayNone.forEach((element) => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
            
          } else {
            element.style.display = 'none';
          }
    });
    remaining.innerHTML = '';
    preGuess.innerHTML = '';
    displayMessage('');
    playGame = true;
    resultContainer.removeChild(p);
  });
}
