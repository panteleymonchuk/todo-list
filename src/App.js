import React, { Component } from 'react';
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

    };

    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue]
    });

    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {

    const { inputValue, todoList } = this.state;

    console.log(todoList);

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
                    <ul>
                      {
                        todoList.map((item, i) => (
                          <li htmlFor={`todo-number-${i}`} key={`todo-number-${i}`}>
                            <input type="checkbox" id={`todo-number-${i}`} onClick={() => alert(1)}/>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
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
