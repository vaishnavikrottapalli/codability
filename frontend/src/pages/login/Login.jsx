import "./login.css";
import { Link } from "react-router-dom";
import Signup from "../signup/Signup";
import { useState } from "react";

export default function Login() {
  return (
    <div className="wrapper">
      <header className="header">
        <a href="#" className="logo">
          <ion-icon name="rocket-sharp"></ion-icon>
          CodeVerse
        </a>
        <div className="nav-button">
          <Link className="about-prob" to="/signup">
            Signup
          </Link>
          <a href="#" className="about-prob">
            About Us
          </a>
          <a href="#" className="about-prob">
            Problems
          </a>
          <button className="btn" id="signupBtn">
            Sign Up
          </button>
        </div>
      </header>
      <section className="home">
        <div className="content">
          <h2>A Coder's Universe</h2>
          <p>
            {" "}
            Welcome to the zone where coding prowess meets challenges head-on!{" "}
          </p>

          <h3>Are you up for the challenge?</h3>
        </div>
        <div className="form-box">
          <div className="wrapper-login" id="login">
            <h2>Login</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>Email ID</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="register-link">
                <p>
                  New user?{" "}
                  <a href="#">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
