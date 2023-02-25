import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'

import plus from '../img/patch-plus.svg'

import { Link } from "react-router-dom";


const CreateTask = (props) => {

    const { todos, settodos } = props;
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [todoStatus, setToDoStatus] = useState('');
    const [toggle, setToggle] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/todo/new', {
            task,
            dueDate,
            todoStatus
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                settodos([...todos, res.data])
                setTask('');
                setDueDate('');
                setToDoStatus('');
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <Button onClick={() => setToggle(!toggle)} variant="outline-info" className="mb-3"> <img src={plus} />
            </Button>
            {toggle && (
                <div>
                    <Form onSubmit={onSubmitHandler} style={{ width: '400px' }} className="mb-3">
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





            )}

            {/* <Form onSubmit={onSubmitHandler} style={{ width: '400px' }}>
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
                <Button variant="outline-success">
                    Add Task
                </Button>


            </Form> */}


        </div>

    )
}
export default CreateTask;