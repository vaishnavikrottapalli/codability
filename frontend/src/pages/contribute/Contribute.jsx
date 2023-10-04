import React, { useContext } from 'react'
import "./contribute.css"
import { useState } from 'react';
import Topbar from "../../components/topbar/Topbar";
import { Context } from "../../context/Context";
import axios from 'axios';

export default function Contribute() {
  const { user } = useContext(Context);
  const username = user.username;
  const userID = user._id;
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  console.log(username, userID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProblem = {
      username,
      userID,
      title,
      desc,
      tags,
      difficulty,
      input,
      output,
    };
    console.log(newProblem);
    try {
      const res = await axios.post("http://localhost:5000/api/problems", newProblem);
      window.location.replace("http://localhost:3000/solve/"+res.data._id);
    } catch (err) {
      
    }
  }
  return (
    <div className = "wrapper">
        <Topbar></Topbar>
        <div className="topbar-placeholder"></div>
        <h2>Contribute</h2>
        <br />
        <p>Hey Geeks,<br></br> Want to contribute problems to our community and challenge you fellow geeks?
        <br /> GO Ahead! We give you full fuel!!</p>
        <form className = "forminp" onSubmit={handleSubmit}>
            <label>Title</label>
            <textarea cols="30" rows="2" onChange={(e)=>setTitle(e.target.value)} ></textarea>
            <span>Difficulty: </span>
            <select name="difficulty" value={difficulty} onChange={e=>setDifficulty(e.target.value)}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label>Tags</label>
            <textarea cols="30" rows="2" onChange={(e)=>{
              const tagsArray = e.target.value.split(',').map(tag => tag.trim());
              setTags(tagsArray)
            }}>
            </textarea>
            
            <label>Description</label>
            <textarea cols="80" rows="15" onChange={e=>setDesc(e.target.value)}></textarea>            
            <label>Input</label>
            <textarea cols="80" rows="10" onChange={(e)=>{
                const tagsArray = e.target.value.split(',').map(inp => inp.trim());
                setInput(tagsArray);
            }}></textarea>
            <label>Output</label>
            <textarea cols="80" rows="5"onChange={(e)=>{
                const tagsArray = e.target.value.split(',').map(op => op.trim());
                setOutput(tagsArray);
            }}></textarea>
            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}
