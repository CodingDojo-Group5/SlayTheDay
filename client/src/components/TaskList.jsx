import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsCircle } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'


const TaskList = (props) => {
    const { todos, setTodos } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/todos", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setTodos(res.data.user.todos);
            })
            .catch((err) => console.log(err));
    }, [setTodos])



    const notStarted = todos.filter(task => task.todoStatus === 'not-started').sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    const inProgress = todos.filter(task => task.todoStatus === 'in-progress').sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    const completed = todos.filter(task => task.todoStatus === 'completed').sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));


    return (
        <div className='task-list'>
            <div className="list">
                <h2 className='list-h'>Not Started</h2>
                <div className="list-line"></div>
                {notStarted.map((task, index) =>
                (
                    <div key={index} className="ind-task">
                        <Link className='link-task' to={`/todo/${task._id}`}>
                            <BsCircle className='circle' />
                            <div className="right-task">
                                <p className='p-ind-task'>
                                    {task.task}
                                </p>
                                <div className="b-ind-task">
                                    <p className='b-ind-date'>
                                        {
                                            task.dueDate
                                                ? new Date(`${task.dueDate}T00:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' })
                                                : 'No due date'
                                        }
                                    </p>
                                    <p className='edit'>
                                        Edit
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="list">
                <h2 className='list-h'>In Progress</h2>
                <div className="list-line"></div>

                {inProgress.map((task, index) =>
                (
                    <div key={index} className="ind-task">
                        <Link className='link-task' to={`/todo/${task._id}`}>
                            <BsCircle className='circle' />
                            <div className="right-task">
                                <p className='p-ind-task'>
                                    {task.task}
                                </p>
                                <div className="b-ind-task">
                                    <p className='b-ind-date'>
                                        {
                                            task.dueDate
                                                ? new Date(`${task.dueDate}T00:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' })
                                                : 'No due date'
                                        }
                                    </p>
                                    <p className='edit'>
                                        Edit
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="list">
                <h2 className='list-h'> Completed</h2>
                <div className="list-line"></div>
                {completed.map((task, index) =>
                (
                    <div key={index} className="ind-task">
                        <Link className='link-task' to={`/todo/${task._id}`}>
                            <FcCheckmark className='check' />
                            <div className="right-task">
                                <p className='p-ind-task crossed'>
                                    {task.task}
                                </p>
                                <div className="b-ind-task">
                                    <p className='b-ind-date'>
                                        {
                                            task.dueDate
                                                ? new Date(`${task.dueDate}T00:00:00Z`).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' })
                                                : 'No due date'
                                        }
                                    </p>
                                    <p className='edit'>
                                        Edit
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TaskList;