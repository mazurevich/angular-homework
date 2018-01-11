import { Component, Input, OnInit } from '@angular/core';

import ProductCategory from '../../models/category';
import Product from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private cart: CartService) {
  }

  ngOnInit() {
  }

  onBuy() {
    console.log(`Buying product: ${this.product.toString()}`);
    this.cart.buy(this.product);
  }
}
