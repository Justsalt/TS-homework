"use strict";
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
//# sourceMappingURL=landVehicle.js.map