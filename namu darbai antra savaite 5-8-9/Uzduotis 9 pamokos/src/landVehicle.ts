class LandVehicle extends Vehicle {
  private tires: string[];

  constructor(tires:string[], vehicleTypes:VehicleTypes) {
    super(vehicleTypes);
    this.tires = tires;
  }

  public override getString(): string {
    return `${super.getString()} tyres : ${this.tires}`;
  }
}
