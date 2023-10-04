import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./topbar.css"
import { Context } from "../../context/Context";

export default function Topbar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () =>{
        dispatch({type: "LOGOUT"});
    }
    return (
        <div className="top">
            <header className="header">
                <a href="#" className="logo">
                <ion-icon name="rocket-sharp"></ion-icon>
                CodeVerse
                </a>
                <div className="nav-button">
                    <ul>
                        <li><Link className="about-contact" to="/">Problems</Link></li>
                        <li><Link className="about-contact" to="/contribute">Contribute</Link></li>
                        <li><Link className="about-contact" to="/about">About</Link></li>
                        <li className='about-contact' onClick={handleLogout} to="/login">{user && "Logout"}</li>
                    </ul>
                    
                </div>
            </header>
        </div>
    )
}