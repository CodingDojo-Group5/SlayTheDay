import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const Main = (props) => {

    const [task, setTask] = useState([]);

    return (
        <TaskList task={task} setTask={setTask} />
    )
}
export default Main;