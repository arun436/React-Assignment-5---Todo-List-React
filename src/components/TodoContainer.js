import React,{ useState } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
// import "./../styles/App.css";

const TodoContainer = () => {

    const [todos, setTodos] = useState([]);

    const getNewId = () => {
        let id = 0;
        todos.map((item) => {if(item.id > id) {id = item.id}});
        id += 1;
        return id;
    }

    const addTodo = (newTodo) => {
        const newTodoObj = {
            id: getNewId(),
            value: newTodo,
            isEditing: false,
        };
        const updated_todos = [...todos,newTodoObj];
        setTodos(updated_todos);
        console.log(updated_todos);
    }

    const deleteTodo = (todo_id) => {
        const filtered_arr = todos.filter(todo => todo.id !== todo_id);
        setTodos(filtered_arr);
    }

    const startEditing = (todo_id) =>{
        const editing_arr = todos.map((item) => {
            if(item.id == todo_id){
                item.isEditing = true;
            }
            return item;
        });
        setTodos(editing_arr);
    }

    const finishEditing = (todo) => {
        const editing_arr = todos.map((item) => {
            if(item.id == todo.id)
            {
                return todo;
            }
            return item;
        });
        setTodos(editing_arr);
    }

    return (
        <div>
            <h3>Todo App</h3>
            <TodoAdd addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} finishEditing={finishEditing}/>
        </div>
    );
};

export default TodoContainer;