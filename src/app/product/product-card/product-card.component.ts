import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productRow: Product[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  setClasses(product: Product) {
    return {
      'card-danger': product.isSpecial,
      'card-inverse': product.isSpecial
    };
  }

  buy(product: Product) {
    this.cartService.addProduct(product)
  }
}
