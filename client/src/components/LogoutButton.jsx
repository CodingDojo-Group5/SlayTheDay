import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const LogoutButton = (props) => {
    const [firstName, setFirstName] = useState('');


    useEffect(() => {
        axios.get("http://localhost:8000/api/user/todos", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setFirstName(res.data.user.firstName);
            })
            .catch((err) => console.log(err));
    }, [])

    const navigate = useNavigate();
    const logOutHandler = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/api/user/logout')
            .then((res) => { console.log(res); navigate('/') })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <p>
                Welcome,{firstName}
            </p>

            <Button onClick={logOutHandler}>
                LogOut
            </Button>

        </div>

    )
}
export default LogoutButton;