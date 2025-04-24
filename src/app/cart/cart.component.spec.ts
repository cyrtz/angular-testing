import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display cart items', () => {
    const items = fixture.debugElement.queryAll(By.css('app-cart-item'));
    expect(items.length).toBe(2);
  });

  it('should increase the quantity and update the total when clicked the + button ', () => {
    const item = component.cart[0];
    const originalTotal = component.total();

    const button = fixture.debugElement.query(By.css('[test-id="increase"]'));
    button.nativeElement.click();
    fixture.detectChanges();

    expect(item.quantity).toBe(2);
    expect(component.total()).toBeGreaterThan(originalTotal);
  });

  it('should decrease the quantity when clicked the - button ', () => {
    const item = component.cart[1];
    const buttons = fixture.debugElement.queryAll(By.css('[test-id="decrease"]'));
    const button = buttons[1];

    button.nativeElement.click();
    fixture.detectChanges();

    expect(item.quantity).toBe(1);

    const updateTotal = component.total();
    const totalText = fixture.nativeElement.querySelector('[test-id="total"]').textContent;

    expect(totalText).toContain(`總金額：${updateTotal} 元`);

  });

  it('should remove the item when clicked the remove button', () => {
    const button = fixture.debugElement.query(By.css('[test-id="remove"]'));

    button.nativeElement.click();
    fixture.detectChanges();

    expect(component.cart.length).toBe(1);
  });

});
