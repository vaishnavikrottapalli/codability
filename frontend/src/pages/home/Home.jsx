import Topbar from "../../components/topbar/Topbar";
import { Context } from "../../context/Context";
import "./home.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [problems, setProblems] = useState([]);
  const { user } = useContext(Context)
  const [selectedDifficulty, setDifficulty] = useState("");
  const username = user.username;

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
    <div className="home-problems">
      <Topbar></Topbar>
      <section className="prob-section"> 
        <h2 className="hello-name">Name:  {username}</h2>
        <div className="content-container">
          <table id="problem-table">
            <thead className="thead">
              <tr>
                <th>Problem</th>
                <th>Tags</th>
                <th>
                  Difficulty
                  <select id="difficulty-filter" value={selectedDifficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </th>

              </tr>
            </thead>
            <tbody>
              {problems
              .filter((problem) =>
              selectedDifficulty === "" || problem.difficulty === selectedDifficulty
              )
              .map((problem, index) => (
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

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
