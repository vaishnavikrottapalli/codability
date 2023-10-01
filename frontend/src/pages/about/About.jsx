import Topbar from "../../components/topbar/Topbar";
import React from 'react'
import "./about.css"
export default function About() {
  return (
    <>
    
    <Topbar></Topbar>
    <div class="topbar-placeholder"></div>
    <div class="container">
      
        <h2>Our Aim</h2>
        <br />

        <p>
            Provide a wide variety of problems to solve. Problems that push you to challenge yourself.
        </p>
        <p>
          A good programmer also asks good questions and is aware of the corner cases too. 
          <br />
          Here is your chance to be creative and build questions and contribute to your coders community.
          <br />
          We are here with you while you post your contributions.
        </p>
        
        <br />
        <h2>Tips to excel Programming</h2>
        <p>
          <ul>
            <li>Try to break down the problem</li>
            <li>Unserstand the core princples behind each Data Structure.</li>
            <li>When stuck, take a walk and come back.</li>
          </ul>
        </p>
        <br />
        <h2>Team</h2>
        <p>
          <strong>vaishnavi</strong> - Project Developer
          <br />
          LinkedIn- <a href="https://www.google.com/">Profile</a>
          <br />
          GitHub- <a href="https://www.google.com/">Repo</a>
        </p>
    </div>
    </>
  )
}
