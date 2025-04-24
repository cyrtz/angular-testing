import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should input username and password', () => {
    const username = compiled.querySelector('input[formControlName="username"]') as HTMLInputElement;
    const password = compiled.querySelector('input[formControlName="password"]') as HTMLInputElement;
    const button = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;

    username.value = 'testuser';
    username.dispatchEvent(new Event('input'));

    password.value = '123456';
    password.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    button.click();
    fixture.detectChanges();

    expect(component.loginForm.value).toEqual({ username: 'testuser', password: '123456' });
  });

  it('should render welcome message after successful login', () => {
    const username = compiled.querySelector('input[formControlName="username"]') as HTMLInputElement;
    const password = compiled.querySelector('input[formControlName="password"]') as HTMLInputElement;
    const button = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;

    username.value = 'testuser';
    username.dispatchEvent(new Event('input'));

    password.value = '123456';
    password.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    button.click();
    fixture.detectChanges();

    const message = compiled.querySelector('#message') as HTMLElement;
    expect(message.textContent).toContain('登入成功，歡迎 testuser！');
  });

});
