import React, {Component} from 'react';
import TodoList from './features/TodoList/TodoList';
import TodoInput from './features/TodoInput/TodoInput.js';

import {
  Checkbox,
  Col,
  Row,
  FormGroup,
  Button,
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
  }

  _handleTodoItemAdd(todoItemVal) {


    console.log(todoItemVal)
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

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
