import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import TaskButton from './TaskButton';
import CreateTask from './CreateTask';
import { Card, Form, Row, Col, Container } from 'react-bootstrap'



const TaskList = (props) => {
    const { todos, settodos } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/todos")
            .then((res) => {
                console.log(res.data);
                settodos(res.data);
            })
            .catch((err) => console.log(err));
    }, [])




    return (
        <div>

            <h1>Task List </h1>
            <CreateTask />

            <hr />
            <div>
                {/* {todos.map((task, index) => (
                    <div key={index}>
                        <p>
                            {task.todos}
                        </p>

                    </div>
                ))} */}

            </div>
            <Container>
                <Row >

                    <Col>
                        <h2>Not Completed</h2>


                    </Col>

                    <Col>
                        <h2>In Progress</h2>
                        <Form>
                            <Form.Check
                                type='checkbox'

                            />

                        </Form>
                    </Col>
                    <Col>
                        <h2> Completed</h2>
                        <Form>
                            <Form.Check
                                type='checkbox'

                            />

                        </Form>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default TaskList;