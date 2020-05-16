import React from 'react';
import { useRecoilValue } from 'recoil';

import { TodoList } from './TodoList';
import { filteredTodoItemsState } from '../../state';

export function TodoListContainer() {
  const todoItems = useRecoilValue(filteredTodoItemsState);
  return <TodoList items={todoItems} />;
}
