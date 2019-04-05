import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isValidTodoTitle } from '../../domain/todo';

export const todoTitleValidator = (
  control: AbstractControl,
): ValidationErrors | null =>
  isValidTodoTitle(control.value)
    ? null
    : {
        todoTitle: true,
      };
