import { createReducer, on } from "@ngrx/store";
import { addTodo, toggleTodo, deleteTodo } from "./todo.actions";
import { TodoState } from "./todo.model";
import { state } from "@angular/animations";

export const initialState: TodoState = {
  todos: [],
};

let idCounter = 1;

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => ({
    ...state,
    todos: [...state.todos, { id: idCounter++, title, completed: false }],
  })),

  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id),
  }))
);
