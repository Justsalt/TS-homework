import Model from '../types/model';
import Car from '../types/car';
import CarJoined from '../types/car-joined';
import Brand from '../types/brand';

type CarsCollectionProps = {
  cars: Car[],
  brands: Brand[],
  models: Model[],
};

class CarsCollection {
  private props: CarsCollectionProps;

  constructor(props: CarsCollectionProps) {
    this.props = props;
  }

  private joinCar = ({ modelId, ...car }: Car) => {
    const carModel = this.props.models.find((model) => model.id === modelId);
    const carBrand = this.props.brands.find((brand) => brand.id === carModel?.brandId);

    return {
      ...car,
      brand: (carBrand && carBrand.title) ?? 'unknown',
      model: (carModel && carModel.title) ?? 'unknown',
    };
  };

  public get all(): CarJoined[] {
    return this.props.cars.map(this.joinCar);
  }
}

export default CarsCollection;
