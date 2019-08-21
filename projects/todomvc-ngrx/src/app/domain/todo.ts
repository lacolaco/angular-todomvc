export interface Todo {
  completed: boolean;
  editing: boolean;
  title: string;
}

export function createTodo({
  title,
  completed = false,
  editing = false,
}: Partial<Todo>): Todo {
  return {
    title,
    completed,
    editing,
  };
}

export function isValidTodoTitle(title: string): boolean {
  return title && title.trim().length > 0;
}
