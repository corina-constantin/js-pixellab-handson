const userInput = document.getElementById('userInput');
const form = document.getElementById('form');
const checkMessage = document.getElementById('checkMessage');
const randomNumber = Math.floor(Math.random() * 100 + 1);

form.addEventListener('submit', function (event) {
  let userGuess = userInput.value;
  let message = '';
  let userTries = 1;

  for (userTries = 1; userTries < 6; userTries++) {
    if (userGuess == randomNumber) {
      //aici daca pun === nu imi valideaza
      // console.log('Ai ghicit!');
      message = 'Ai ghicit!';
      checkButton.remove();
      break;
    } else if (userGuess > randomNumber) {
      message = 'Ai introdus un numar prea mare.';
      //   console.log('Ai introdus un numar prea mare.');
    } else if (userGuess < randomNumber) {
      message = 'Ai introdus un numar prea mic.';
      //   console.log('Ai introdus un numar prea mic.');
    }

    if (userTries == 6) {
      break;
      checkButton.remove();
    }
  }

  checkMessage.innerText = message;
  event.preventDefault();
});

/*
Ar mai trebui:
- validare pentru cazul in care numarul introdus e mai mare decat 1 si mai mic decat 100
- daca nu a fost introdus niciun numar
- sa se stearga numarul introdus dupa ce apas butonul de submit
- sa se opreasca bucla cand trec de 5 incercari si sa dea un mesaj "Ai pierdut. Incearca din nou.". Momentan nu merge
- ziceai ceva sa valideze numarul la Click, nu cand apas Enter?
*/
