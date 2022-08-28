import cars from '../data/cars';
import models from '../data/models';
import Table from './table';
import CarsCollection from '../helpers/cars-collection';
import brands from '../data/brands';
import stringifyProps from '../helpers/stingify-object';
// REALIAI TAI BEVEIK VISKĄ NUSIRAŠIAU, NES MANO NESIGAVO TAIP KAIP TURĖJO
class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    this.carsCollection = new CarsCollection({ cars, brands, models });

    if (foundElement === null) throw new Error(`Nerastas elementas '${selector}'`);

    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const carTable = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'Id',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina',
        year: 'Metai',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
    });

    const container = document.createElement('div');
    container.className = 'container my-5';
    container.appendChild(carTable.htmlElement);

    this.htmlElement.append(container);
  };
}

export default App;
