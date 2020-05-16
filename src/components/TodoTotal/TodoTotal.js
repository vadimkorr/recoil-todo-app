import React from 'react';
import Card from 'react-bootstrap/Card';

import './TodoTotal.css';

export function TodoTotal({
  totalItemsCount,
  totalItemsCompletedCount,
  totalItemsUncompletedCount,
  itemsCompletedPercent,
}) {
  return (
    <Card>
      <Card.Body>
        <p className='mb-0'>Total items: {totalItemsCount}</p>
        <p className='mb-0'>Items completed: {totalItemsCompletedCount}</p>
        <p className='mb-0'>Items uncompleted: {totalItemsUncompletedCount}</p>
        <p className='mb-0'>Completed: {itemsCompletedPercent}%</p>
      </Card.Body>
    </Card>
  );
}
