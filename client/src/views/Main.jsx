import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';

const Main = (props) => {

    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h1 style={{ width: '800px', marginLeft: '400px' }} >Dashboard</h1>
            <br />
            <CreateTask todos={todos} setTodos={setTodos} />
            <br />
            <TaskList todos={todos} setTodos={setTodos} />

        </div>
    )
}
export default Main;