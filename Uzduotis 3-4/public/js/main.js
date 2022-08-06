"use strict";
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
    const arrayLastElement = (num) => console.log(num.slice(-1), num.length - 1);
    arrayLastElement(arrayOfNumbers);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
const allIndexOfArray = (array) => array.forEach((_, index) => console.log(index));
allIndexOfArray(numbers);
allIndexOfArray(words);
console.groupEnd();
{
    console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
    const allIndexOfArrays = (array) => array.forEach((item, index) => console.log(`[${index}],${item}`));
    allIndexOfArrays(numbers);
    allIndexOfArrays(words);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function reverseMethodAll(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            console.log(array[i]);
        }
    }
    reverseMethodAll(words);
    reverseMethodAll(numbers);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const arrayIndexListJoin = [];
    function renderAll(num) {
        for (let i = 0; i <= num.length - 1; i++) {
            arrayIndexListJoin.push(i);
        }
        console.log(arrayIndexListJoin.join(' '));
    }
    renderAll(words);
    renderAll(numbers);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const arrayIndexListJoin = [];
    function renderAll(num) {
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
{
    const arrayIndexListJoin = [];
    function renderAllOne(num) {
        num.forEach((item, index) => arrayIndexListJoin.push(`[${index}] => ${item}`));
        console.log(arrayIndexListJoin.join(' '));
    }
    renderAllOne(numbers);
    function renderAll(num) {
        const res = num.map((item, index) => `[${index}] => ${item}`).join(',');
        console.log(res);
    }
    renderAll(numbers);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    const array = (numbers) => numbers.map((i) => i * 2).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const array = (numbers) => numbers.map((i) => i * i).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const array = (numbers) => numbers.map((i, x) => i * x).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const array = (numbers) => numbers.filter((i) => i > 0).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const array = (numbers) => numbers.filter((i) => i < 0).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const array = (numbers) => numbers.filter((i) => i % 2 === 0).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const array = (numbers) => numbers.filter((i) => i % 1 === 0).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const array = (numbers) => numbers.map((i) => Math.abs(i)).join(' ');
    console.log(array(numbers));
}
console.groupEnd();
//# sourceMappingURL=main.js.map