/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */

/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum largeCities{
    Vinius = 'Vilnius',
    Kaunas='Kaunas',
    Klaipeda='Klaipeda',
    Siauliai='Siauliai',
    Panevezys='Panevezys'

  }
  enum HumanPopuliation {
    Honduras= 9904607,
    'United Arab Emirates'=9890402,
    Djibouti=988000,
    'Saint Barthelemy'=9877,
    Seychelles=98347

  }
  enum Bvp{
    Liuksemburgas= 10,
    Sveicarija,
    Makao,
    Norvegija,
    Airija

  }

  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
   const cityOne:largeCities=largeCities.Klaipeda
   console.log(cityOne)


  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
const cityTwo:HumanPopuliation[]=[HumanPopuliation.Honduras,HumanPopuliation.Seychelles] 
console.log(cityTwo)
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const cityThree:Bvp[]=[
      Bvp.Airija,
      Bvp.Liuksemburgas,
      Bvp.Makao,
      Bvp.Norvegija,
      Bvp.Sveicarija
    ]
    console.log(cityThree)
  }
  console.groupEnd();
}
console.groupEnd();
