export class Vehicle {
    brand;
    model;
    year;
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        return `this ${this.brand} are ${this.model} old ${this.year}`;
    }
}
export default Vehicle;
//# sourceMappingURL=Vehicle.js.map