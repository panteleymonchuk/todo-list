import React  from 'react';
import {
  Checkbox,
} from 'react-bootstrap';

const propTypes = {};
const defaultProps = {};

const TodoList = ({todoItems, handleTodoItemToggle, handleCompletedHiddenToggle, isCompletedHidden}) => {

  const listTodo = todoItems.filter(item => !item.isDone).map((item, i) => (
    <li key={`todo-number-${i}`} className="todo-list__item">
      <Checkbox
        onChange={() => handleTodoItemToggle(item.id)}
        checked={item.isDone}
        className="todo-list__checkbox"
      >
        {item.value}
      </Checkbox>
    </li>
  ));

  const listTodoCompleted = todoItems.filter(item => item.isDone).map((item, i) => (
    <li key={`todo-number-${i}`} className="todo-list__item">
      <Checkbox
        onChange={() => handleTodoItemToggle(item.id)}
        checked={item.isDone}
        className="todo-list__checkbox"
      >
        {item.value}
      </Checkbox>
    </li>
  ));

  return (
    <div className="todo-list">
      <ul>
        {listTodo}
      </ul>

      {
        !!listTodoCompleted.length && (
          <button
            onClick={handleCompletedHiddenToggle}
            style={{margin: '10px 0'}}
          >
            Show completed
          </button>
        )
      }

      {
        !isCompletedHidden && (
          <ul>
            {listTodoCompleted}
          </ul>
        )
      }

    </div>
  );
};

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;