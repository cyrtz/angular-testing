import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckValentinesDayComponent } from './check-valentines-day.component';

describe('CheckValentinesDayComponent', () => {
  let component: CheckValentinesDayComponent;
  let fixture: ComponentFixture<CheckValentinesDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckValentinesDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckValentinesDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('2/3 should not be Valentine\'s Day', () => {
    spyOn(component, 'getToday').and.returnValue('2/3');
    expect(component.checkValentinesDay()).toBe('Today is not Valentine\'s Day.');
  });

  it('2/14 should be Valentine\'s Day', () => {
    spyOn(component, 'getToday').and.returnValue('2/14');
    expect(component.checkValentinesDay()).toBe('Happy Valentine\'s Day!');
  });

});
