import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './TodoItem.css';

export function TodoItem({
  text,
  isComplete,
  onToggleCheck,
  onDeleteClick,
  onTextUpdate,
}) {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Row>
            <Col xs={1}>
              <Form.Check
                checked={isComplete}
                onChange={(event) => onToggleCheck(event.target.value)}
              />
            </Col>
            <Col xs={8}>
              <Form.Control
                type='text'
                value={text}
                onChange={(event) => onTextUpdate(event.target.value)}
              />
            </Col>
            <Col xs={3}>
              <Button type='button' onClick={onDeleteClick}>
                Remove
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
