"use strict";
const people = [
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
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const personIdent = ({ name, surname, married }) => ({ name, surname, married });
    const identitiesd = people.map(personIdent);
    console.table(identitiesd);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const arrayFunction = ({ sex, income }) => ({
        sex, income,
    });
    const ats = people.map(arrayFunction);
    console.table(ats);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const funkcija = ({ surname, name, sex }) => ({ surname, name, sex });
    const ats = people.map(funkcija);
    console.log(ats);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
const isMale = ({ sex }) => sex === 'male';
const males = people.filter(isMale);
console.table(people);
console.table(males);
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const WomenFunction = ({ sex }) => sex === 'female';
    const rest = people.filter(WomenFunction);
    console.log(rest);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const hasCarFuction = ({ hasCar }) => hasCar === true;
    const justNames = ({ name, surname }) => ({ name, surname });
    const test = people.filter(hasCarFuction);
    const justNamesTes = test.map(justNames);
    console.table(test);
    console.table(justNamesTes);
    console.groupEnd();
    console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
    {
        const functionMarried = ({ married }) => married === true;
        const res = people.filter(functionMarried);
        console.table(res);
        const resOnlyNames = res.map(({ name, surname }) => ({ name, surname }));
        console.table(resOnlyNames);
    }
    console.groupEnd();
    console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
    {
        const carOwnerLength = (result, person) => {
            if (!person.hasCar)
                return result;
            if (!result[person.sex])
                result[person.sex] = 0;
            result[person.sex] = result[person.sex] + 1;
            return result;
        };
        const groupedPeopleBySex = people.reduce(carOwnerLength, {});
        console.table(people);
        console.log(groupedPeopleBySex);
        console.groupEnd();
    }
    console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
    {
        const convertToBritish = ({ income, ...person }) => {
            const result = { ...person };
            if (income)
                result.salary = income;
            return result;
        };
        const britishPeople = people.map(convertToBritish);
        console.table(people);
        console.table(britishPeople);
    }
    console.groupEnd();
    console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
    {
        const deleteList = ({ sex, surname, name, ...res }) => res;
        const res = people.map(deleteList);
        console.log(res);
    }
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const removeKeys = ({ name, surname, ...res }) => ({ ...res, fullname: `${name} ${surname}` });
    const res = people.map(removeKeys);
    console.log(res);
}
console.groupEnd();
//# sourceMappingURL=main.js.map