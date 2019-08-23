import { Injectable } from '@angular/core';
import { createTodo } from '../domain/todo';
import * as TodoActions from '../store/todo/actions';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class TodosUsecase {
  constructor(private store: Store<{}>) {}

  addTodo(title: string) {
    const todo = createTodo({ title });
    this.store.dispatch(TodoActions.add({ todo }));
  }

  toggleCompletion(index: number) {
    this.store.dispatch(TodoActions.toggleCompletion({ index }));
  }

  startEditing(index: number) {
    this.store.dispatch(TodoActions.startEditing({ index }));
  }

  removeTodo(index: number) {
    this.store.dispatch(TodoActions.remove({ index }));
  }

  finishEditing(index: number, newTitle: string) {
    this.store.dispatch(TodoActions.finishEditing({ index, newTitle }));
  }

  cancelEditing(index: number) {
    this.store.dispatch(TodoActions.cancelEditing({ index }));
  }

  removeCompleted() {
    this.store.dispatch(TodoActions.removeCompleted());
  }
}
