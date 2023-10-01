import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="top">
            <header className="header">
                <a href="#" className="logo">
                <ion-icon name="rocket-sharp"></ion-icon>
                CodeVerse
                </a>
                <div className="nav-button">
                    <Link className="about-contact" to="/">Problems</Link>
                    <Link className="about-contact" to="/contribute">Contribute</Link>
                    <Link className="about-contact" to="/about">About</Link>
                    <Link className="about-contact" to="/contactus">Contact Us</Link>
                    <button className="btn" id="signupBtn"> Sign out </button>
                </div>
            </header>
        </div>
    )
}