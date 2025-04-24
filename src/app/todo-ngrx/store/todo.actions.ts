import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo.model";

export const addTodo = createAction(
  '[Todo] Add',
  props<{ title: string }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle',
  props<{ id: number }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete',
  props<{ id: number }>()
);
