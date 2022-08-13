/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
type personOne = {
  name:Person['name'],
  surname:Person['surname'],
  married:Person['married']
};

const personIdent = ({ name, surname, married }:Person):personOne => ({ name, surname, married });

const identitiesd:personOne[] = people.map(personIdent);
console.log(identitiesd);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
type ArrayPerson = {
  sex:Person['sex'],
  income:Person['income'],
};

const arrayFunction = ({ sex, income }:Person):ArrayPerson => ({
  sex, income,
});

const ats:ArrayPerson[] = people.map(arrayFunction);
console.table(ats);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
type PersonOne = {
  surname:Person['surname']
  name:Person['name']
  sex:Person['sex']
};

const funkcija = ({ surname, name, sex }:Person):PersonOne => ({ surname, name, sex });
const ats:PersonOne[] = people.map(funkcija);
console.log(ats);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
type Male = {
  sex:Person['sex']
};

const isMale = ({ sex }: Person): boolean => sex === 'male';

const males: Male[] = people.filter(isMale) as Male[];

console.table(people);
console.table(males);

// const res = people.filter((sex) => sex.sex === 'male');
// console.log(res);

console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
type Women = {
  sex:Person['sex']
};
const WomenFunction = ({ sex }:Person) => sex === 'female';

const rest:Women[] = people.filter(WomenFunction) as Women[];
console.log(rest);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  type UsersWithCars = {
    name:Person['name'],
    surname:Person['surname']

  };
  const hasCarFuction = ({ hasCar }:Person):boolean => hasCar === true;
  const justNames = ({ name, surname }:Person):UsersWithCars => ({ name, surname });

  const test:Person[] = people.filter(hasCarFuction);

  const justNamesTes:UsersWithCars[] = test.map(justNames);

  console.table(test);
  console.table(justNamesTes);

  console.groupEnd();

  console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
  {
  type Married = {
    name:Person['name'],
    surname:Person['surname']
  };
  const functionMarried = ({ married }:Person):boolean => married === true;
  const res:Married[] = people.filter(functionMarried);
  console.table(res);
  const resOnlyNames = res.map(({ name, surname }:Married) => ({ name, surname }));
  console.table(resOnlyNames);

    // PALYGINIMAS
    // {
    //   type MarriedPerson = Omit<Person, "married"> & {
    //     married: true
    //   };

    //   const marriedReducer = (result: MarriedPerson[], person: Person): MarriedPerson[] => {
    //     if (person.married) result.push(person as MarriedPerson);

    //     return result;
    //   }

    //   const marriedPeople: MarriedPerson[] = people.reduce(marriedReducer, []);

    //   console.table(people);
    //   console.table(marriedPeople);
    // }
  }
  console.groupEnd();

  console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
  {
    // reikia atskirai vyru ir moteru kiek yra vairuojanciu
    //  prafiltruoti moteris kurios yra true ir vyrus
    //  ir tada tiesiog patirkinti ilgi

type carOwnerBySex = {
  [Key in Person['sex']]?: number
};

const carOwnerLength = (result: carOwnerBySex, person: Person): carOwnerBySex => {
  if (!person.hasCar) return result;

  if (!result[person.sex]) result[person.sex] = 0;

  result[person.sex] = result[person.sex] as number + 1;

  return result;
};

const groupedPeopleBySex: carOwnerBySex = people.reduce(carOwnerLength, {});

console.table(people);
console.log(groupedPeopleBySex);

console.groupEnd();
  }
  console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
  {
    // type ChangeKey= Omit<Person,'income'>&{
    //   salary:Person['income']
    // }
    // const salaryConvert=({income, ...person}:Person)=>{
    //   const result: ChangeKey = { ...person };

    //   if (income) result.salary = income;

    //   return result;
    // }

    // const britishPeople: ChangeKey[] = people.map(salaryConvert);

// console.table(people);
// console.table(britishPeople);
type PersonBritish = Omit<Person, 'income'> & {
  salary?: Person['income']
};

const convertToBritish = ({ income, ...person }: Person): PersonBritish => {
  const result: PersonBritish = { ...person };

  if (income) result.salary = income;

  return result;
};

const britishPeople: PersonBritish[] = people.map(convertToBritish);
console.table(people);
console.table(britishPeople);
  }
  console.groupEnd();

  console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
  {
type PersonRemoveList = Omit<Person, 'sex' | 'surname' | 'name'>;
const deleteList = ({
  sex, surname, name, ...res
}:Person) => res;
const res:PersonRemoveList[] = people.map(deleteList);
console.log(res);
  }
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
 type FullName = Omit<Person, 'name' | 'surname'> & {
   fullname:string
 };
 // eslint-disable-next-line max-len
 const removeKeys = ({ name, surname, ...res }:Person):FullName => ({ ...res, fullname: `${name} ${surname}` });

 const res:FullName[] = people.map(removeKeys);
 console.log(res);
}

console.groupEnd();
