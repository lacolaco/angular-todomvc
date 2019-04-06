import { Injectable } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { initialValue, TodoState } from './state';

@Injectable({ providedIn: 'root' })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super({
      initialValue,
      onUpdate: change => {
        console.log(change.currentValue);
      },
    });
  }
}
