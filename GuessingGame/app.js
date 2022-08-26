let userInput = document.getElementById('userInput');
const form = document.getElementById('form');
const checkMessage = document.getElementById('checkMessage');
let randomNumber = Math.floor(Math.random() * 100 + 1);
let userTries = 1;
const maxTries = 5;

form.addEventListener('submit', function (event) {
  let userGuess = userInput.value;
  let message = '';

  if (userTries === maxTries && userGuess !== randomNumber) {
    message = 'Ai pierdut!';
    checkButton.remove();
  } else if (userGuess == randomNumber) {
    message = 'Ai ghicit!';
    checkButton.remove();
  } else if (userGuess > randomNumber) {
    message = 'Ai introdus un numar prea mare.';
    userTries++;
  } else if (userGuess < randomNumber) {
    message = 'Ai introdus un numar prea mic.';
    userTries++;
  }

  checkMessage.innerText = message;
  event.preventDefault();
});

/* Incer o functie de reset

form.addEventListener('reset', function (event) {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  userTries = 1;
  userGuess = '';
  message = '';
  document.getElementById('form').reset();
  checkMessage.innerText = message;
  event.preventDefault();
});
*/
