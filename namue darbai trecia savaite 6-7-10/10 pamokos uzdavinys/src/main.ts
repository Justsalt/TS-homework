/* eslint-disable max-classes-per-file */
abstract class Person {
  protected id!: string;

  protected name!: string;

  protected surname!: string;

  public getPersonInfo = (): string => `${this.name} ${this.surname} ${this.id}`;
}

abstract class Employee extends Person {
    public abstract calcPay(): number;
}

class WorkPerson extends Employee {
  public hourPay: number;

  public fullTimeEquivalent: number;

  constructor(hourPay:number, fullTimeEquivalent:number, name:string, surname:string, id:string) {
    super();
    this.name = name;
    this.surname = surname;
    this.id = id;

    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  calcPay = (): number => this.hourPay * this.fullTimeEquivalent;
}
type WorkingHours={
    name:string;
    surname:string
    id:string
}
class SelfEmployedPerson extends Employee {
  private hourPay!: number;

  private hoursWorked!: number;

  constructor({ name, surname, id }:WorkingHours) {
    super();
    this.name = name;
    this.surname = surname;
    this.id = id;
  }

  public calcPay(): number {
    return this.hourPay * this.hoursWorked;
  }

  public hoursSpendOnJob(hours:number, hoursWorked:number) {
    this.hoursWorked = hoursWorked;
    this.hourPay = hours;
    return `Hour pay:${this.hourPay} Hours Worked:${this.hoursWorked}`;
  }
}

class BuisnessLicencePerson extends Employee {
  private hourPay!: number;

  private hoursWorked!: number;

  constructor(hourPay:number, hoursWorked:number, name:string, surname:string, id:string) {
    super();
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
    this.name = name;
    this.surname = surname;
    this.id = id;
  }

  public calcPay(): number {
    return this.hourPay * this.hoursWorked;
  }

  public hoursSpendOnJob() {
    return `Hour pay:${this.hourPay} Hours Worked:${this.hoursWorked}`;
  }

// public override toString(): string
}

const buisnessLicencePerson:BuisnessLicencePerson[] = [
  new BuisnessLicencePerson(20, 20, 'Karolis', 'Grazdauskas', '49394393049409'),
];
buisnessLicencePerson.forEach((i) => console.log(`Person info:${i.getPersonInfo()} Hour rate ${i.hoursSpendOnJob()},total earning ${i.calcPay()}`));

const workPersons: WorkPerson[] = [
  new WorkPerson(20, 100, 'jonas', 'jonauskas', '2224325235'),
  new WorkPerson(27, 140, 'petras', 'giedrauskas', '23242352352'),
];
workPersons.forEach((i) => console.log(`Person Info: ${i.getPersonInfo()} Hour rate ${i.hourPay}$ Hours worked ${i.fullTimeEquivalent}, total earning ${i.calcPay()}$`));

const selfEmployedPersons:SelfEmployedPerson[] = [
  new SelfEmployedPerson({ name: 'Grazulis', surname: 'Grazauskas', id: '43534534' }),
  new SelfEmployedPerson({ name: 'Petras', surname: 'Malisauskas', id: '32234234' }),

];

selfEmployedPersons.forEach((i) => console.log(`Person Info: ${i.getPersonInfo()} ${i.hoursSpendOnJob(2999, 200)}, total earning ${i.calcPay()}$`));
