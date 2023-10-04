import "./login.css";
import { Link } from "react-router-dom";
import Signup from "../signup/Signup";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  return (
    <div className="wrapper">
      <header className="header">
        <a href="#" className="logo">
          <ion-icon name="rocket-sharp"></ion-icon>
          CodeVerse
        </a>
        <div className="nav-button">
          <Link className="about-prob" to="/about">
            About Us
          </Link>
          <Link className="about-prob" to="/">
            Problems
          </Link>
          <Link className="about-prob" to="/signup">
            Signup
          </Link>
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
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" ref={emailRef} required />
                <label>Email ID</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" ref={passwordRef} required />
                <label>Password</label>
              </div>
              <button type="submit" className="btn" disabled={isFetching}>
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
