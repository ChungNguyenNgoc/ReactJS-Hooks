import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: null,
};

TodoList.defaultProps = {
    todo: [],
    onTodoClick: null,
}

function TodoList(props) {
    const {todos, onTodoClick} = props;

    const handleClick = (todo) => {
        if(onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className='todo-list'>
            {todos.map((todo, index) => (
                <li
                    key={index} 
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                 </li>
            ))}
        </ul>
    );
}

export default TodoList;