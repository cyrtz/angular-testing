import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  loggedIn: boolean = false;
  submitData: any;

  onSubmit() {
    if (this.loginForm.valid) {
      this.loggedIn = true;
      console.log('Login successful', this.loginForm.value);
    } else {
      console.log('Login failed', this.loginForm.errors);
    }
  }
}
