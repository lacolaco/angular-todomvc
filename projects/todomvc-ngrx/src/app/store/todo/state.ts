import { createFeatureSelector } from '@ngrx/store';
import { Todo } from '../../domain/todo';

export type TodoState = {
  items: Todo[];
};

export const initialValue: TodoState = {
  items: [
    {
      title: 'Initial',
      completed: false,
      editing: false,
    },
  ],
};

export const todoFeatureName = 'todo';

export const selectTodoFeature = createFeatureSelector<TodoState>(
  todoFeatureName,
);
