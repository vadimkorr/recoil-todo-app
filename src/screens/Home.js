import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Home.css';
import {
  TodoListContainer,
  TodoFormContainer,
  TodoFilterContainer,
  TodoTotalContainer,
} from '../components';

export function Home() {
  return (
    <>
      <div className='d-flex justify-content-center home__title-container'>
        Todo App with Recoil
      </div>
      <Row>
        <Col>
          <div className='home__todolist-container'>
            <div className='home__todototal-container'>
              <TodoTotalContainer />
            </div>
            <div className='home__todofilter-container'>
              <TodoFilterContainer />
            </div>
            <TodoListContainer />
          </div>
        </Col>
        <Col>
          <div className='home__todoform-container'>
            <TodoFormContainer />
          </div>
        </Col>
      </Row>
    </>
  );
}
