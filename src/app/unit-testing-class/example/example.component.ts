import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  sum: number = 0;
  num1: number = 0;
  num2: number = 0;

  // add(num1: number, num2: number) {
  //   this.sum = num1 + num2;
  // }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }
}
