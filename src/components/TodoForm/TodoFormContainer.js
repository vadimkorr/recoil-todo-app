import React from 'react';
import { TodoForm } from './TodoForm';

export function TodoFormContainer({ item }) {
  function handleSubmit(text) {
    console.log(text);
  }

  return <TodoForm item={item} onSubmit={handleSubmit} />;
}
