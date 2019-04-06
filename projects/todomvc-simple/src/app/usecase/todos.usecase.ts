import { Injectable } from '@angular/core';
import { createTodo } from '../domain/todo';
import * as TodoActions from '../store/todo/actions';
import { TodoStore } from '../store/todo/store';

@Injectable({ providedIn: 'root' })
export class TodosUsecase {
  constructor(private todoStore: TodoStore) {}

  addTodo(title: string) {
    const todo = createTodo({ title });
    this.todoStore.update(TodoActions.add(todo));
  }

  toggleCompletion(index: number) {
    this.todoStore.update(TodoActions.toddleCompletion(index));
  }

  startEditing(index: number) {
    this.todoStore.update(TodoActions.startEditing(index));
  }

  removeTodo(index: number) {
    this.todoStore.update(TodoActions.remove(index));
  }

  finishEditing(index: number, newTitle: string) {
    this.todoStore.update(TodoActions.finishEditing(index, newTitle));
  }

  cancelEditing(index: number) {
    this.todoStore.update(TodoActions.cancelEditing(index));
  }

  removeCompleted() {
    this.todoStore.update(TodoActions.removeCompleted());
  }
}
