import * as React from 'react';
import { useState } from 'react';
import UpdateForm from '../components/UpdateForm';


const Update = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div>

            <UpdateForm todos={todos} setTodos={setTodos} />


        </div>

    )
}
export default Update;