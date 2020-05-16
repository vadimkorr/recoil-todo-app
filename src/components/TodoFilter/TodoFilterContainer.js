import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoFilter } from './TodoFilter';
import { todoItemsFilterState } from '../../state';

export function TodoFilterContainer() {
  const [filter, setFilter] = useRecoilState(todoItemsFilterState);

  const updateFilter = (value) => {
    setFilter(value);
  };

  return <TodoFilter value={filter} changeFilter={updateFilter} />;
}
