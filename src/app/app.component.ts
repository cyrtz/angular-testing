import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "../Ch2 Unit Testing/2-4/counter/counter.component";
import { CalculatorComponent } from "../Ch2 Unit Testing/2-4/calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-testing';
}
