import React from 'react';

import { TodoTotal } from './TodoTotal';

export function TodoTotalContainer() {
  const totalItemsCount = 10;
  const totalItemsCompletedCount = 5;
  const totalItemsUncompletedCount = 5;
  const itemsCompletedPercent = 50;

  return (
    <TodoTotal
      totalItemsCount={totalItemsCount}
      totalItemsCompletedCount={totalItemsCompletedCount}
      totalItemsUncompletedCount={totalItemsUncompletedCount}
      itemsCompletedPercent={itemsCompletedPercent}
    />
  );
}
