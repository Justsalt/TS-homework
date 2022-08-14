import Vehicle from './Vehicle.js';
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor(maxDepth, vehicleTypes) {
        super(vehicleTypes);
        this.maxDepth = maxDepth;
    }
    getString() {
        return `${super.getString()} maxDepth: ${this.maxDepth}`;
    }
}
export default WaterVehicle;
//# sourceMappingURL=waterVehicle.js.map