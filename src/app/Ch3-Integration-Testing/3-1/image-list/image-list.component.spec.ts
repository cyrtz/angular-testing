import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListComponent } from './image-list.component';
import { ImageItemComponent } from '../image-item/image-item.component';

import { By } from '@angular/platform-browser';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageListComponent, ImageItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render no data prompt when no images', () => {
    component.data = { products: [] };
    fixture.detectChanges();

    const noDataElement = fixture.debugElement.query(By.css('[data-test-id="no-data-prompt"]'));
    expect(noDataElement).toBeTruthy();
    expect(noDataElement.nativeElement.textContent.trim()).toBe('No data to display.')
  });

  it('should render correct image items when have data', () => {
    component.data = {
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
    fixture.detectChanges();

    const imageItems = fixture.debugElement.queryAll(By.css('app-image-item'));
    expect(imageItems.length).toBe(2);

    // 檢查第一個 ImageItem 的數據
    const firstImageItem = imageItems[0].componentInstance as ImageItemComponent;
    expect(firstImageItem.title).toBe('打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵');
    expect(firstImageItem.image).toBe('https://bit.ly/4228IT0');

    // 檢查第二個 ImageItem 的數據
    const secondImageItem = imageItems[1].componentInstance as ImageItemComponent;
    expect(secondImageItem.title).toBe('島波海道。單車跳島之旅');
    expect(secondImageItem.image).toBe('https://bit.ly/4b5nLPO');
  });
});
