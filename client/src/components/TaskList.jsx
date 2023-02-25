import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import TaskButton from './TaskButton';
import { Card, Form, Row, Col, Container } from 'react-bootstrap'


const TaskList = () => {
    return (
        <div>

            <h1>Task List </h1>
            <TaskButton />
            <hr />
            <Container>
                <Row>
                    <Col>
                        <h2>Not Completed</h2>
                        <Form>
                            <Form.Check
                                type='checkbox'

                            />

                        </Form>

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