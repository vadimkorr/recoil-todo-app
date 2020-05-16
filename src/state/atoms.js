import { atom } from 'recoil';

export const todoItemsState = atom({
  key: 'todoItemsState',
  default: [
    { id: 1, text: 'Learn React', isComplete: true },
    { id: 2, text: 'Learn Recoil', isComplete: true },
    { id: 3, text: 'Write Todo App', isComplete: true },
  ],
});

export const todoItemsFilterState = atom({
  key: 'todoItemsFilterState',
  default: 'All',
});
