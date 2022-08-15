import WaterVehicle from "./waterVehicle.js";
import AirVehicle from "./airVehicle.js";
import LandVehicle from "./landVehicle.js";
const waterVehicleOne = new WaterVehicle(200, {
    brand: 'bmw',
    model: 'audi',
    year: 200,
});
console.log(waterVehicleOne);
console.log(waterVehicleOne.getString());
const landVehicle = new LandVehicle(['dideliRati'], {
    brand: 'mersedesas',
    model: 'c-class',
    year: 2010,
});
console.log(landVehicle);
console.log(landVehicle.getString());
const airVehicle = new AirVehicle(200, {
    brand: 'pasatas',
    model: 'kazkoks',
    year: 1993,
});
console.log(airVehicle.getString());
console.log(airVehicle);
//# sourceMappingURL=main.js.map