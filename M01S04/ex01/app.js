var value = window.prompt('Introdu o valoare');
var message = '';
var number = window.prompt('Cu ce numar compar?');

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu ai introdus un numar';
} else if (value === number) {
  message = `nr ${value} este egal cu ${number}`;
} else if (value > number) {
  message = `nr ${value} este mai mare decat ${number}`;
} else {
  message = `nr ${value} este mai mic decat ${number}`;
}

/*
if (value > number) {
  message = `Nr e mai mare decat ${number}`;
} else {
  message = `nr e mai mic decat ${number}`;
} */

var messageParagraph = document.getElementById('message');
messageParagraph.innerText = message;
