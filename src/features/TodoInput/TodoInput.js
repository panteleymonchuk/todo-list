import React, {Component} from 'react';

class TodoInput extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._clearInput = this._clearInput.bind(this);
  }

  _onInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  _clearInput() {
    this.setState({
      inputValue: ''
    });
  }

  render() {

    const {inputValue} = this.state;

    const {handleTodoItemAdd} = this.props;

    return (
      <div className="todo-input">
        <input type="text" value={inputValue} onChange={this._onInputChange}/>
        <button
          onClick={() => {
            handleTodoItemAdd(inputValue);
            this._clearInput();
          }}
        >
          add
        </button>
      </div>
    )
  }
}

TodoInput.propTypes = {};
TodoInput.defaultProps = {};

export default TodoInput;