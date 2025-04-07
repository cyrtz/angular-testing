import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementListComponent } from './element-list.component';

describe('ElementListComponent', () => {
  let component: ElementListComponent;
  let fixture: ComponentFixture<ElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the elements correctly', () => {
    const visibleElement = fixture.nativeElement.querySelector('[data-test-id="visible-element"]');
    const invisibleElement = fixture.nativeElement.querySelector('[data-test-id="invisible-element"]');

    // 檢視顯示的元素是否存在
    expect(visibleElement).toBeTruthy();
    expect(visibleElement.style.display).toBe('block');

    // 檢視隱藏的元素是否存在但不可見
    expect(invisibleElement).toBeTruthy();
    expect(invisibleElement.style.display).toBe('none');
  });
});
