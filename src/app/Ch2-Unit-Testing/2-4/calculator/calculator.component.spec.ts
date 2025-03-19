import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 純邏輯測試
  it('should add 1 and 5 to get 6', () => {
    component.firstNumber = 1;
    component.secondNumber = 5;
    component.operator = '+';
    component.calculate();
    expect(component.result).toBe(6);
  });

  // 模擬使用者按下calcuate的按鈕後，畫面可以正確顯示結果
  it ('should display the correct result when the calculate button is clicked', () => {
    const firstNumberInput = fixture.nativeElement.querySelector('.first-number');
    const secondNumberInput = fixture.nativeElement.querySelector('.second-number');
    const operatorSelect = fixture.nativeElement.querySelector('.operator');
    const calculateButton = fixture.nativeElement.querySelector('button');
    const result = fixture.nativeElement.querySelector('.result');

    firstNumberInput.value = 1;
    firstNumberInput.dispatchEvent(new Event('input'));

    secondNumberInput.value = 5;
    secondNumberInput.dispatchEvent(new Event('input'));

    operatorSelect.value = '+';
    operatorSelect.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    calculateButton.click();
    fixture.detectChanges();

    expect(result.textContent).toContain('6');
  });
});
