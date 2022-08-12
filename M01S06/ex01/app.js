/*
Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().
*/

const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  //flags:
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },

  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    //hadling "this" keyword lost reference
    //oldschool
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5000);
  },

  stop: function () {
    this.speed = 0;
  },

  setSpeed: function (mySpeed) {
    if (mySpeed >= -50 && mySpeed <= 160) {
      this.speed = mySpeed;
    } else if (mySpeed < -50) {
      this.speed = this.topReverseSpeed;
    } else if (mySpeed > 160) {
      this.speed = this.topSpeed;
    }
  },
};

console.warn(`
Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
`);

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(`
Decelereaza masina cu 5 unitati apoi afiseaza propozitia: "Viteza noua este speed km/h".
`);

const decelerateCar = function () {
  for (let i = 5; i > 0; i--) {
    car.speed -= 1;
  }
  console.log(`Viteza noua este ${car.speed} km/h.`);
};

console.log(decelerateCar());

console.warn(`
Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
`);

console.warn(`
Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
`);

console.warn(`
Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
`);

console.log(car.stop());
console.log(`Viteza actuala este de ${car.speed} km/h.`);

console.warn(`
Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru
 viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare,
 caz in care se folosesc proprietatile topSpeed si topReverseSpeed
`);

console.log(car.setSpeed(23));
console.log(`Viteza actuala este de ${car.speed} km/h.`);
