export type VehicleTypes={
    brand:string, model:string, year:number
}
// type WaterVehicleProps = {
//     maxDepth: number
//   }
export default class Vehicle {
  protected brand:string;

  protected model:string;

  protected year:number;

  constructor({ brand, model, year }:VehicleTypes) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString(): string {
    return `this ${this.brand} are ${this.model} old ${this.year}`;
  }
}
