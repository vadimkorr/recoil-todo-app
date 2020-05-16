import React from 'react';

import './TodoItem.css';

export function TodoItem({ item }) {
  return <div>{item.text}</div>;
}
