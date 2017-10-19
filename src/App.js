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
      inputValue: '',
      listItems: []
    };

    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {

    const {inputValue} = this.state;

    return (
      <div className="App">
        <Row align="center">
          <Col md={4} mdPush={4}>
            <div className="todo">

              <TodoInput
                inputValue={inputValue}
                onInputChange={this._onInputChange}
              />

              {/*<TodoList*/}
                {/*listTodo={todoList}*/}
              {/*/>*/}

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
