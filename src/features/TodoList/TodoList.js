import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {

  render() {

    const {listTodo} = this.props;
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
          {/*{*/}
            {/*!!todoList.length ? (*/}
              {/*<ul>{listTodo}</ul>*/}
            {/*) : (*/}
              {/*<div>*/}
                {/*empty*/}
              {/*</div>*/}
            {/*)*/}
          {/*}*/}
        </ul>
      </div>
    )
  }
}

export default TodoList;