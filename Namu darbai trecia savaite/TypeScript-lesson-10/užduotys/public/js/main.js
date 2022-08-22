"use strict";
class Person {
    constructor(id, name, surname) {
        this.getPersonInfo = () => `${this.id}${this.name} ${this.surname}`;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
}
class Job {
    constructor() {
        this.finished = false;
        this.payed = false;
        this.completeJob = () => ;
        this.setJobPayed = () => ;
        this.getPay = () => ;
        this.isFinished = () => ;
        this.isPayed = () => ;
        this.toString = () => ;
    }
}
class BuisnessLicencePerson extends Employee {
    constructor() {
        super(...arguments);
        this.calcPay = () => {
        };
    }
    toString() {
    }
}
class SelfEmployedPerson extends Employee {
    constructor() {
        super(...arguments);
        this.calcPay = () => {
        };
    }
    toString() {
    }
}
class WorkPerson extends Employee {
    constructor() {
        super(...arguments);
        this.calcPay = () => {
        };
    }
    toString() {
    }
}
//# sourceMappingURL=main.js.map