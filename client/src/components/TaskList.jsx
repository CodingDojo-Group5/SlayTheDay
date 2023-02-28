import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from 'react-bootstrap'



const TaskList = (props) => {
    const { todos, setTodos } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/todos", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setTodos(res.data.user.todos);
            })
            .catch((err) => console.log(err));
    }, [])

    const notStarted = todos.filter(task => task.todoStatus == 'not-started');
    const inProgress = todos.filter(task => task.todoStatus == 'in-progress');
    const completed = todos.filter(task => task.todoStatus == 'completed');

    return (
        <div style={{ width: '800px', marginLeft: '400px' }}>

            <h1>Task List </h1>
            <hr />
            <Container>
                <Row >
                    <Col>
                        <h2>Not Completed</h2>
                        {notStarted.map((task, index) =>
                        (
                            <div key={index} className='d-flex p-2 justify-content-evenly'>
                                <p>
                                    {task.task}
                                </p>
                                <Link to={`/todo/${task._id}`}>
                                    <Button variant="outline-secondary">
                                        Update
                                    </Button>{' '}
                                </Link>
                            </div>
                        ))}
                    </Col>

                    <Col>
                        <h2>In Progress</h2>
                        {inProgress.map((task, index) =>
                        (
                            <div key={index} className='d-flex p-2 justify-content-evenly'>
                                <p>
                                    {task.task}
                                </p>
                                <Link to={`/todo/${task._id}`}>
                                    <Button variant="outline-secondary">
                                        Update
                                    </Button>{' '}
                                </Link>
                            </div>

                        ))}

                    </Col>
                    <Col>
                        <h2> Completed</h2>
                        {completed.map((task, index) =>
                        (
                            <div key={index} className='d-flex p-2 justify-content-evenly'>
                                <p>
                                    {task.task}
                                </p>
                                <Link to={`/todo/${task._id}`}>
                                    <Button variant="outline-secondary">
                                        Update
                                    </Button>{' '}
                                </Link>
                            </div>

                        ))}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default TaskList;