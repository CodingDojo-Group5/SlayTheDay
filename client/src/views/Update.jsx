import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import UpdateForm from '../components/UpdateForm';
import { Link } from "react-router-dom";


const TaskButton = () => {
    return (
        <div>
            <h1>Update View</h1>
            <UpdateForm />


        </div>

    )
}
export default TaskButton;