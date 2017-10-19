import React, { Component } from 'react';
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
      todoList: [],
      innerId: 0
    };
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleAddToList = (id) => {

    const todoItem = {
      id: id,
      isDone: false,
      text: this.state.inputValue
    };

    this.setState({
      todoList: [...this.state.todoList, todoItem],
      innerId: ++this.state.innerId
    });

    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      inputValue: ''
    });
  };


  handleItemDone = (itemNumber) => {

    let { todoList } = this.state;

    todoList[itemNumber].isDone = !todoList[itemNumber].isDone;
    console.log(todoList);
    this.setState({
      todoList: todoList
    });
  };

  render() {

    const { inputValue, todoList } = this.state;

    const listTodo = todoList.filter(item => !item.isDone).map((item, i) => (
      <li key={`todo-number-${i}`} className="todo-list__item">
        <Checkbox
          onChange={() => this.handleItemDone(item.id)}
          defaultChecked={item.isDone}
        >
          {item.text}
        </Checkbox>
      </li>
    ));

    return (
      <div className="App">
        <Row align="center">
          <Col md={4} mdPush={4}>
            <div className="todo">
              <div className="todo-input">

                <FormGroup>
                  <input type="text" value={inputValue} onChange={this.onInputChange}/>
                  <Button onClick={() => this.handleAddToList(this.state.innerId)} bsSize="small">Add</Button>
                </FormGroup>
              </div>
              <div className="todo-list">
                <ul>
                  {
                    !!todoList.length ? (
                      <ul>{ listTodo }</ul>
                    ) : (
                      <div>
                        empty
                      </div>
                    )
                  }
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
