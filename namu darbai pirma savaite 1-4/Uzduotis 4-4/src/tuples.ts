/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];/// NELABAI SUPRATAU SITO
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];
console.log(height);

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
type FullNameTuplee = [string, string]
type NameAndNumberTuplee = [number, (num?:number)=> void]
type DogOwner = [string, string]
type Bulldog='Bulldog'
type BlackDog='BlackDog'
type RedDog='RedDog'
type OwenerOne='OwenerOne'
type OwnerTwo='OwnerTwo'
type OwnerThree='OwnerThree'
type SecondOwnerDog= OwenerOne|OwnerTwo|OwnerThree

type Triangle= [{top:[number, number]}, {left:[number, number]}, {right:[number, number]}]
type ShortScript =[number, number]
type TriangleTwo= [ShortScript, ShortScript, ShortScript]
// ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
{
  const personOne:FullNameTuplee = ['Justas', 'Sabaliauskas'];
  const personTwo:FullNameTuplee = ['Greta', 'Rackauskaite'];

  console.log(personOne, personTwo);
}
console.groupEnd();

console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
{
type DogWrapperObj={
  owner:SecondOwnerDog,
  dogBreed:BlackDog,
  secondDogBreed?: string,
  ownerBefore:{
    ownerTwo:OwnerTwo
  },

}

const dogOwnerDataObj:DogWrapperObj = {
  owner: 'OwnerThree',
  dogBreed: 'BlackDog',
  secondDogBreed: 'angel',
  ownerBefore: {
    ownerTwo: 'OwnerTwo',
  },
};
console.log(dogOwnerDataObj);

const dogOwnerOne: DogOwner = ['Suns', 'oweneris'];
const dog:Dog = ['Grikis', 'Grikiaukskas'];
console.log(dog, dogOwnerOne);
}

console.groupEnd();

console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
{
  const triangle2D:Triangle = [{ top: [1, 2] }, { left: [3, 4] }, { right: [5, 2] }];
  const triangle2DTwo:TriangleTwo = [[1, 2], [3, 2], [4, 3]];
  console.log(triangle2D);
  console.log(triangle2DTwo);
}
console.groupEnd();
}
console.groupEnd();
