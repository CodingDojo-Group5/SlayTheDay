import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from 'react-icons/bi'
import { BiMenuAltRight } from 'react-icons/bi'
import profile from '../assets/PFicon.png'


const LogoutButton = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [toggleSideMenu, setToggleSideMenu] = useState(0);


    function SideMenuSwitch() {
        setToggleSideMenu(toggleSideMenu === 0 ? 1 : 0);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/todos", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setFirstName(res.data.user.firstName);
                setLastName(res.data.user.lastName);
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
        <div className={toggleSideMenu === 0 ? 'side-menu' : 'side-menu-c'}>
            <button className={toggleSideMenu === 0 ? 'icon-s' : 'none'} onClick={SideMenuSwitch}><BiMenuAltLeft /></button>
            <button className={toggleSideMenu === 0 ? 'none' : 'icon-s-r'} onClick={SideMenuSwitch}><BiMenuAltRight /></button>
            <div className={toggleSideMenu === 0 ? 'none' : 'logout-m'}>
                <div className="profile">
                    <img src={profile} className='img-icon' />
                    <div className="profile-sub">
                        <p>
                            {firstName}
                        </p>
                        <p>
                            {lastName}
                        </p>
                    </div>
                </div>
                <button className='log-btn' onClick={logOutHandler}>
                    LogOut
                </button>
            </div>
        </div>
    )
}
export default LogoutButton;