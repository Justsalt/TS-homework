
// const vardai:string[]=["justas","Lina","Paulius"]
// console.log(vardai)


// const printkazkas = (strings: string[]): void=> { // funkcija
//     const printkazka = (str: string): void => console.log(str); //
//     strings.forEach(printkazka);
// }
// printkazkas(vardai)



// const pavardes: string[]=["sabaliauskas","bnaliauskas","mieliauskas"]


// const funkcija= (string:string[]):void =>{

// const funkcijos=(str:string):void => console.log(str)
// string.forEach(funkcijos)
// }
// funkcija(pavardes)


// const pavardess: string[]=["sabaliauskas","bnaliauskas","mieliauskas"]


// // const funkcijas= (string:string[]):void =>{

// const funkcijos=(str:string):void => console.log(str)
// string.forEach(funkcijos)
// }
// funkcija(pavardess)



// const printStrings = (strings: string[]): void => {

//     const printString = (str: string): void => console.log(str);
//     strings.forEach(printString);
// };
// printStrings(vardai)

// const numberss: number[] = [1, 2, 3, 4, 5, 6,7];
// const sumNumberss = (nums: Array<number>): number => {
//     const numberSumReducer = (sum: number, num: number): number => sum + num;
  
//     return nums.reduce(numberSumReducer, 0);
//   };

// const result: number = sumNumberss(numberss);
// console.log({
//   numberss,
//   result,
// });


const numeriai:number[]=[1,2,3,4,5,6,7]
console.log(numeriai)
const bendraSuma = (nums: number[]):number =>{
    const bendraSumaReducer = (suma:number, nums:number): number => suma + nums

    return nums.reduce(bendraSumaReducer)
}

const resultatas: number = bendraSuma(numeriai)
console.log(numeriai,resultatas)



