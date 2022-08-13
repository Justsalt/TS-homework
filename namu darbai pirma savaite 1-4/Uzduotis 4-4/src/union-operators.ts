/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/*
  Union operator (Apjungimo operatorius) yra skirtas aprašytis tipus, kurie apjungia kelis kitus tipus
*/

// Union operatorius deklaruojant kintamajį
type Id = number | string;
const id1: Id = '1321354';
const id2: Id = 17;

const id3: number | string = 47;
const id4: number | string = 'asdasdas';

const id5: number | string | boolean = 47;
const id6: number | string | boolean = 'sdfsdfdsfsdf';
const id7: number | string | boolean = true;

// Union panaudojimas objektų tipuose

type User = {
  name: string,
  surname: string,
  email: string,
  role: 'ADMIN' | 'USER' | 'MODERATOR',
  mobile: string,
};

type Employee = {
  id: number | string,
  name: string,
  surname: string,
  position: 'Janitor' | 'CTO' | 'Programmer',
};

// Union panaudojimas funkcijos tipuose
type Call = (callee: User | string) => void;

const call: Call = (callee) => {
  if (typeof callee === 'string') {
    console.log('Skambinama:', callee);
  } else {
    console.log('Skambinama:', callee.mobile);
  }
};

// Union panaudojimas aprašant masyvus

const data1: Array<number | string> = [1, 5, 'burundukas', 8, 'siurprizas', 7];
//  data1 ir data2 tipai yra identiški.
const data2: (number | string)[] = [1, 5, 'burundukas', 8, 'siurprizas', 7];

type FlagOptions = (1 | 0)[] | boolean[];

const flags1: FlagOptions = [1, 1, 0, 0, 0, 1, 1];
const flags2: FlagOptions = [true, false, false, true, true];

//  Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Union operators - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
type Accommodation=string | number

type AccmmodationObj={
  namas:string,
  aukstas:number,
  spalva:string |number,
  tipas:'house'| 'flat'

}
type Car = {
  transmission: 'Automatic' | 'Manual',
  carColor: 'red' | 'bluee'| 'black'

}

// ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
{
  const accmmodation:Accommodation = 'namas';
  console.log(accmmodation);

  const houseOne:AccmmodationObj = {
    namas: 'grazus',
    aukstas: 20,
    spalva: 222,
    tipas: 'flat',
  };
  console.log(houseOne);
}
console.groupEnd();

console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
{
  const carObj:Car = {
    transmission: 'Manual',
    carColor: 'bluee',
  };
  console.log(carObj);
}
console.groupEnd();

console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
{
  type carHouseWrapperObj= Car | AccmmodationObj

  const houseAndCar:carHouseWrapperObj = {
    transmission: 'Automatic',
    tipas: 'flat',
    carColor: 'red',
  };
  console.log(houseAndCar);
}
console.groupEnd();
}
console.groupEnd();

/// test////
// type moreTypes = Array<(1 | 9| string)> |number
// const kazkas:moreTypes = [1, 9, 'labas', 1, 9, 'ate', 'ate'];
// console.log(kazkas);

// type Calls = (callees: User | string) => void;

// const calls: Calls = (callees) => {
//   if (typeof callees === 'string') {
//     console.log('Skambinama:', callees);
//   } else {
//     console.log('Skambinama:', callees.mobile);
//   }
// };
// call('labas');

// type skambinu=(n1: string) => void

// const funkcija:skambinu = (iskvietimas) => {
//   if (typeof iskvietimas === 'string') {
//     console.log(iskvietimas, ', teisingas');
//   } else {
//     console.log(iskvietimas, ',neteisingas');
//   }
// };

// funkcija(true);
