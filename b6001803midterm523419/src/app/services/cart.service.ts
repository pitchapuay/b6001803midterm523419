import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0
  counter: number = 0;

  constructor(private productsService: ProductService) { }

  add(p_id: number) {
    console.log('Add product id: ' + p_id + ' to cart');
    this.cartProduct.push(this.productsService.getSomeProduct(p_id));
    this.total += this.productsService.getSomeProduct(p_id).price;
    this.counter = this.cartProduct.length;
  }

  getCounter() {
    return this.counter;
  }

  getTotal() {
    return this.total;
  }

  getCart() {
    return this.cartProduct
}
}
