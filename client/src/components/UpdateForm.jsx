import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import LogoutButton from '../components/LogoutButton';
import { RiArrowGoBackLine } from 'react-icons/ri'
import { BiSend } from 'react-icons/bi'
import { GoTrashcan } from 'react-icons/go'
import { BsCircle } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'






const UpdateForm = (props) => {
    const { id } = useParams();
    const { todos, setTodos } = props;
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoStatus, setToDoStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/todo/${id} `, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                setTask(res.data[0].task);
                setDueDate(res.data[0].dueDate);
                setToDoStatus(res.data[0].todoStatus);
            })
            .catch((err) => console.log(err));
    }, [id])

    const updateTask = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/todo/${id}/update `, {
            task,
            dueDate,
            todoStatus
        }, { withCredentials: true })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/user/todos")
            })
            .catch(err => console.log(err))
    }

    const deleteTask = (taskId) => {
        axios.delete(`http://localhost:8000/api/todo/${id}/delete `, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                const newList = todos.filter((todos, index) => todos._id !== taskId)
                setTodos(newList);
                navigate("/user/todos")
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div>
            <LogoutButton />
            <div className="overlay"></div>
            <div className="dashboard">
                <p className="c-name dash-t">
                    <span>SlayTheDay</span>
                </p>
                <div>
                    <p className='title'>Update Task</p>
                    <div className="d-line"></div>
                </div>
                <div className="u-b">
                    <div className="l-u">
                        <div className='task-form'>
                            <form onSubmit={updateTask} >
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
                                <div className="bot-row">
                                    <Link to='/user/todos' className='n-task'>
                                        <RiArrowGoBackLine className='t-icon-s update-arrow' />
                                    </Link>
                                    <button className='n-task' onClick={() => deleteTask(todos._id)} >
                                        <GoTrashcan className='t-icon-s trash' />
                                    </button>
                                    <button type="submit" className='n-task'>
                                        <BiSend className='t-icon-s send' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="r-u">
                        <div className="list">
                            <h2 className='list-h'>{todoStatus}</h2>
                            <div className="list-line"></div>
                            <div className="ind-task u-task-h">
                                <BsCircle className={todoStatus === 'completed' ? 'none' : 'circle'} />
                                <FcCheckmark className={todoStatus === 'completed' ? 'check' : 'none'} />
                                <div className="right-task">
                                    <p className={todoStatus === 'completed' ? 'p-ind-task crossed' : 'p-ind-task'}>
                                        {task}
                                    </p>
                                    <div className="b-ind-task">
                                        <p className='b-ind-date'>
                                            {
                                                dueDate
                                                    ? new Date(`${dueDate}T00:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' })
                                                    : 'No due date'
                                            }
                                        </p>
                                        <p className='edit'>
                                            edit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateForm;