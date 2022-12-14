"use strict";
var weightUnits;
(function (weightUnits) {
    weightUnits["KILOGRAM"] = "kg";
    weightUnits["POUND"] = "lbs";
})(weightUnits || (weightUnits = {}));
var HeightUnit;
(function (HeightUnit) {
    HeightUnit["CENTIMETER"] = "cm";
    HeightUnit["INCHES"] = "in";
    HeightUnit["METERS"] = "m";
})(HeightUnit || (HeightUnit = {}));
const capitalize = (word) => {
    const words = word.trim().split(' ');
    const capitalizeWords = words.map((v) => v[0].toUpperCase() + v.slice(1).toLocaleLowerCase());
    return capitalizeWords.join('');
};
class Person {
    static heightUnits = HeightUnit.CENTIMETER;
    static weightUnits = weightUnits.POUND;
    name;
    surname;
    age;
    height;
    weight;
    constructor(name, surname, age, height, heightUnits, weight, weightUnitss) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnitss);
    }
    setName(name) {
        if (name === '') {
            throw new Error('negali buti tuscias');
        }
        if (name.length < 2)
            throw new Error('vardas turi buti bent is 2 raidziu');
        this.name = capitalize(name);
    }
    setSurname(surname) {
        if (surname === '') {
            throw new Error('negali buti tuscias');
        }
        if (surname.length < 2)
            throw new Error('pavarde turi buti bent is 2 raidziu');
        this.surname = surname[0].toUpperCase() + surname.slice(1);
    }
    getfullName() {
        return `${this.name} ${this.surname}`;
    }
    setAge(age) {
        if (age % 1 !== 0)
            throw new Error('Amzius turi buti sveikas skaicius');
        if (age < 1)
            throw new Error('Amzius negali buti mazesnis nei vienas');
        if (age > 150)
            throw new Error('Amzius negali buti didesnis nei 150 metu');
        this.age = age;
    }
    setWeight(weight, unit) {
        switch (unit) {
            case weightUnits.KILOGRAM:
                this.weight = weight;
                break;
            case weightUnits.POUND:
                this.weight = weight / 2.24;
                break;
            default: break;
        }
    }
    setHeight(height, units = HeightUnit.CENTIMETER) {
        switch (units) {
            case HeightUnit.CENTIMETER:
                this.height = height;
                break;
            case HeightUnit.METERS:
                this.height = height * 100;
                break;
            case HeightUnit.INCHES:
                this.height = height * 2.54;
                break;
            default: break;
        }
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        switch (Person.heightUnits) {
            case HeightUnit.CENTIMETER: return this.height;
            case HeightUnit.METERS: return this.height / 100;
            case HeightUnit.INCHES: return this.height / 2.54;
            default: return this.height;
        }
    }
    getWeight() {
        switch (Person.weightUnits) {
            case weightUnits.KILOGRAM: return this.weight;
            case weightUnits.POUND: return this.weight * 2.24;
            default: return this.weight;
        }
    }
    toString() {
        let formattedPerson = `${this.name} ${this.surname}\n`;
        formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
        formattedPerson += `\tweight: ${this.getWeight()}   ${Person.weightUnits}\n`;
        return formattedPerson;
    }
}
const people = [
    new Person('seSbentautas', 'bordiuras', 40, 190, undefined, 200, weightUnits.POUND),
    new Person('justas', 'sabalSauskas', 15, 1.7, HeightUnit.METERS, 300, weightUnits.POUND),
    new Person('Akvile adams', 'linauskaite', 12, 72, HeightUnit.INCHES, 400, weightUnits.POUND),
];
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
{
    const fullname = people.map((p) => p.getfullName());
    console.log(fullname);
}
console.groupEnd();
console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
{
    const ages = people.map((v) => v.getAge());
    console.log(ages);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
{
    const height = people.map((v) => v.getHeight());
    console.log(height);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
    console.dir(Person);
    console.dir(Person.heightUnits);
    Person.heightUnits = HeightUnit.INCHES;
    console.log(Person.heightUnits);
    Person.heightUnits = HeightUnit.METERS;
    console.log(Person.heightUnits);
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');
console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
{
    Person.heightUnits = HeightUnit.CENTIMETER;
    console.log(people.map((v) => v.getHeight()));
    Person.heightUnits = HeightUnit.INCHES;
    console.log(people.map((v) => v.getHeight()));
    Person.heightUnits = HeightUnit.METERS;
    console.log(people.map((v) => v.getHeight()));
}
console.groupEnd();
console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
{
    Person.weightUnits = weightUnits.KILOGRAM;
    console.log(people.map((w) => w.getWeight()));
    Person.weightUnits = weightUnits.POUND;
    console.log(people.map((w) => w.getWeight()));
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
console.log(people.toString());
//# sourceMappingURL=main.js.map