import React, { Component } from 'react';
import {
  Checkbox,
} from 'react-bootstrap';

class TodoList extends Component {

  render() {

    const {
      todoItems,
      handleTodoItemToggle
    } = this.props;

    const listTodo = todoItems.filter(item => !item.isDone).map((item, i) => (
      <li key={`todo-number-${i}`} className="todo-list__item">
        <Checkbox
          onChange={() => handleTodoItemToggle(item.id)}
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