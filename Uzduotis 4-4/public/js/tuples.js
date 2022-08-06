"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.log(height);
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const personOne = ['Justas', 'Sabaliauskas'];
        const personTwo = ['Greta', 'Rackauskaite'];
        console.log(personOne, personTwo);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const dogOwnerDataObj = {
            owner: 'OwnerThree',
            dogBreed: 'BlackDog',
            secondDogBreed: 'angel',
            ownerBefore: {
                ownerTwo: 'OwnerTwo',
            },
        };
        console.log(dogOwnerDataObj);
        const dogOwnerOne = ['Suns', 'oweneris'];
        const dog = ['Grikis', 'Grikiaukskas'];
        console.log(dog, dogOwnerOne);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle2D = [{ top: [1, 2] }, { left: [3, 4] }, { right: [5, 2] }];
        const triangle2DTwo = [[1, 2], [3, 2], [4, 3]];
        console.log(triangle2D);
        console.log(triangle2DTwo);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map