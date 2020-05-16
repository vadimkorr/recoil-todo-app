import React from 'react';

import { TodoList } from '../components';

const todoItems = [
  { id: 1, text: 'item 1' },
  { id: 2, text: 'item 2' },
  { id: 3, text: 'item 3' },
];

export function Home() {
  return (
    <div>
      <TodoList items={todoItems} />
    </div>
  );
}
