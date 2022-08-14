class AirVehicle extends Vehicle {
  private maxAltitude: number;

  constructor(maxAltitude:number, vehicleTypes:VehicleTypes) {
    super(vehicleTypes);
    this.maxAltitude = maxAltitude;
  }

  public override getString(): string {
    return `${super.getString()} altitude :  ${this.maxAltitude}`;
  }
}
