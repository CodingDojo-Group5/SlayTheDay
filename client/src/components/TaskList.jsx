import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Row, Col, Container } from 'react-bootstrap'



const TaskList = (props) => {
    const { todos, setTodos } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/todos", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setTodos(res.data);
            })
            .catch((err) => console.log(err));
    }, [])




    return (
        <div style={{ width: '800px', marginLeft: '400px' }}>

            <h1>Task List </h1>
            <hr />
            <Container>
                <Row >

                    <Col>
                        <h2>Not Completed</h2>


                    </Col>

                    <Col>
                        <h2>In Progress</h2>

                    </Col>
                    <Col>
                        <h2> Completed</h2>

                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default TaskList;