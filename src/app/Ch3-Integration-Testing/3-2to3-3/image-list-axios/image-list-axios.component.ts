import { Component, OnInit } from '@angular/core';
import { ImageItemComponent } from '../image-item/image-item.component';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-image-list-axios',
  standalone: true,
  imports: [CommonModule, ImageItemComponent],
  templateUrl: './image-list-axios.component.html',
  styles: ``
})
export class ImageListAxiosComponent implements OnInit {
  images: { id: number; title: string; images: string[] }[] = [];

  async ngOnInit() {
    this.images = await this.getProducts();
  }

  async getProducts() {
    try {
      const response = await axios.get<{ products: { id: number; title: string; images: string[] }[] }>(
        'https://dummyjson.com/products'
      );
      return response.data.products;
    } catch (error) {
      console.error('API 請求錯誤:', error);
      return [];
    }
  }

}
