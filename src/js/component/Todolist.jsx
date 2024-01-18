import React, {useState} from "react";

export const Todolist = () => {

    const [task, setTask] = useState(" ")
    const [list, setList] = useState(['Make the bed','Wash my hands', 'Eat','Walk the dog'])

    const addTask = (event) => {
        event.preventDefault();
        if (task.trim() === " "){
            setTask(" ")
            return
        }
        setList([...list, task]);
        setTask(' ')
    }
    const deleteTask = (item) => {  
        setList(list.filter((element) => element != item))
    }

    return (
       <div className="container col-xs-10 col-md-6 col-lg-4">
            <h1 className= "text-secondary text-center m-5">To Do List</h1>
            <div>
                <form onSubmit={addTask}>
                    <input type="text" className="form-control" placeholder="Add a task" value={task} onChange={(event) => setTask(event.target.value)} />
                </form>
            </div>
            <div className="bg-light mt-4">
                <ul className="list-group" >
                    {list.map((item, id) => <li key={id} className="hidden-icon list-group-item d-flex justify-content-between">
                        {item}<span onClick={() => deleteTask(item)}><i className="fas fa-times text-secondary"></i></span>
                        </li>)}
                    <span className="list-group-item bg-light text-end fw-lighter">
                        {list.length === 0 ? "No tasks lefts" : list.length + " Item left"}
                    </span> 
                </ul>
            </div>
        </div>

    )
}