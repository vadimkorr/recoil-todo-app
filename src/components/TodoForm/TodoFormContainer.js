import React from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import { TodoForm } from './TodoForm';
import { todoItemsState } from '../../state';

export function TodoFormContainer() {
  const setTodoList = useSetRecoilState(todoItemsState);

  function handleSubmit(text) {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uuid(),
        text,
        isComplete: false,
      },
    ]);
  }

  return <TodoForm onSubmit={handleSubmit} />;
}
