import produce from 'immer';
import { TodoState, initialValue } from './state';
import * as TodoActions from './actions';

export const reducer = produce(
  (state: TodoState, action: TodoActions.ActionsUnion) => {
    switch (action.type) {
      case TodoActions.add.type: {
        state.items.push(action.todo);
        return;
      }
      case TodoActions.remove.type: {
        state.items.splice(action.index, 1);
        return;
      }
      case TodoActions.removeCompleted.type: {
        state.items = state.items.filter(todo => todo.completed === false);
        return;
      }
      case TodoActions.toggleCompletion.type: {
        state.items[action.index].completed = !state.items[action.index]
          .completed;
        return;
      }
      case TodoActions.startEditing.type: {
        state.items[action.index].editing = true;
        return;
      }
      case TodoActions.finishEditing.type: {
        state.items[action.index].editing = false;
        state.items[action.index].title = action.newTitle;
        return;
      }
      case TodoActions.cancelEditing.type: {
        state.items[action.index].editing = false;
        return;
      }
      default:
        return;
    }
  },
  initialValue,
);
