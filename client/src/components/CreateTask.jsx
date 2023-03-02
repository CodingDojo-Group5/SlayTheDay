import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { TiCancel } from 'react-icons/ti'


const CreateTask = (props) => {

    const { todos, setTodos } = props;
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoStatus, setToDoStatus] = useState('');
    const [toggle, setToggle] = useState(false);
    const [errors, setErrors] = useState({});


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/todo/new', {
            task,
            dueDate,
            todoStatus
        },
            { withCredentials: true })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTodos([...todos, res.data])
                setTask('');
                setDueDate('');
                setToDoStatus('');
                setToggle(!toggle);
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data);
            })

    }

    return (
        <div>

            <button className='n-task' onClick={() => setToggle(!toggle)}>
                <AiOutlinePlus className={toggle === false ? 'f-icon' : 'none'} />
                <p className={toggle === false ? '' : 'none'}>New Task</p>
            </button>
            {toggle && (
                <div className='task-form'>
                    <form onSubmit={onSubmitHandler} >
                        <div className='task-selector'>
                            <textarea
                                name='task'
                                placeholder='Task Name'
                                autoComplete='off'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}></textarea>
                        </div>
                        <div className='sec-row'>
                            <input
                                type="date"
                                name='dueDate'
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                            <select name="todoStatus" value={todoStatus} onChange={(e) => setToDoStatus(e.target.value)} >
                                <option>Todo Status</option>
                                <option value="not-started">Not-Started</option>
                                <option value="in-progress">In-Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div >
                        <div className="task-line"></div>
                        <div>{errors.task ? errors.task.message : null}</div>
                        <div className="bot-row">
                            <button className='n-task' onClick={() => setToggle(!toggle)}>
                                <TiCancel className='t-icon-s trash' />
                            </button>
                            <button type="submit" className='n-task'>
                                <BiSend className='t-icon-s send' />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}
export default CreateTask;