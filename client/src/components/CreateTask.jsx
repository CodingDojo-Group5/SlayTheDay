import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const CreateTask = (props) => {

    const { todos, setTodos } = props;
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
        },
            { withCredentials: true })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTodos([...todos, res.data])
                setTask('');
                setDueDate('');
                setToDoStatus('');
                // setToggle(false);
            })
            .catch(err => console.log(err))

    }

    return (
        <div style={{ width: '800px', marginLeft: '400px' }} >
            <Button onClick={() => setToggle(!toggle)}
                variant="outline-info" className="mb-3">  New Task
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
                            <Form.Select name="todoStatus" value={todoStatus} onChange={(e) => setToDoStatus(e.target.value)} >
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
        </div>

    )
}
export default CreateTask;