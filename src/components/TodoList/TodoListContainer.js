import React from 'react';

import { TodoList } from './TodoList';

export function TodoListContainer() {
  const todoItems = [
    { id: 1, text: 'Learn React', isComplete: true },
    { id: 2, text: 'Learn Recoil', isComplete: true },
    { id: 3, text: 'Write Todo App', isComplete: true },
  ];
  return <TodoList items={todoItems} />;
}
