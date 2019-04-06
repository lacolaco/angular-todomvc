import { Injectable } from '@angular/core';
import { TodoStore } from '../store/todo/store';

@Injectable({ providedIn: 'root' })
export class TodosQuery {
  constructor(private todoStore: TodoStore) {}

  todos$ = this.todoStore.select(state => state.todos.items);

  remainingTodosCount$ = this.todoStore.select(
    state => state.todos.items.filter(todo => todo.completed === false).length,
  );

  completedTodosCount$ = this.todoStore.select(
    state => state.todos.items.filter(todo => todo.completed === true).length,
  );
}
