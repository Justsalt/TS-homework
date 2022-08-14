import Vehicle, { VehicleTypes } from './Vehicle.js';

class WaterVehicle extends Vehicle {
  private maxDepth:number;

  constructor(maxDepth:number, vehicleTypes:VehicleTypes) {
    super(vehicleTypes);
    this.maxDepth = maxDepth;
  }

  // public override toString = (): string => {
  //   return `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
  // };
  public override getString(): string {
    return `${super.getString()} maxDepth: ${this.maxDepth}`;
  }
}
export default WaterVehicle;
