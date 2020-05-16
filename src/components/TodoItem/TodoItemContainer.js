import React from 'react';

import { TodoItem } from './TodoItem';

export function TodoItemContainer({ item }) {
  const editTodoItemText = (value) => {
    console.log(value);
  };

  const toggleItemCheck = () => {};

  const deleteItem = () => {};

  return (
    <TodoItem
      text={item.text}
      isComplete={item.isComplete}
      onToggleCheck={toggleItemCheck}
      onDeleteClick={deleteItem}
      onTextUpdate={editTodoItemText}
    />
  );
}
