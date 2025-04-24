import { Routes } from '@angular/router';
import { TodoComponent } from './todo-ngrx/todo/todo.component';
import { LoginComponent } from './integration-testing-class/login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  {
    path: '',
    component: CartComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];
