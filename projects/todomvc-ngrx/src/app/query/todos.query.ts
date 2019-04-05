import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectTodoFeature } from '../store/todo/state';

@Injectable({ providedIn: 'root' })
export class TodosQuery {
  constructor(private store: Store<{}>) {}

  private todoState$ = this.store.pipe(select(selectTodoFeature));

  todos$ = this.todoState$.pipe(select(state => state.items));

  remainingTodosCount$ = this.todoState$.pipe(
    select(
      state => state.items.filter(todo => todo.completed === false).length,
    ),
  );

  completedTodosCount$ = this.todoState$.pipe(
    select(state => state.items.filter(todo => todo.completed === true).length),
  );
}
