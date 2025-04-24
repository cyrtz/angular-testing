import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';
import { CartService } from './cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [CartService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);

    spyOn(cartService, 'getCart').and.returnValue([
      { name: 'MacBook', price: 50000, quantity: 1 },
      { name: 'iPhone', price: 30000, quantity: 1 },
    ]);

    fixture.detectChanges();
  });

  // it('should display cart items', () => {
  //   const items = fixture.debugElement.queryAll(By.css('app-cart-item'));
  //   expect(items.length).toBe(2);
  // });

  // it('should increase the quantity and update the total when clicked the + button ', () => {
  //   const item = component.cart[0];
  //   const originalTotal = component.total();

  //   const button = fixture.debugElement.query(By.css('[test-id="increase"]'));
  //   button.nativeElement.click();
  //   fixture.detectChanges();

  //   expect(item.quantity).toBe(2);
  //   expect(component.total()).toBeGreaterThan(originalTotal);
  // });

  // it('should decrease the quantity when clicked the - button ', () => {
  //   const item = component.cart[1];
  //   const buttons = fixture.debugElement.queryAll(By.css('[test-id="decrease"]'));
  //   const button = buttons[1];

  //   button.nativeElement.click();
  //   fixture.detectChanges();

  //   expect(item.quantity).toBe(1);

  //   const updateTotal = component.total();
  //   const totalText = fixture.nativeElement.querySelector('[test-id="total"]').textContent;

  //   expect(totalText).toContain(`總金額：${updateTotal} 元`);

  // });

  // it('should remove the item when clicked the remove button', () => {
  //   const button = fixture.debugElement.query(By.css('[test-id="remove"]'));

  //   button.nativeElement.click();
  //   fixture.detectChanges();

  //   expect(component.cart.length).toBe(1);
  // });

  // it('should call remove method and remove item from the view when remove button is clicked', () => {
  //   // arrange: 假設一開始有兩個商品
  //   spyOn(cartService, 'remove').and.callFake((index: number) => {
  //     // 模擬 remove 功能：從 cart 陣列移除一筆資料
  //     component.cart.splice(index, 1);
  //   });
  
  //   fixture.detectChanges(); // 初始渲染
  
  //   const removeButtons = fixture.debugElement.queryAll(By.css('[test-id="remove"]'));
  //   removeButtons[0].nativeElement.click(); // 點擊第一個商品的刪除按鈕
  
  //   fixture.detectChanges(); // 再次渲染
  
  //   // assert
  //   expect(cartService.remove).toHaveBeenCalledWith(0);
  
  //   const itemsAfterRemove = fixture.debugElement.queryAll(By.css('app-cart-item'));
  //   expect(itemsAfterRemove.length).toBe(1); // 項目從2個變1個
  // });

  it('should call remove method on CartService when remove is triggered', () => {
    spyOn(cartService, 'remove');
  
    const component = TestBed.createComponent(CartComponent).componentInstance;
    component.remove(0);
  
    expect(cartService.remove).toHaveBeenCalledWith(0);
  });
});
