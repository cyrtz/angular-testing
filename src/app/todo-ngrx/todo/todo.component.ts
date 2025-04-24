import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, toggleTodo, deleteTodo } from '../store/todo.actions';
import { Todo } from '../store/todo.model';
import { selectAllTodos } from '../store/todo.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTitle = '';
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }

  add() {
    if (this.newTitle.trim()) {
      this.store.dispatch(addTodo({ title: this.newTitle }));
      this.newTitle = '';
    }
  }

  toggle(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }

  remove(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
