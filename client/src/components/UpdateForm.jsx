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
        axios.get('http://localhost:8000/api/todo/' + id + '/update/')
            .then((res) => {
                setTask(res.data.user.task);
                setDueDate(res.data.user.dueDate);
                setToDoStatus(res.data.user.todoStatus);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateTask = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/todo/' + id + '/update', {
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
        axios.delete('http://localhost:8000/api/reservations/' + taskId)
            .then(res => {
                console.log(res.data);
                const newList = todos.filter((todos, index) => todos._id !== taskId)
                setTodos(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>Update Form</h1>
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
                    <Form.Select onChange={(e) => setToDoStatus(e.target.value)} >
                        <option> Select Todo Status</option>
                        <option value="not-started">Not-Started</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="completed">Completed</option>
                    </Form.Select>

                </Form.Group>
                <Button value="create" type="submit" variant="outline-success">
                    Finish Edit
                </Button>{' '}
                <Button variant="outline-danger" onClick={() => deleteTask(todos._id)} >

                </Button>{' '}


            </Form>
        </div>
    )
}
export default UpdateForm;