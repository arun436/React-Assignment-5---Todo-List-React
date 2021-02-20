import React from 'react';

const TodoListItem = (props) => {

    let TodoValue = props.todo.value;

    const deleteTodo = () => {
        props.deleteTodo(props.todo.id);
    }

    const startEditing = () => {
        props.startEditing(props.todo.id);
    }
    const changeTodoValue = (event) => {
        TodoValue = event.target.value;
    }

    const finishEditing = () => {
        if(TodoValue)
        {
            props.todo.value = TodoValue;
            props.todo.isEditing = false;
            props.finishEditing(props.todo);
        }
    }

    return (
        <li className="list">
            {props.todo.isEditing ? (
                <>
                <textarea className="editTask" onChange={changeTodoValue} defaultValue={TodoValue}></textarea>
                <button className="saveTask" onClick={finishEditing}>Update Todo</button>
                </>
            ) : (
                <>
                {props.todo.value}(<a href="#" onClick={startEditing}>Edit</a> | <a href="#" onClick={deleteTodo}>Delete</a>)
                </>
            )}
            
        </li>
    );
};

export default TodoListItem;