import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeEvenNumber(): void;
    }
  }
}

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.addMatchers(customMatchers);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test object', () => {
    const num1 = 1;
    const num2 = 2;
    const result = 3.5;
    const test = '';
    // expect(result).toBeCloseTo(4, 0);
    // expect(1).toEqual('a');
    // expect(3).not.toBeEvenNumber();
    // expect(2).toBeEvenNumber();
    // expect(test).toBeTruthy();
    // expect(test).toBeDefined();
    expect(3.5).toBeEvenNumber();
  });
});


const customMatchers = {
  toBeEvenNumber: function (): jasmine.CustomMatcher {
    return {
      compare: function (actual: number) {
        if (typeof actual !== 'number') {
          throw new Error(`${actual} is not a number`);
        } else {
          const result = {
            pass: actual % 2 === 0,
            message: `${actual} is not an even number`
          };
          return result;
        }
      }
    }
  }
}

