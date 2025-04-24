import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item: { name: string; price: number; quantity: number } = { name: '', price: 0, quantity: 0 };
  @Output() remove = new EventEmitter<void>();
  @Output() quantityChange = new EventEmitter<number>();

  increase() {
    this.quantityChange.emit(this.item.quantity + 1);
  }

  decrease() {
    if (this.item.quantity > 1) {
      this.quantityChange.emit(this.item.quantity - 1);
    }
  }
}
