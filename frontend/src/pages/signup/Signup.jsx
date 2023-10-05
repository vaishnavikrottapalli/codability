import "./signup.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData); // Make a POST request to your /signup endpoint
      console.log("User registered:", response.data);
      navigate('/login');
      // You can add code here to handle successful registration, such as redirecting the user to a login page.
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Username or email already exists, display an error message
        setErrorMessage("Username or email already exists.");
      } else {
        console.error("Error registering user:", error);
        setErrorMessage("Error occured during registration.");
        // Handle other errors here, such as displaying a generic error message.
      }
      // console.error("Error registering user:", error);
      // Handle errors here, such as displaying an error message to the user.
    }
  };
  return (
    <div className="wrapper-signup">
      <header className="topbar-signup">
        <h2>CodeVerse</h2>
        <div className="nav-button">
          <Link className="topright-signup" to="/about">
            About Us
          </Link>
          <Link className="topright-signup" to="/login">
            Login
          </Link>
        </div>
      </header>
      <section className="home-signup">
        <div className="content">
            <h2>A Coder's Universe</h2>
            <p> Welcome to the zone where coding prowess meets challenges head-on! </p>
            <h3>Are you up for the challenge?</h3>
        </div>
        <div className="form-box">
          <div className="wrapper-login" id="login">
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <span className="icon"><ion-icon name="person-sharp"></ion-icon></span> 
                    <input type="text" name="username" value={formData.username} 
                      onChange={handleChange} required/>
                    <label>User Name</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon 
                        name="mail"></ion-icon></span> 
                    <input type="email" name="email" value={formData.email}
                      onChange={handleChange} required/>
                    <label>Email ID</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon 
                        name="lock-closed"></ion-icon></span> 
                    <input type="password" name="password" value={formData.password} 
                      onChange={handleChange} required/>
                    <label>Password</label>
                </div>
                {errorMessage && (
                  <div className="error-message">
                    {errorMessage}
                  </div>
                )}
                <button type="submit" className="btn">Sign Up</button>
                
                <div className="register-link">
                    <p>Already a user? <a href="#">Login</a></p>
                </div>
              </form>
          </div>
      </div>
      </section>
    </div>
  );
}
