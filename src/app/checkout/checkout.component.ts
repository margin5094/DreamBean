import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart, CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  term: boolean;
  cart: Cart;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private cartService: CartService) {
    this.cart = this.cartService.cart
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: []
    })
  }

  onSubmit() {
    alert('Submitted');
    this.cartService.clearCart();
    this.form.reset();
    this.router.navigate(['/welcome'])
  }

}
