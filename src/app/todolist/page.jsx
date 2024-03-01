'use client';
import React, { useState } from 'react'


const TodoList = () => {

    const [taskList, updateTaskList] = useState([
        { text: 'Do Homework', completed: false },
        { text: 'Learn React', completed: false },
        { text: 'Bring milk', completed: false },
    ]);

    console.log(taskList);

    const addNewTask = (e) => {
        console.log(e.key);
    }

    return (
        <div className='bg-primary-circle'>
            <div className='container py-5'>
                <h1 className='display-1 fw-bold text-center'>Todo List</h1>
                <div className='card'>
                    <div className='card-header py-3'>
                        <input
                            onKeyDown={addNewTask}
                            type="text" className='form-control border-3 border-info'
                            placeholder='Enter new Task to Add' />
                    </div>
                    <div className='card-body'>{
                        taskList.map((task, index) => {
                            return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between'>
                                <p className='my-auto h4'>{task.text}</p>
                                <button className='btn btn-danger'>Delete</button>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoList;