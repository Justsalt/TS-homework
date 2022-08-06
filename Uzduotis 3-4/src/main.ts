/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
  const arrayLastElement = (num:number[]):void => console.log(num.slice(-1), num.length - 1);

  arrayLastElement(arrayOfNumbers);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');

// const arrayOfNumbers= [1,3,3,4,5,6]

const allIndexOfArray = (array:any[]):void => array.forEach((_, index:number) => console.log(index);

allIndexOfArray(numbers);
allIndexOfArray(words);

// function solution(arr: any[]): void {
//     for (let i = 0; i < arr.length; i++) console.log(i);
//   }

// //   console.log(numbers);
//   solution(numbers);

// //   console.log(words);
//   solution(words);

console.groupEnd();

{
  console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
  const allIndexOfArrays = (array:any[]):void => array.forEach((item:number, index:number) => console.log(`[${index}],${item}`));

  allIndexOfArrays(numbers);
  allIndexOfArrays(words);

  // function solution(arr: any[]): void {
  //     for (let i = 0; i < arr.length; i++) console.log(`[${i}] => ${arr[i]}`);
  //   }

  //   console.log(numbers);
  //   solution(numbers);

  //   console.log(words);
  //   solution(words);

  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // const reverseMethod=(num:any[]):void=>console.log(num.reverse())
  // reverseMethod(numbers)
  // reverseMethod(words)

  // function solution(arr: any[]): void {
  //     for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
  //   }

  //   solution(numbers);
  //   solution(words);

  function reverseMethodAll(array:any) {
    for (let i = array.length - 1; i >= 0; i--) {
      // console.log(i)
      console.log(array[i]);
    }
  }
  reverseMethodAll(words);
  reverseMethodAll(numbers);
}

console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const arrayIndexListJoin:number[] = [];
  function renderAll(num:any) {
    for (let i = 0; i <= num.length - 1; i++) {
      arrayIndexListJoin.push(i);
    }
    console.log(arrayIndexListJoin.join(' '));
  }

  renderAll(words);
  renderAll(numbers);

  // function solution(arr: any[]): void {
  //     const res = arr.map((_, i) => i).join(' ');
  //     console.log(res);
  //     // console.log(...arr.map((_, i) => i));
  //   }

  // //   solution(numbers);
  // //   solution(words);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  const arrayIndexListJoin:number[] = [];
  function renderAll(num:any) {
    for (let i = 0; i <= num.length - 1; i++) {
      arrayIndexListJoin.push(num);
    }
    console.log(num.join(' '));
  }

  renderAll(words);
  renderAll(numbers);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
// pirmas variantas
  const arrayIndexListJoin:any[] = [];
  function renderAllOne(num:any) {
    num.forEach((item:string, index:number) => arrayIndexListJoin.push(`[${index}] => ${item}`));
    console.log(arrayIndexListJoin.join(' '));
  }
  renderAllOne(numbers);

  // antras
  function renderAll(num:any[]) {
    const res = num.map((item, index) => `[${index}] => ${item}`).join(',');
    console.log(res);
  }

  renderAll(numbers);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  const array = (numbers:number[]) => numbers.map((i) => i * 2).join(' ');
  console.log(array(numbers));
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  const array = (numbers:number[]) => numbers.map((i) => i * i).join(' ');
  console.log(array(numbers));
}

console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  const array = (numbers:number[]) => numbers.map((i, x) => i * x).join(' ');
  console.log(array(numbers));
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  // const array=(numbers:number[])=>numbers.map((i)=>i>0?i:"").join(' ')
  // console.log(array(numbers))
  const array = (numbers:number[]) => numbers.filter((i) => i > 0).join(' ');
  console.log(array(numbers));
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  const array = (numbers:number[]) => numbers.filter((i) => i < 0).join(' ');
  console.log(array(numbers));
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  const array = (numbers:number[]) => numbers.filter((i) => i % 2 === 0).join(' ');
  console.log(array(numbers));
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  const array = (numbers:number[]) => numbers.filter((i) => i % 1 === 0).join(' ');
  console.log(array(numbers));
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  const array = (numbers:number[]) => numbers.map((i) => Math.abs(i)).join(' ');
  console.log(array(numbers));
}

console.groupEnd();
