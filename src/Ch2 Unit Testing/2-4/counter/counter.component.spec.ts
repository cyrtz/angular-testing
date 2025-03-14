import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 測試點擊+按鈕後，數字要+1
  it('should increment the count by 1', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  // 測試點擊-按鈕後，數字要-1
  it('should decrement the count by 1', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  // 模擬使用者點擊+按鈕
  it('should increment the count by 1 when the increment button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button.increment');
    button.click();
    fixture.autoDetectChanges();
    expect(component.count).toBe(1);
  });

  // 模擬使用者點擊-按鈕
  it('should decrement the count by 1 when the decrement button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button.decrement');
    button.click();
    fixture.autoDetectChanges();
    expect(component.count).toBe(-1);
  });
});
