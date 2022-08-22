/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];
const booleans: boolean[] = [true, true, true, true, false];
const mix:(boolean|string)[] = [true, true, true, true, false, 'labas'];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // eslint-disable-next-line no-shadow
  const firstElement = <T>(numbers:T[]):T | undefined => numbers[0];
  console.log(firstElement(numbers));
  console.log(firstElement(strings));
  console.log(firstElement(booleans));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const lastElement = <T>(arr:T[]):T => arr[arr.length - 1];
  console.log(lastElement(numbers));
  console.log(lastElement(strings));
  console.log(lastElement(booleans));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const sameType = <T extends PrimitiveType>(arr:T[]):T[] => {
    const copy:T[] = arr.map((i) => i);
    return copy;
  };
  console.log(sameType(numbers));
  console.log(sameType(strings));
  console.log(sameType(booleans));
  console.log(sameType(mix));
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  type ArrayType = [PrimitiveType, number]

  const arrayOfValues:ArrayType[] = [
    ['a', 10],
    ['bbb', 3],
    ['Jonas', 5],
  ];

  const duplicate = <T extends PrimitiveType> (value:T, number:T):T => {
    console.log(Array.from(new Array(number)).map((i) => value));
  };
  arrayOfValues.map((arr) => arr.join(', ') + duplicate(...arr));

  // Sprendimas ir rezultatų spausdinimas
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  type ArrayType<T> = [T[], T[]];

  const arraTwo:ArrayType<string> = [['vienas', 'du', 'tris', 'keturi', 'penki'], ['sesi', 'septyni', 'astuoni']];
  const arrayOne:ArrayType<number> = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];

  const mergeArrays = <T> (arrOne:T[], arrTwo:T[]):T[] => [...arrOne, ...arrTwo];

  console.log(mergeArrays(...arrayOne));
  console.log(mergeArrays(...arraTwo));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type allValueTypes<Type> = {
        setValue: (newValue: Type) => void,
        getValue: () => Type
      };

  const solution = <Type>(initialValue: Type): allValueTypes<Type> => {
    let value: Type = initialValue;

    return {
      setValue: (newValue) => value = newValue,
      getValue: () => value,
    };
  };

  const obj1 = solution(7);
  const obj2 = solution(['Kiausinis', 'Pienas', 'Varske']);
  const obj3 = solution({ name: 'Justas', surname: 'Sabaliauskas' });

  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  });

  obj1.setValue(100);
  obj2.setValue(['changed']);
  obj3.setValue({ name: 'Rokas', surname: 'Krasauskas' });

  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  });
}

console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards

// nusirasiau, nesugebejau pats isspresti
{
  type Person = {
        name: string,
        surname: string,
      };

      type Student = Person & {
        university: string,
        course: number,
      };

      type Worker = Person & {
        avgMonthlyPay: number,
      };

      type GroupedPeople = {
        people: Person[],
        students: Student[],
        workers: Worker[],
      };

      const isWorker = (person: Person): person is Worker => (person as Worker).avgMonthlyPay !== undefined;

      const isStudent = (person: Person): person is Student => {
        const student = person as Student;

        return student.university !== undefined && student.course !== undefined;
      };

      const solution = (people: Person[]): GroupedPeople => {
        const groupedPeople = people.reduce<GroupedPeople>((prevGroupedPeople, person) => {
          const newGroupedPeople = { ...prevGroupedPeople };

          if (isWorker(person)) newGroupedPeople.workers.push(person);
          if (isStudent(person)) newGroupedPeople.students.push(person);
          else newGroupedPeople.people.push(person);

          return newGroupedPeople;
        }, {
          people: [],
          students: [],
          workers: [],
        });

        return groupedPeople;
      };

      const people: (Person | Student | Worker)[] = [
        {
          name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
        },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        {
          name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
        },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        {
          name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
        },
      ];

      const groupedPeople = solution(people);

      console.log(groupedPeople);
}
