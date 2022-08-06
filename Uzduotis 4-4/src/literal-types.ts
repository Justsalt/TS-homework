/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';
type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1:HttpRequest = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2:HttpRequest = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    Authorization: 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin ='Berlin'
  type Hamburg ='Hamburg'
  type Munich ='Munich'
  type Cologne ='Cologne'
  type Frankfurt ='Frankfurt'
  type GermanCities= Berlin | Hamburg | Munich | Cologne | Frankfurt

type Poodle = 'Poodle'
type Bulldog = 'Bulldog'
type Beagle = 'Beagle'
type GolderRetriever = 'GoldenRetriever'
type Labrador = 'Labrador'

type dogBreeds = Poodle | Bulldog | Beagle | GolderRetriever | Labrador

type Window ='Window'
type Doors ='Doors'
type Hood ='Hood'
type Wheels ='Wheels'
type Tyres ='Tyres'

type carParts = Window | Doors | Hood | Wheels | Tyres
// ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
{
  const countryOne:GermanCities = 'Munich';
  console.log(countryOne);
}
console.groupEnd();

console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
{
  const dog:dogBreeds = 'Beagle';
  console.log(dog);
}
console.groupEnd();

console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
{
  const carPartOne:carParts = 'Wheels';
  const carPartTwo:carParts[] = ['Doors', 'Wheels', 'Tyres'];
  console.log(carPartOne);
  console.log(carPartTwo);

type carPartObj ={
  parts: carParts,
  dogBreedOne: dogBreeds,
 secondFloor:{
     city: GermanCities
  },
  anotherDogBreed: dogBreeds,
  anything?: string[]

}

const objTestOne:carPartObj = {
  parts: 'Wheels',
  dogBreedOne: 'Beagle',
  secondFloor: {
    city: 'Munich',
  },
  anotherDogBreed: 'Labrador',
  anything: 'labas',
};

console.log(objTestOne);
}

console.groupEnd();
}
console.groupEnd();
