import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';
import { initialValue, TodoState } from './state';
import * as TodoActions from './actions';

const todoReducer = createReducer(
  initialValue,
  on(
    TodoActions.add,
    produce((state, action) => {
      state.items.push(action.todo);
    }),
  ),
  on(
    TodoActions.remove,
    produce((state, action) => {
      state.items.splice(action.index, 1);
    }),
  ),
  on(
    TodoActions.removeCompleted,
    produce(state => {
      state.items = state.items.filter(todo => todo.completed === true);
    }),
  ),
  on(
    TodoActions.toggleCompletion,
    produce((state, action) => {
      state.items[action.index].completed = !state.items[action.index]
        .completed;
    }),
  ),
  on(
    TodoActions.startEditing,
    produce((state, action) => {
      state.items[action.index].editing = true;
    }),
  ),
  on(
    TodoActions.finishEditing,
    produce((state, action) => {
      state.items[action.index].editing = false;
      state.items[action.index].title = action.newTitle;
    }),
  ),
  on(
    TodoActions.cancelEditing,
    produce((state, action) => {
      state.items[action.index].editing = false;
    }),
  ),
);

export function reducer(state: TodoState, action: Action) {
  return todoReducer(state, action);
}
