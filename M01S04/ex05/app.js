var number = prompt('Introdu un numar:');

for (var i = 0; i <= 1000; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}.`);
}
