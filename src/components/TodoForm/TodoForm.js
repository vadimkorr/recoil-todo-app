import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './TodoForm.css';

export function TodoForm({ onSubmit }) {
  const [text, setText] = useState('');
  function handleChange(value) {
    setText(value);
  }
  function handleSubmit() {
    onSubmit(text);
  }
  return (
    <div className='todo-form__form-container'>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as='input'
            type='text'
            placeholder='Please enter what to do'
            value={text}
            onChange={(event) => handleChange(event.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='button' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
