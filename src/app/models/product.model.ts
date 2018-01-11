import ProductCategory from './category';

class Product {

  constructor(public name: string,
              public price: number,
              public description = '',
              public category = ProductCategory.Electronic,
              public isAvailable = true,
              public ingredients = [],
              public equivalents = []) {

  }

  toString() {
    return `${this.name} ${this.price}`;
  }
}

export default Product;
