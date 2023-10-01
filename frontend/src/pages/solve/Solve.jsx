import Topbar from "../../components/topbar/Topbar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./solve.css"


export default function Solve() {
    const [problemData, setproblemData] = useState([]);
    const { problemId } = useParams();
    console.log("problemId ",problemId);
    useEffect(() => {
        fetch(`http://localhost:5000/api/problems/${problemId}`)
          .then((res) => res.json())
          .then((data) => {
            setproblemData(data);
            console.log(data); 
          })
          .catch((error) => {
            console.error('Error fetching problem data:', error);
          });
      }, [problemId]);
  return (
    <main>
        <Topbar></Topbar>
        <header class = "probsolve">
            <h1>{problemData.title}</h1>
        </header>
        <div class = "probsec">
            <section class="probdetails">
                <h2>Description:</h2>
                <p>{problemData.desc}</p>
                <br />
                <nav>
                    <p>Time Limit: {problemData.timelim}s</p>
                    <p>input:</p>
                    <p>output:</p>
                </nav>
            </section>

            <section class = "codesec">
                <select name="languages" id="lang">
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                </select>
                <textarea name="code" id="" cols="60" rows="20"></textarea>
                <div class="buttons">
                    <button>compile & run</button>
                    <button>Sumbit</button>
                </div>
                <label>Output</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </section>
        </div>
    </main>
  )
}
