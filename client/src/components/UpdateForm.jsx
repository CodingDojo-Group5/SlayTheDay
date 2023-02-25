import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate } from "react-router-dom";


const UpdateForm = () => {
    const { id } = useParams();
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoStatus, setToDoStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/todo/' + id + '/update')
            .then((res) => {
                setTask(res.data.task);
                setDueDate(res.data.dueDate);
                setToDoStatus(res.data.todoStatus);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateTask = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/todo/' + id + '/update', {
            task,
            dueDate,
            petName,
            todoStatus
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/tasks")
            })
            .catch(err => console.log(err))
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
                    Add Task
                </Button>


            </Form>


        </div>

    )
}
export default UpdateForm;