import { createAction, union, props } from '@ngrx/store';
import { Todo } from '../../domain/todo';

export const add = createAction('[Todo] Add', props<{ todo: Todo }>());

export const remove = createAction('[Todo] Remove', props<{ index: number }>());

export const removeCompleted = createAction('[Todo] Remove Completed');

export const toggleCompletion = createAction(
  '[Todo] Toggle Completion',
  props<{ index: number }>(),
);

export const startEditing = createAction(
  '[Todo] Start Editing',
  props<{ index: number }>(),
);

export const finishEditing = createAction(
  '[Todo] Finish Editing',
  props<{ index: number; newTitle: string }>(),
);

export const cancelEditing = createAction(
  '[Todo] Cancel Editing',
  props<{ index: number }>(),
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
