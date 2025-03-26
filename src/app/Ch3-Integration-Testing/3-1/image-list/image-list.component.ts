import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageItemComponent } from '../image-item/image-item.component';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, ImageItemComponent],
  templateUrl: './image-list.component.html',
  styles: ``
})
export class ImageListComponent {
  @Input() data: { products: { id: string; title: string; images: string[] }[] } = { products: [] };
}
