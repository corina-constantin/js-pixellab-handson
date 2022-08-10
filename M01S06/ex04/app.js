//siaf - iife -- functie ce se executa si apoi dispare din memorie

/* (function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      console.log('Mouseul este pe scena');
      const p = document.createElement('p');
      p.innerText = 'Mouseul este pe scena';

      document.body.append(p);
    });

    stage.addEventListener('mouseout', function () {
      console.log('Mouseul NU este pe scena');
      const p = document.createElement('p');
      p.innerText = ' Moseul NU este pe scena';

      document.body.append(p);
    });
  });
})(); */

// siaf - iife
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';
      console.log(message);
      showMessage(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul nu este pe scena';
      console.log(message);
      showMessage(message);
    });
  });

  // hoisting
  function showMessage(message) {
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = message;
    paragraphElement.classList.add('message');

    document.body.append(paragraphElement);
  }
})();
