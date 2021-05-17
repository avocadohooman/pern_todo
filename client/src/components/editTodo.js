import React, {useState} from 'react';
const baseUrl = '/todo';

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);

    const changeTodo = (e) => {
        setDescription(e);
    }

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`${baseUrl}/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            // window.location = ('/');
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
       <>
        <button type="button" 
        className="btn btn-warning btn-lg" 
        data-toggle="modal" 
        data-target={`#id${todo.todo_id}`}>Edit</button>

        <div id={`id${todo.todo_id}`} className="modal fade" role="dialog">
            <div className="modal-dialog" onChange={e => changeTodo(e.target.value)}>

                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                </div>
                <div className="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => changeTodo(e.target.value)}/>
                </div>
                <div className="modal-footer">
                    <button type="button" 
                    className="btn btn-warning" 
                    data-dismiss="modal"
                    onClick={e => updateDescription(e)}>Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>
                </div>

            </div>
        </div>
       </>
    )
}

export default EditTodo;