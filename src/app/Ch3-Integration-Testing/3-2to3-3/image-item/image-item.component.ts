import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],
  templateUrl: './image-item.component.html',
  styles: ``
})
export class ImageItemComponent {
    @Input() title!: string;
    @Input() image!: string;
}
