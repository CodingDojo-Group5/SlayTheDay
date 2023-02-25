import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import plus from '../img/patch-plus.svg'
import { Link } from "react-router-dom";
import CreateTask from './CreateTask';


const TaskButton = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <h1>Task Button</h1>
            <Link to='todo/new'>
                <img src={plus} />
            </Link>
            <Button onClick={() => setToggle(!toggle)}> Toggle Button
            </Button>
            {toggle && (
                <h1>HIDE ME</h1>
            )}

        </div>

    )
}
export default TaskButton;