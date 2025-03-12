import { Component } from '@angular/core';

@Component({
  selector: 'app-add-numbers',
  standalone: true,
  imports: [],
  templateUrl: './add-numbers.component.html',
  styles: ``
})
export class AddNumbersComponent {
  addNumbers = (a: number, b: number) => Number((a + b).toFixed(1));
}
