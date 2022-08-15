import Vehicle from "./Vehicle.js";
class AirVehicle extends Vehicle {
    maxAltitude;
    constructor(maxAltitude, vehicleTypes) {
        super(vehicleTypes);
        this.maxAltitude = maxAltitude;
    }
    getString() {
        return `${super.getString()} altitude :  ${this.maxAltitude}`;
    }
}
export default AirVehicle;
//# sourceMappingURL=airVehicle.js.map