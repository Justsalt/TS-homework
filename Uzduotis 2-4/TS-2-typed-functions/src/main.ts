/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/*
  Funkcijos aprašomos tokiu būdu:
    * apibūdinami(aprašomi tipais) visi funkcijos parametrai
    * nurodomas funkcijos iškvietimo grąžinimo tipas
*/

// Funkcija aprašoma deklaruojant
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// Funkcijos tipas aprašytas prieš funkcijos deklaravimą
  /*
    Aprašius funkciją tipu nebereikia įvardinti tipų deklaruojant funkciją.
    funkcijų tipai yra deklaruojami atskirai, kuomet:
      * norima funkcijos tipą pritaikyti ne vienai funkcijai
      * funkcijos parametrų ar grąžinimo tipas yra sudėtingi
  */
  type binaryStringBuilder = (str1: string, str2: string) => string;

const joinStrings: binaryStringBuilder = (str1, str2) => `${str1} ${str2}`;

const createInitials: binaryStringBuilder = function (str1, str2) {
  return str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
};

const sum: number = addNumbers(5, 7);
const joinedString: string = joinStrings('Penediktas', 'Tušinis');
const initials: string = createInitials('Penediktas', 'Tušinis');

console.log({
  sum,
  joinedString,
  initials,
});

/*
    Kuomet funkcijos nieko negrąžina, turime nurodyti tipą
      * void - funkcijos grąžinimo tipas nebus reikalaujamas
  */

function printRedText(text: string): void {
  console.log(`%c ${text}`, 'color: #ee0000');
}

printRedText('printRed funkcijos argumentas');

console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
  const multiply = (a:number, b:number):number => a * b;

  const power = function (base:number, powerx:number) {
    return base ** powerx;
  };

  const squareRoot = (number:number) => number ** (1 / 2);

  const root = function (base:number, nthRoot:number) {
    return base ** (1 / nthRoot);
  };

  const printBlueText = (text:string) => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();

console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
type Multiply=(num1:number, num2:number) => number
type SquareRoot =(num1:number)=> number

const multiply:Multiply = (a, b) => a * b;

const power:Multiply = function (base, powers) {
  return base ** powers;
};

const squareRoot:SquareRoot = (number) => number ** (1 / 2);

const root:Multiply = function (base, nthRoot) {
  return base ** (1 / nthRoot);
};

const printBlueText = (text:string) => console.log(`%c${text}`, 'color: #0000ee');

const num1: number = 16;
const num2: number = 4;

console.log({
  [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
  [`power(${num1}, ${num2})`]: power(num1, num2),
  [`squareRoot(${num1})`]: squareRoot(num1),
  [`root(${num1}, ${num2})`]: root(num1, num2),
});
printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
