import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import plus from '../img/patch-plus.svg'
import { Link } from "react-router-dom";


const TaskButton = () => {
    return (
        <div>
            <h1>Task Button</h1>
            <Link to='/todo/new' >

                <img src={plus} />


            </Link>

        </div>

    )
}
export default TaskButton;