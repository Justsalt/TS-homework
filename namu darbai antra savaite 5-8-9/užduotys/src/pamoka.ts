// // const names:string[] = ['luigi', 'mario', 'ypshi'];
// // names.push('ss');
// // // names.push(3);
// // console.log(names);

// // const person = [
// //   {
// //     name: 'Jonas',
// //     surname: 'Jonaitis',
// //     sex: 'male',
// //     age: 26,
// //     income: 1200,
// //     married: false,
// //     hasCar: false,
// //   },
// // ];
// // console.log(person);
// // explicit types///
// // let chracter:string;
// // let age:number;
// // let isLoggedIn:boolean;
// // xxx.....................
// // // arrays////
// // let ninjas:string[];
// // ninjas = ['20', 30];
// //
// // union types
// // const mixed :(string | number | boolean)[] = [];
// // mixed.push('hello');
// // mixed.push(20);
// // mixed.push(true);

// // console.log(mixed);

// // let uid:string | number;
// // uid = 123;
// // uid = 'labas';
// // object.........

// // const ninjas = { name: 'yoshi', age: 20 };
// // let ninjasTwo:{
// //   name:string,
// //   age:number,
// //   beltColour:string,
// // };
// // ninjasTwo = {
// //   name: 'mario',
// //   age: 230,
// //   beltColour: 'red',
// // };
// // generics///

// const addUID = <T>(obj:T) => {
//   const uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// const docOne = addUID({ vardas: 'Justas', pavarde: 'Sabaliauskas' });
// // const docTwo = addUID('hello');
// console.log(docOne.pavarde);
// // console.log(docTwo);

// interface Resource {
//   uid:number;
//   resourceName:string;
//   data:'???'

// }
// enum ResouceTyupe {book, atuhror, film, director};
//                    0       1       2       3

//   let arr=["labas",1,2,3,true]
//   arr[0]=false
//   arr[1]='tohsi'
//   let tup:[string,number,boolean]=['trye',25,true]

//   class Invoice{
//     client:string;
//     details:string;
//     amount:number;

//     constructor(c:string,d:string,a:number){
// this.client=c;
// this.details=d;
// this.amount=a
//     }
//     format(){
//         return `${this.client} owes ${this.amount} for ${this.details}`
//     }
//   }
//   const invOne = new Invoice("justas","work for this mario",200)
