import { Injectable } from '@angular/core';
import Product from '../models/product.model';
import ProductCategory from '../models/category';


const p1 = new Product('name1',
  1,
  'some product1',
  ProductCategory.MusicalInstruments,
  true,
  ['a', 'b', 'c', 'd']
);
const p2 = new Product('name2',
  2,
  'some product2',
  ProductCategory.Sport,
  true,
  ['c', 'd']
);
const p3 = new Product('name3',
  3,
  'some product3',
  ProductCategory.Electronic,
  true,
  ['a', 'b']
);

p1.equivalents = [p2, p3];
p2.equivalents = [p1];
const productsMock = [p1, p2, p3];


@Injectable()
export class ProductService {

  constructor() {
  }


  getProducts(): Product[] {
    return productsMock;
  }

}
