import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const [problems, setProblems] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:5000/api/problems")
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setProblems(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
    console.log("use effect running");
  },[]);
  return (
    <div class="home">
      <Topbar></Topbar>
      <div className="topbar-placeholder"></div>
      <h2 className="heading">PROBLEMS</h2>
      <div className="content-container" style={{ backgroundColor: "#dcdcdc" }}>
        <table id="problem-table">
          <thead className="thead">
            <tr>
              <th>Problem</th>
              <th>Tags</th>
              <th>
                Difficulty
                <select id="difficulty-filter">
                  <option value="">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </th>
              <th>
                Status
                <select id="status-filter">
                  <option value="">All</option>
                  <option value="Solved">Solved</option>
                  <option value="Unsolved">Unsolved</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>
                <td>
                  <Link className="link" to={`/solve/${problem._id}`}>
                    {problem.title}
                  </Link>
                </td>
                <td>
                  <div className="tags">
                    {problem.tags.map((tag, tagIndex) => (
                      <span className="tag" key={tagIndex}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <span className="difficulty">{problem.difficulty}</span>
                </td>
                <td>
                  <span className="status">solved</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
