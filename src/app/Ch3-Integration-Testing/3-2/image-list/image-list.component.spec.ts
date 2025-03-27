import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListComponent } from './image-list.component';
// import {  HttpTestingController } from '@angular/common/http/testing';
import { ImageItemComponent } from '../image-item/image-item.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;
  let httpTesting: HttpTestingController;

  const mockResponse = {
    products: [
      {
        id: '1',
        title: '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵',
        images: ['https://bit.ly/4228IT0'],
      },
      {
        id: '2',
        title: '島波海道。單車跳島之旅',
        images: ['https://bit.ly/4b5nLPO'],
      },
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageListComponent, ImageItemComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  });

  it('should render correct image items when have data', () => {
    const mockConfig = { apiUrl: 'https://dummyjson.com/products' };
    component.getProducts();

    const req = httpTesting.expectOne(mockConfig.apiUrl);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
    fixture.detectChanges();

    const imageItems = fixture.nativeElement.querySelectorAll('app-image-item');
    expect(imageItems.length).toBe(2);
  });
});
