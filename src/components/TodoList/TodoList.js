import React from 'react';

import './TodoList.css';
import { TodoItem } from '../TodoItem';

export function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
