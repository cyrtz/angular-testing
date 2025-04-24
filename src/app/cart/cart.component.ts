import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './cart.service';
import { ICartItem } from './cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // cart = [
  //   { name: 'iPhone', price: 25000, quantity: 1 },
  //   { name: 'AirPods', price: 7000, quantity: 2 },
  // ];

  // removeItem(index: number) {
  //   this.cart.splice(index, 1);
  // }

  // updateQuantity(index: number, newQuantity: number) {
  //   this.cart[index].quantity = newQuantity;
  // }

  // total() {
  //   return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // }
  cart: ICartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  remove(index: number) {
    this.cartService.remove(index);
    this.cart = this.cartService.getCart();
  }

  increase(index: number) {
    this.cartService.increase(index);
    this.cart = this.cartService.getCart();
  }
  
  decrease(index: number) {
    this.cartService.decrease(index);
    this.cart = this.cartService.getCart();
  }
}
