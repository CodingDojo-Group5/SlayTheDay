import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import LogoutButton from '../components/LogoutButton';

const Main = (props) => {

    const [todos, setTodos] = useState([]);

    return (
        <div>
            <LogoutButton />
            <div className="overlay"></div>
            <div className="dashboard">
                <p className="c-name dash-t">
                    <span>SlayTheDay</span>
                </p>
                <div>
                    <p className='title'>Task Manager</p>
                    <div className="d-line"></div>
                </div>
                <div className="list-items">
                    <CreateTask todos={todos} setTodos={setTodos} />
                    <TaskList todos={todos} setTodos={setTodos} />
                </div>
            </div>
        </div>
    )
}
export default Main;