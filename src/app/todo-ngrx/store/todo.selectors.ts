import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.model";

export const selectTodoState = createFeatureSelector<TodoState>("todo");

export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);
