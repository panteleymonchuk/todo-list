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

    const {todoItems} = this.props;

    // const todoItemsList =

    console.log(todoItems);
    //
    // const listTodo = todoList.filter(item => !item.isDone).map((item, i) => (
    //   <li key={`todo-number-${i}`} className="todo-list__item">
    //     <Checkbox
    //       onChange={() => this.handleItemDone(item.id)}
    //       defaultChecked={item.isDone}
    //       className="todo-list__checkbox"
    //     >
    //       {item.text}
    //     </Checkbox>
    //   </li>
    // ));

    return (
      <div className="todo-list">
        <ul>
          {todoItemsList}
        </ul>
      </div>
    )
  }
}

export default TodoList;