import React, { Component } from 'react';
import {
  Checkbox,
  Col,
  Row,
  FormGroup,
  Button,
} from 'react-bootstrap';

class TodoList extends Component {

  render() {

    const {
      todoItems,
      handleTodoItemDone
    } = this.props;

    // const todoItemsList =

    console.log(todoItems);

    const listTodo = todoItems.map((item, i) => (
      <li key={`todo-number-${i}`} className="todo-list__item">
        <Checkbox
          onChange={() => handleTodoItemDone(i)}
          checked={item.isDone}
          className="todo-list__checkbox"
        >
          {item.value}
        </Checkbox>
      </li>
    ));

    return (
      <div className="todo-list">
        <ul>
          {listTodo}
        </ul>
      </div>
    )
  }
}

export default TodoList;