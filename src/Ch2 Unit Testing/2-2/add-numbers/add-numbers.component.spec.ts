import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumbersComponent } from './add-numbers.component';

describe('AddNumbersComponent', () => {
  let component: AddNumbersComponent;
  let fixture: ComponentFixture<AddNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //輸入1和2，結果等於3
  it('should return 3 when 1 + 2', () => {
    expect(component.addNumbers(1, 2)).toBe(3);
  });

  //輸入0.1和0.2，結果等於0.3
  it('should return 0.3 when 0.1 + 0.2', () => {
    expect(component.addNumbers(0.1, 0.2)).toBe(0.3);
  });
});
