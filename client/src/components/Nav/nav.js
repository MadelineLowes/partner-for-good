import React from 'react';
import './nav.css';
import { NavLink, useLocation } from 'react-router-dom';

import Auth from '../../utils/auth';

const LoggedInNav = () => (
    <>
        <NavLink to='/' className="links" >Home</NavLink>
        <NavLink to='/partners' className="links" >Partners</NavLink>
        <NavLink to='/my-cause' className="links">My Cause</NavLink>
        <button className='btn btn-light' onClick={() => Auth.logout()}>Logout</button>
        <h3>{Auth.getProfile().email}</h3>
    </>
);

const LoggedOutNav = () => (
    <>
        <NavLink to='/' className="links" >Home</NavLink>
        <NavLink to='/partners' className="links" >Partners</NavLink>
        <NavLink to='/login' className="links">Login</NavLink>
        <NavLink to='/signup' className="links">Sign Up</NavLink>
    </>
);


export default function Nav() {
    const location = useLocation();
    const isOnHome = location.pathname === '/';

    return (
        <nav className="nav background" style={{ position: isOnHome ? 'absolute' : '' }} >
            <div className="navDiv">
                <h1 className="navH1">Partner for Good.</h1>
                <div className="navLinks" >
                    {Auth.loggedIn() ? <LoggedInNav /> : <LoggedOutNav />}
                </div>
            </div>

        </nav>
    )
}