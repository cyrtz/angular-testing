import { Injectable } from '@angular/core';
import { ICartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ICartItem[] = [
    { name: 'MacBook', price: 50000, quantity: 1 },
    { name: 'iPhone', price: 30000, quantity: 1 },
  ];

  getCart() {
    return [...this.cart];
  }

  remove(index: number) {
    this.cart.splice(index, 1);
  }

  increase(index: number) {
    this.cart[index].quantity++;
  }

  decrease(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    }
  }
}
