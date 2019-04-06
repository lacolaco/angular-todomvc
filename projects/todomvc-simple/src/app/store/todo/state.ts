import { Todo } from '../../domain/todo';

export type TodoState = {
  todos: {
    items: Todo[];
  };
};

export const initialValue: TodoState = {
  todos: {
    items: [
      {
        title: 'Initial',
        completed: false,
        editing: false,
      },
    ],
  },
};
