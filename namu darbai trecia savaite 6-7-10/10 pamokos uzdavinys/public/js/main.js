"use strict";
class Person {
    id;
    name;
    surname;
    getPersonInfo = () => `${this.name} ${this.surname} ${this.id}`;
}
class Employee extends Person {
}
class WorkPerson extends Employee {
    hourPay;
    fullTimeEquivalent;
    constructor(hourPay, fullTimeEquivalent, name, surname, id) {
        super();
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay = () => this.hourPay * this.fullTimeEquivalent;
}
class SelfEmployedPerson extends Employee {
    hourPay;
    hoursWorked;
    constructor({ name, surname, id }) {
        super();
        this.name = name;
        this.surname = surname;
        this.id = id;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    hoursSpendOnJob(hours, hoursWorked) {
        this.hoursWorked = hoursWorked;
        this.hourPay = hours;
        return `Hour pay:${this.hourPay} Hours Worked:${this.hoursWorked}`;
    }
}
class BuisnessLicencePerson extends Employee {
    hourPay;
    hoursWorked;
    constructor(hourPay, hoursWorked, name, surname, id) {
        super();
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
        this.name = name;
        this.surname = surname;
        this.id = id;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    hoursSpendOnJob() {
        return `Hour pay:${this.hourPay} Hours Worked:${this.hoursWorked}`;
    }
}
const buisnessLicencePerson = [
    new BuisnessLicencePerson(20, 20, 'Karolis', 'Grazdauskas', '49394393049409'),
];
buisnessLicencePerson.forEach((i) => console.log(`Person info:${i.getPersonInfo()} Hour rate ${i.hoursSpendOnJob()},total earning ${i.calcPay()}`));
const workPersons = [
    new WorkPerson(20, 100, 'jonas', 'jonauskas', '2224325235'),
    new WorkPerson(27, 140, 'petras', 'giedrauskas', '23242352352'),
];
workPersons.forEach((i) => console.log(`Person Info: ${i.getPersonInfo()} Hour rate ${i.hourPay}$ Hours worked ${i.fullTimeEquivalent}, total earning ${i.calcPay()}$`));
const selfEmployedPersons = [
    new SelfEmployedPerson({ name: 'Grazulis', surname: 'Grazauskas', id: '43534534' }),
    new SelfEmployedPerson({ name: 'Petras', surname: 'Malisauskas', id: '32234234' }),
];
selfEmployedPersons.forEach((i) => console.log(`Person Info: ${i.getPersonInfo()} ${i.hoursSpendOnJob(2999, 200)}, total earning ${i.calcPay()}$`));
//# sourceMappingURL=main.js.map