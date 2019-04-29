import produce from 'immer';
import { Todo } from '../../domain/todo';
import { TodoState } from './state';

export const add = (todo: Todo) =>
  produce((state: TodoState) => {
    state.todos.items.push(todo);
  });

export const remove = (index: number) =>
  produce((state: TodoState) => {
    state.todos.items.splice(index, 1);
  });

export const removeCompleted = () =>
  produce((state: TodoState) => {
    state.todos.items = state.todos.items.filter(
      todo => todo.completed === false,
    );
  });

export const toddleCompletion = (index: number) =>
  produce((state: TodoState) => {
    state.todos.items[index].completed = !state.todos.items[index].completed;
  });

export const startEditing = (index: number) =>
  produce((state: TodoState) => {
    state.todos.items[index].editing = true;
  });

export const finishEditing = (index: number, newTitle: string) =>
  produce(draft => {
    const todo = draft.todos.items[index];
    todo.title = newTitle;
    todo.editing = false;
  });

export const cancelEditing = (index: number) =>
  produce(draft => {
    draft.todos.items[index].editing = false;
  });
