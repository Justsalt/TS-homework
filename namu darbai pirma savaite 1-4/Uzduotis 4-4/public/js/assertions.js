"use strict";
const someNumber = 17;
const title = 'Grace';
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const buttonSubmit = document.querySelector('#button-submit');
    const textOutput = document.querySelector('#text-output');
    const smallSquare = document.querySelector('#smallSquare');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        buttonSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            textOutput.textContent = 'paspausta! ';
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        buttonSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            const divSquare = document.createElement('div');
            divSquare.style.height = '100px';
            divSquare.style.width = '100px';
            divSquare.style.margin = '5px';
            divSquare.style.backgroundColor = 'red';
            smallSquare.append(divSquare);
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const divSquareCounter = document.createElement('div');
        let startNumber = 0;
        function addToNumber() {
            divSquareCounter.innerHTML = `the current numer ${1 + startNumber++}`;
        }
        buttonSubmit.onclick = addToNumber;
        smallSquare.prepend(divSquareCounter);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map