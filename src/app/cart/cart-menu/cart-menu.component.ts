import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from '../cart.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent implements OnInit {

  public cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
   }

  ngOnInit(): void {
  }

}
