import { Injectable } from '@angular/core';
import Product from '../models/product.model';

@Injectable()
export class CartService {

  private products: Product[];

  constructor() {
    this.products = [];
  }

  public buy(product: Product) {
    this.products.push(product);
  }

  public getProducts() {
    return this.products;
  }

  clearAll() {
    this.products = [];
  }

}
