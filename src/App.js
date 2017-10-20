import React, {Component} from 'react';
import TodoList from './features/TodoList/TodoList';
import TodoInput from './features/TodoInput/TodoInput.js';

import {
  Col,
  Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoItems: []
    };

    this._handleTodoItemAdd = this._handleTodoItemAdd.bind(this);
    this._handleTodoItemDone = this._handleTodoItemDone.bind(this);
  }

  /**
   * Adding element to the todoList
   * @param {string} todoItemVal - value to add to the list
   * @private
   */
  _handleTodoItemAdd(todoItemVal) {

    const todoItem = {
      isDone: false,
      value: todoItemVal
    };

    this.setState({
      todoItems: [...this.state.todoItems, todoItem]
    });
  }


  /**
   * Toggle of state isDone in item from todoList
   * @param {number} itemOrderNumber - index of element who checked
   * @private
   */
  _handleTodoItemToggle(itemOrderNumber) {

    let {todoItems} = this.state;

    todoItems[itemOrderNumber].isDone = !todoItems[itemOrderNumber].isDone;

    this.setState({
      todoItems: todoItems
    });

  }

  render() {
    return (
      <div className="App">
        <Row align="center">
          <Col md={4} mdPush={4}>
            <div className="todo">

              <TodoInput
                handleTodoItemAdd={this._handleTodoItemAdd}
              />

              <TodoList
                todoItems={this.state.todoItems}
                handleTodoItemToggle={this._handleTodoItemToggle}
              />

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
