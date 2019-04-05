import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import * as TodoActions from './actions';
import { selectTodoFeature } from './state';

@Injectable()
export class TodoEffects {
  constructor(
    private actions: Actions<TodoActions.ActionsUnion>,
    private store: Store<{}>,
  ) {}

  @Effect({ dispatch: false })
  logging$ = this.actions.pipe(
    withLatestFrom(this.store.pipe(select(selectTodoFeature))),
    tap(([action, state]) => {
      console.log({ action, state });
    }),
  );
}
