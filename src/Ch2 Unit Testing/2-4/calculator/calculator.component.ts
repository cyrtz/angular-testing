import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styles: ``
})
export class CalculatorComponent {
  operators = [
    { value: '+', label: '加' },
    { value: '-', label: '減' },
    { value: '*', label: '乘' },
    { value: '/', label: '除' }
  ];
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;
  operator: string = '+';

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
    }
  }

}
