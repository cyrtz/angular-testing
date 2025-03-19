import { Component } from '@angular/core';

@Component({
  selector: 'app-check-valentines-day',
  standalone: true,
  imports: [],
  templateUrl: './check-valentines-day.component.html',
  styles: ``
})
export class CheckValentinesDayComponent {
  checkValentinesDay(): string {
    const today = this.getToday();
    return today === '2/14' ? 'Happy Valentine\'s Day!' : 'Today is not Valentine\'s Day.';
  }

  getToday(): string {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${month}/${day}`;
  }

}
