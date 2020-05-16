import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoItem } from './TodoItem';
import { todoItemsState } from '../../state';

export function TodoItemContainer({ item }) {
  const [_todoItemsState, setTodoItemsState] = useRecoilState(todoItemsState);

  const editTodoItemText = (value) => {
    setTodoItemsState(
      getItemsWithUpdateItem(_todoItemsState, { ...item, text: value })
    );
  };

  const toggleItemCheck = () => {
    setTodoItemsState(
      getItemsWithUpdateItem(_todoItemsState, {
        ...item,
        isComplete: !item.isComplete,
      })
    );
  };

  const deleteItem = () => {
    const newList = _todoItemsState.filter((_item) => _item.id !== item.id);
    setTodoItemsState(newList);
  };

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

function getItemsWithUpdateItem(items, item) {
  return items.map((_item) => {
    if (_item.id === item.id) {
      return item;
    }
    return _item;
  });
}
