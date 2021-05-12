import React, {useState, useEffect} from 'react';
import EditTodo from './editTodo';

const baseUrl = '/todo'; 

const ListTodos = () => {
    
    const [todos, setToDos] = useState([]);
    
    const getTodos = async () => {
        try {
            const response = await fetch(`${baseUrl}`);
            const jsonData = await response.json();
            setToDos(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: "DELETE"
            });
            console.log("Deleted", response);
            const cleanedTods = todos.filter(todo => todo.todo_id !== id);
            setToDos(cleanedTods);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
    <table className="table table-hover mt-5">
        <thead>
        <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo}/></td>
                <td><button onClick={() => deleteTodo(todo.todo_id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    )
}

export default ListTodos;