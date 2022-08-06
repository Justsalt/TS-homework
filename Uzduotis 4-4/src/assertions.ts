/* eslint-disable no-lone-blocks */
/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui,
  kuomet programuotojui žinoma daugiau
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = 'Grace' as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓

  const buttonSubmit : HTMLInputElement = document.querySelector('#button-submit') as HTMLInputElement;
  const textOutput : HTMLElement = document.querySelector('#text-output') as HTMLElement;
  const smallSquare : HTMLElement = document.querySelector('#smallSquare') as HTMLElement;

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

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

    let startNumber:number = 0;

    function addToNumber():void {
      divSquareCounter.innerHTML = `the current numer ${1 + startNumber++}`;
    }
    buttonSubmit.onclick = addToNumber;
    smallSquare.prepend(divSquareCounter);
  }
  console.groupEnd();
}
console.groupEnd();
