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
            <header className="header-topbar">
                <h2>CodeVerse</h2>
                <div className='top-center'>
                    <Link className="about" to="/">Problems</Link>
                    <Link className="about" to="/contribute">Contribute</Link>
                    <Link className="about" to="/about">About</Link>
                </div>
                <div className="nav-button">
                    <Link className='about-contact' onClick={handleLogout} to="/login">{user && "Logout"}</Link>
                </div>
            </header>
        </div>
    )
}