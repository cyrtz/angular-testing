import { ComponentFixture, TestBed } from '@angular/core/testing';
import axios from 'axios';
import { ImageListAxiosComponent } from './image-list-axios.component';
import { ImageItemComponent } from '../image-item/image-item.component';

describe('ImageListAxiosComponent', () => {
  let component: ImageListAxiosComponent;
  let fixture: ComponentFixture<ImageListAxiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageListAxiosComponent, ImageItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageListAxiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch and render mocked data correctly', async () => {
    const mockedData = {
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
      ],
    };

    const mockResponse = {
      data: mockedData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { url: 'https://dummyjson.com/products' },
    };

    spyOn(axios, 'get').and.returnValue(Promise.resolve(mockResponse as any));

    await component.ngOnInit();
    fixture.detectChanges();

    const imageItems = fixture.nativeElement.querySelectorAll('app-image-item');
    expect(imageItems.length).toBe(2);
  });
});
