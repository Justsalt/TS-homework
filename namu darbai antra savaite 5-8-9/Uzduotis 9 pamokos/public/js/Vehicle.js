export default class Vehicle {
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
//# sourceMappingURL=Vehicle.js.map