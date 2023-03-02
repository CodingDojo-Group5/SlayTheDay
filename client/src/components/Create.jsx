import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import bounce from '../assets/bounce-landing.mp4'
import axios from 'axios';

const Create = () => {

    const [state, setState] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const navigate = useNavigate();
    const { register } = state;
    const [errors, setErrors] = useState([]);

    const handleRegInputs = (e) => {
        setState({ ...state, register: { ...state.register, [e.target.name]: e.target.value } })
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", register, { withCredentials: true })
            .then((res) => { console.log(res); navigate('/user/todos') })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
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
                <form className='l-form' onSubmit={handleRegistration}>

                    <div className='f-wrapper'>
                        <div className="f-names">
                            <input onChange={handleRegInputs} name='firstName' type="text" placeholder='First Name' />
                            <div className='errors'>{errors.firstName ? errors.firstName.message : null}</div>
                        </div>
                        <div className="f-names">
                            <input onChange={handleRegInputs} name='lastName' type="text" placeholder='Last Name' />
                            <div className='errors'>{errors.lastName ? errors.lastName.message : null}</div>
                        </div>
                    </div>

                    <div className='form-selector'>
                        <input onChange={handleRegInputs} name='email' type="text" placeholder='Email' /><br />
                        <div className='errors'>{errors.email ? errors.email.message : null}</div>
                    </div>
                    <div className='form-selector'>
                        <input onChange={handleRegInputs} name='password' type="password" placeholder='Password' />
                        <div className='errors'>{errors.password ? errors.password.message : null}</div>
                    </div>
                    <div className='form-selector'>
                        <input onChange={handleRegInputs} name='confirmPassword' type="password" placeholder='Confirm Password' />
                        <div className='errors'>{errors.confirmPassword ? errors.confirmPassword.message : null}</div>
                    </div>
                    <input type="submit" value="Create" className='f-c-btn' />
                    <div className="line"></div>
                    <Link to='/'>Have an Account already?</Link>
                </form>
            </div>
        </div>
    )
}

export default Create