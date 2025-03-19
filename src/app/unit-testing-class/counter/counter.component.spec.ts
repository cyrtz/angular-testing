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

  // 當increment()被呼叫時，count應該+1
  // xit('should ', () => {
  //   component.increment();
  //   expect(component.count).toBe(1);
  // });

  // // 當decrement()被呼叫時，count應該-1
  // xit('should decrement the count by 1', () => {
  //   component.decrement();
  //   expect(component.count).toBe(-1);
  // });

  // 模擬使用者點擊+按鈕
  it('should increment the count by 1 when the increment button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button.increment');
    button.click();
    fixture.detectChanges();
    expect(component.count).toBe(1);
  });
});
