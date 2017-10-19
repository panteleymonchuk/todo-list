import React, { Component } from 'react';

class TodoInput extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {

    const {inputValue} = this.state;

    return (
      <div className="todo-input">
        <input type="text" value={inputValue} onChange={this._onInputChange}/>
      </div>
    )
  }
}

TodoInput.propTypes = {};
TodoInput.defaultProps = {};

export default TodoInput;