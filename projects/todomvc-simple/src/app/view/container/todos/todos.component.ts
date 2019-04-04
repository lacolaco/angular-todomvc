import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../../domain/todo';
import { TodosQuery } from '../../../query/todos.query';
import { TodosUsecase } from '../../../usecase/todos.usecase';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  newTodoControl = this.fb.control('', {
    validators: [Validators.required],
  });

  editTodoControls = this.fb.array([]);

  constructor(
    public query: TodosQuery,
    private todosUsecase: TodosUsecase,
    private fb: FormBuilder,
  ) {}

  addTodo() {
    if (this.newTodoControl.invalid) {
      return;
    }
    const newTodoTitle = this.newTodoControl.value;
    this.todosUsecase.addTodo(newTodoTitle);
    this.newTodoControl.reset();
  }

  toggleCompletion(index: number) {
    this.todosUsecase.toggleCompletion(index);
  }

  editTodo(index: number, todo: Todo) {
    this.todosUsecase.startEditing(index);
    this.editTodoControls.insert(
      index,
      this.fb.control(todo.title, {
        validators: [Validators.required],
      }),
    );
  }

  removeTodo(index: number) {
    this.todosUsecase.removeTodo(index);
  }

  stopEditing(index: number) {
    const control = this.editTodoControls.at(index);
    if (control.invalid) {
      return;
    }
    this.todosUsecase.finishEditing(index, control.value);
  }

  cancelEditingTodo(index: number) {
    this.todosUsecase.cancelEditing(index);
  }

  removeCompleted() {
    this.todosUsecase.removeCompleted();
  }
}
