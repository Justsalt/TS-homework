/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
// Sukurkite klasę WaterVehicle, kuri turėtų savybes: brand: string, model: string, year: number, maxDepth: number

// Sukurkite klasę LandVehicle, kuri turėtų savybes: brand: string, model: string, year: number, tires: string[],

// Sukurkite klasę AirVehicle, kuri turėtų savybes: brand: string, model: string, year: number, maxAltitude: number,

// Sukurkite klasę Vehicle ir padarykite ją tėvine [1.], [2.] ir [3.] punktais sukurtoms klasėms. 4.1 bendras savybes(brand, model, year) aprašykite su 'protected' pasiekiamumo lygiu. 4.2 perrrašykite visų klasių konstruktorius, jog bendros savybės (brand, model, year) būtų perduotos tėviniam konstruktoriui

// Vehicle klasėje aprašykite metodą 'public getString(): string' kuris suformuotų pagindinė informaciją(brand, model, year)

// Vehicle klasėje pakeiskite metodą 'public getString(): string' į 'PROTECTED getString(): string'. Kiekvienoje paveldinčioje klasėje sukurkite metodus 'public toString(): string', kurios naudotų tėvinės klasės metodus metodą 'PROTECTED getString(): string' tam kad suformuoti pilną savosios klasės reprezentaciją

// Tėvinės klasės Vehicle konstruktoriaus parametrus aprašykite objektu, ir perrašykite vaikinių klasių konstruktorius.

// Išskaidykite kodą atskirais failais

// const waterVehicleOne = new WaterVehicle(200, 'bmw', 'audi', 200);
import WaterVehicle from "./waterVehicle.js";
import AirVehicle from "./airVehicle.js";
import LandVehicle from "./landVehicle.js";


const waterVehicleOne = new WaterVehicle(
  200,
  {
    brand: 'bmw',
    model: 'audi',
    year: 200,
  },
)

console.log(waterVehicleOne);
console.log(waterVehicleOne.getString());

const landVehicle = new LandVehicle(
  ['dideliRati'],
  {
    brand: 'mersedesas',
    model: 'c-class',
    year: 2010,
  },
);
console.log(landVehicle);
console.log(landVehicle.getString());
const airVehicle = new AirVehicle(
  200,
  {
    brand: 'pasatas',
    model: 'kazkoks',
    year: 1993,
  },
);
console.log(airVehicle.getString());
console.log(airVehicle);
// class Person{

//     constructor(name, age){
//         this.name=name;
//         this.age=age;

//     }
//     Welcome(){
//         console.log('hello',this.name);
//         console.log('you are ',this.age,'year old');
//     }

// }
// class Student extends Person{
//     constructor(name, age,gpa){
//   super(name,age)
//         this.gpa=gpa

//     }
//     hello(){
//        super.Welcome()
//         console.log('your ',this.gpa,'size');
//     }

// }
// class Teacher extends Person{
//     constructor(name, age,classSize){
//         super(name,age)
//         this.classSize=classSize

//     }
//     hello(){
//         super.Welcome()
//         console.log('your ',this.classSize,'size');
//     }

// }

// let student = new Student("justas",21,2.0)
// let teacher = new Teacher("stebve",45,3.0)
// // console.log(student.name)
// // console.log(student.age)
// // console.log(student.gpa)
// student.hello()
// teacher.hello()

// // console.log(teacher.name)
// // console.log(teacher.age)
// // console.log(teacher.classSize)
