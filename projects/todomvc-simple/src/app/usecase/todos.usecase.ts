import { Injectable } from '@angular/core';
import { produce } from 'immer';
import { createTodo } from '../domain/todo';
import { TodoStore } from '../store/todo.store';

@Injectable({ providedIn: 'root' })
export class TodosUsecase {
  constructor(private todoStore: TodoStore) {}

  addTodo(title: string) {
    const todo = createTodo({ title });

    this.todoStore.update(
      produce(draft => {
        draft.todos.items.push(todo);
      }),
    );
  }

  toggleCompletion(index: number) {
    this.todoStore.update(
      produce(draft => {
        const todo = draft.todos.items[index];
        todo.completed = !todo.completed;
      }),
    );
  }

  editTodo(index: number) {
    this.todoStore.update(
      produce(draft => {
        const todo = draft.todos.items[index];
        todo.editing = true;
      }),
    );
  }

  removeTodo(index: number) {
    this.todoStore.update(
      produce(draft => {
        draft.todos.items = draft.todos.items.filter((_, i) => i !== index);
      }),
    );
  }

  stopEditing(index: number, newTitle: string) {
    this.todoStore.update(
      produce(draft => {
        const todo = draft.todos.items[index];
        todo.title = newTitle;
        todo.editing = false;
      }),
    );
  }

  cancelEditing(index: number) {
    this.todoStore.update(
      produce(draft => {
        const todo = draft.todos.items[index];
        todo.editing = false;
      }),
    );
  }

  removeCompleted() {
    this.todoStore.update(
      produce(draft => {
        draft.todos.items = draft.todos.items.filter(
          todo => todo.completed === false,
        );
      }),
    );
  }
}
