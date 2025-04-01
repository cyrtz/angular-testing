import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ImageItemComponent } from '../image-item/image-item.component';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, ImageItemComponent],
  templateUrl: './image-list.component.html',
  styles: ``
})
export class ImageListComponent implements OnInit {
  images: { id: number; title: string; images: string[] }[] = [];
  private http = inject(HttpClient);

  ngOnInit() {
    // this.getProducts();
  }

  getProducts() {
    this.http.get<{ products: { id: number; title: string; images: string[] }[] }>(
      'https://dummyjson.com/products'
    ).subscribe(response => {
      this.images = response.products;
    });
  }
}
