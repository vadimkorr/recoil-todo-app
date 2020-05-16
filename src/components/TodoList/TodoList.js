import React from 'react';

import './TodoList.css';
import { TodoItemContainer } from '../TodoItem';

export function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className='todo-list__item-container'>
          <TodoItemContainer item={item} />
        </div>
      ))}
    </div>
  );
}
