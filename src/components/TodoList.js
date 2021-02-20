import React,{ useState } from 'react';
// import "./../styles/App.css";
import TodoListItem from './TodoListItem';

const TodoList = (props) => {

    const items  = props.todos.map((single_todo) => {
        return <TodoListItem key={single_todo.id} todo={single_todo} deleteTodo={props.deleteTodo} startEditing={props.startEditing}
        finishEditing={props.finishEditing}/>
    });

    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    );
};

export default TodoList;