import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import bounce from '../assets/bounce-landing.mp4'
import axios from 'axios';


const Landing = () => {

    const [state, setState] = useState({
        login: {
            email: "",
            password: ""
        }
    })
    const navigate = useNavigate();
    const { login } = state;
    const [errors, setErrors] = useState({})



    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/:id/login", login, { withCredentials: true })
            .then((res) => { console.log(res); navigate('/user/todos') })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data);
            })
    }

    const handleLoginInputs = (e) => {
        setState({ ...state, login: { ...state.login, [e.target.name]: e.target.value } })
    }



    return (
        <div className='landing-b'>
            <div className="lb-left">
                <video className='bounce' src={bounce} autoPlay loop muted />
                <p className="c-name">
                    <span>SlayTheDay</span>
                </p>
                <p className='hero'>A place to empower individuals to conquer their daily tasks with a </p>
                <p className='hero'>platform that simplifies task management and organization.</p>
            </div>
            <div className="lb-right">
                <form className='l-form' onSubmit={handleLogin}>

                    <div>
                        <input onChange={handleLoginInputs} name='email' type="text" placeholder='Email' /><br />
                        <div className='errors'>{errors && (errors.message || (errors.data && errors.data.message)) ? (errors.message || errors.data.message) : null}</div>
                    </div>
                    <div>
                        <input onChange={handleLoginInputs} name='password' type="password" placeholder='Password' />
                    </div>
                    <input type="submit" value="Log In" className='l-btn' />
                    <div className="line"></div>
                    <Link to='/create'><button className='l-c-btn'>Create</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Landing