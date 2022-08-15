import Vehicle from "./Vehicle.js";
class LandVehicle extends Vehicle {
    tires;
    constructor(tires, vehicleTypes) {
        super(vehicleTypes);
        this.tires = tires;
    }
    getString() {
        return `${super.getString()} tyres : ${this.tires}`;
    }
}
export default LandVehicle;
//# sourceMappingURL=landVehicle.js.map