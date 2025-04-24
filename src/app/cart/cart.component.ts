import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart = [
    { name: 'iPhone', price: 25000, quantity: 1 },
    { name: 'AirPods', price: 7000, quantity: 2 },
  ];

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  updateQuantity(index: number, newQuantity: number) {
    this.cart[index].quantity = newQuantity;
  }

  total() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

}
