const calculateRectangleArea = function (width, height) {
  return width * height;
};

console.warn(
  `
  Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?
  `,
);

const yield = 25;
const field1Yield = yield * calculateRectangleArea(100, 250);
const field2Yield = yield * calculateRectangleArea(350, 200);
console.log(field2Yield - field1Yield);

console.warn(`
Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?
`);

const beerYield = 2.5 / 10;
const field3Yield = yield * calculateRectangleArea(400, 370);
console.log(beerYield * field3Yield);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina.
Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);

const flourYield = 32;
const breadYield = 2.5;
const field4Yield = calculateRectangleArea(300, 200);
const production = (field4Yield * flourYield) / breadYield;
console.log(production);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);

const field5Surface = calculateRectangleArea(150, 200);
const field6Surface = calculateRectangleArea(500, 300);
const totalSurface = field5Surface + field6Surface;
const totalProduction = (totalSurface * flourYield) / breadYield;

console.log(totalProduction);
