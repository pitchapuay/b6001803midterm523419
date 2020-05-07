import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'
import { productsModel } from 'src/app/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: productsModel = []

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

   getCounter() {
    return this.cartService.getCounter();
  }

  getsumPrice() {
    // return this.cartService.getsumPrice();
  }

}
