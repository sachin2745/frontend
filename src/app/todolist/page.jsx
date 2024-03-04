'use client';
import React, { useState } from 'react'


const TodoList = () => {

    const [taskList, updateTaskList] = useState([]);

    console.log(taskList);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            // console.log(e.target.value);
            const obj = { text: e.target.value, completed: false };

            updateTaskList([obj, ...taskList]);

            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        // console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        updateTaskList([...temp]);

    }

    const completeTask = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        updateTaskList([...temp]);
        // console.log(temp);

    }

    return (
        <div className='bg-primary-subtle vh-auto'>
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
                            return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between align-items-center'>
                                <input type="checkbox" checked={task.completed} />
                                <p className='my-auto h4'>{task.text}</p>
                                {
                                    task.completed ?
                                        <span className='badge bg-success'>Completed</span>
                                        :
                                        <span className='badge bg-warning'>Pending</span>
                                }

                                <button onClick={() => { deleteTask(index) }} className='btn btn-danger'>Delete</button>
                                <button onClick={() => { completeTask(index) }} className='btn btn-primary'>
                                    {task.completed ? 'Undo Task' : 'Complete task'}
                                </button>


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