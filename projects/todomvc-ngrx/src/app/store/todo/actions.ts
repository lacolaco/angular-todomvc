import { createAction, union } from '@ngrx/store';
import { Todo } from '../../domain/todo';

export const add = createAction('[Todo] Add', (todo: Todo) => ({
  todo,
}));

export const remove = createAction('[Todo] Remove', (index: number) => ({
  index,
}));

export const removeCompleted = createAction('[Todo] Remove Completed');

export const toggleCompletion = createAction(
  '[Todo] Toggle Completion',
  (index: number) => ({ index }),
);

export const startEditing = createAction(
  '[Todo] Start Editing',
  (index: number) => ({ index }),
);

export const finishEditing = createAction(
  '[Todo] Finish Editing',
  (index: number, newTitle: string) => ({ index, newTitle }),
);

export const cancelEditing = createAction(
  '[Todo] Cancel Editing',
  (index: number) => ({ index }),
);

const actions = union({
  add,
  remove,
  removeCompleted,
  toggleCompletion,
  startEditing,
  finishEditing,
  cancelEditing,
});

export type ActionsUnion = typeof actions;
