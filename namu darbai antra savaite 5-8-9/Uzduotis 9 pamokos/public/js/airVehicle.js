"use strict";
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
//# sourceMappingURL=airVehicle.js.map