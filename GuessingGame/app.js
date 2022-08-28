let userInput = document.getElementById('userInput');
const form = document.getElementById('form');
const checkMessage = document.getElementById('checkMessage');
let randomNumber = Math.floor(Math.random() * 100 + 1);
let userTries = 1;
const maxTries = 5;
let triesLeft = 5;

form.addEventListener('submit', function (event) {
  let userGuess = userInput.value;
  let message = '';
  form.reset();

  if (userTries === maxTries && userGuess !== randomNumber) {
    triesLeft--;
    message =
      'Ai pierdut! Numarul pe care il aveai de ghicit era: ' + randomNumber;
  } else if (userGuess == randomNumber) {
    message = 'Ai ghicit!';
  } else if (userGuess > randomNumber) {
    message = 'Ai introdus un numar prea mare.';
    userTries++;
    triesLeft--;
  } else if (userGuess < randomNumber) {
    message = 'Ai introdus un numar prea mic.';
    userTries++;
    triesLeft--;
  }

  checkMessage.innerText = message;
  checkTries.innerText = 'Vieti ramase: ' + triesLeft;
  event.preventDefault();
});

function newGame() {
  form.reset();
  randomNumber = Math.floor(Math.random() * 100 + 1);
  userTries = 1;
  userGuess = '';
  message = '';
  triesLeft = 5;
  checkMessage.innerText = message;
  checkTries.innerText = 'Vieti ramase: ' + triesLeft;
}

document.getElementById('resetButton').addEventListener(
  'click',
  function (event) {
    event.preventDefault();
    newGame();
  },
  false,
);
