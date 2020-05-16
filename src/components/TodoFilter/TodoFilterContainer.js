import React from 'react';

import { TodoFilter } from './TodoFilter';

export function TodoFilterContainer() {
  const updateFilter = (value) => {
    console.log(value);
  };

  return <TodoFilter value={'All'} changeFilter={updateFilter} />;
}
