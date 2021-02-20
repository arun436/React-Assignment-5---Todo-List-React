import React,{ useState } from 'react';
// import "./../styles/App.css";

const TodoAdd = (props) => {
    let TodoValue = "";

    const submitTodo = () => {
        // check empty
        if(TodoValue)
        {
        props.addTodo(TodoValue);
        TodoValue = "";
        document.getElementById("task").value = "";
        }
    }

    const updateTodoValue = (e) => {
        TodoValue = e.target.value;
        console.log(TodoValue);
    }
    return (
        <div>
            <textarea id="task" onChange={updateTodoValue}></textarea>
            <br/>
            <button id="btn" onClick={submitTodo}>Add New</button>
        </div>
    );
};

export default TodoAdd;