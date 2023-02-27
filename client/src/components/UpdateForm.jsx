import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate, } from "react-router-dom";


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
                console.log(res.data[0])
                setTask(res.data[0].task);
                setDueDate(res.data[0].dueDate);
                setToDoStatus(res.data[0].todoStatus);
                console.log(task, dueDate, todoStatus)
            })
            .catch((err) => console.log(err));
    }, [])

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
        axios.delete(`http://localhost:8000/api/todo/${id}/delete `)
            .then(res => {
                console.log(res.data);
                const newList = todos.filter((todos, index) => todos._id !== taskId)
                setTodos(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    console.log(task, dueDate, todoStatus)
    return (
        <div>
            <h2>Update {task} </h2>
            <Form onSubmit={updateTask} style={{ width: '400px' }} className="mb-3">
                <Form.Group className="mb-3">
                    <Form.Control
                        type='text'
                        name='task'
                        placeholder="Task name"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Task Due Date
                    </Form.Label>
                    <Form.Control
                        type="date"
                        name='dueDate'
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Select name="todoStatus" value={todoStatus} onChange={(e) => setToDoStatus(e.target.value)} >
                        <option> Select Todo Status</option>
                        <option value="not-started">Not-Started</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="completed">Completed</option>
                    </Form.Select>

                </Form.Group>
                <Button type="submit" value="update" variant="outline-success">
                    Update
                </Button>{' '}
                <Button variant="outline-danger" onClick={() => deleteTask(todos._id)} >
                    Delete
                </Button>{' '}


            </Form>
        </div>
    )
}
export default UpdateForm;