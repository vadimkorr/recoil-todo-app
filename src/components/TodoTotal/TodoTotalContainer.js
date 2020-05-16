import React from 'react';
import { useRecoilValue } from 'recoil';

import { TodoTotal } from './TodoTotal';
import { todoItemsTotalState } from '../../state';

export function TodoTotalContainer() {
  const {
    totalItemsCount,
    totalItemsCompletedCount,
    totalItemsUncompletedCount,
    itemsCompletedPercent,
  } = useRecoilValue(todoItemsTotalState);

  return (
    <TodoTotal
      totalItemsCount={totalItemsCount}
      totalItemsCompletedCount={totalItemsCompletedCount}
      totalItemsUncompletedCount={totalItemsUncompletedCount}
      itemsCompletedPercent={itemsCompletedPercent}
    />
  );
}
