import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      todoList: []
    };
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleAddToList = () => {

    const todoItem = {
      isDone: false,
      text: this.state.inputValue
    };

    this.setState({
      todoList: [...this.state.todoList, todoItem]
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

    let todoListNew = todoList;

    todoListNew[itemNumber].isDone = !todoListNew[itemNumber].isDone;

    console.log(todoListNew);

    this.setState({
      todoList: todoList
    });
  };

  render() {

    const { inputValue, todoList } = this.state;

    console.log(todoList);

    const list = todoList.map((item, i) => (
      <li htmlFor={`todo-number-${i}`} key={`todo-number-${i}`}>
        <input type="checkbox" id={`todo-number-${i}`} onChange={this.handleItemDone} checked={item.isDone ? 'checked' : ''}/>
        {item.text}
      </li>
    ));

    return (
      <div className="App">
        <div className="todo">
          <div className="todo-input">
            <input type="text" value={inputValue} onChange={this.onInputChange}/>
            <button onClick={this.handleAddToList}>Add</button>
          </div>
          <div className="todo-list">
            <ul>
              {
                !!todoList.length ? (
                  <ul>{ list }</ul>
                ) : (
                  <div>
                    empty
                  </div>
                )
              }
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
