import React from 'react'
import "./contribute.css"
import { useState } from 'react';

export default function Contribute() {


  const handleSubmit = () => {
    console.log("user clicked Submit!")
  }
  return (
    <div className = "wrapper">
        <h2>Constribute</h2>
        <br />
        <p>Hey Geeks,<br></br> Want to contribute problems to our community and challenge you fellow geeks?
        <br /> GO Ahead! We give you full fuel!!</p>
        <form className = "forminp">
            <label>Title</label>
            <textarea cols="30" rows="2"></textarea>
            <label>Description</label>
            <textarea cols="80" rows="15"></textarea>
            <label>Input</label>
            <textarea cols="80" rows="10"></textarea>
            <label>Output</label>
            <textarea cols="80" rows="5"></textarea>
            <button type='submit' onClick={handleSubmit}>Submit</button>

        </form>
    </div>
  )
}
