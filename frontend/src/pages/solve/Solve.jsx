import Topbar from "../../components/topbar/Topbar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import "./solve.css";

export default function Solve() {
    const [problemData, setproblemData] = useState([]);
    const { problemId } = useParams();
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState("cpp");
    const [output, setOutput] = useState("");
    const [status, setStatus] = useState("");
    const [submitDetails, setSubmitDetails] = useState(null);
    
    const handleCompileRun = async() =>{
        const payload = {
            language,
            code,
            input
        };
        try {
            setStatus("");
            setOutput("");
            setSubmitDetails("");
            const {data} = await axios.post('http://localhost:5000/run', payload);
            // console.log("data:" ,data);
            setOutput(data.output);
            console.log(data.submissionId)
            let intervalId;

            intervalId = setInterval(async()=>{
                const {data: dataRes} = await axios.get(
                    'http://localhost:5000/run/status',
                    {params:{id: data.submissionId,}}
                );
                const{success, submission, error} = dataRes;
                console.log(dataRes);

                if(success){
                    const {status: submitStatus, output: submitOutput} = submission;
                    setStatus(submitStatus);
                    setSubmitDetails(submission);
                    if(submitStatus === "pending") return;
                    setOutput(submitOutput);
                    clearInterval(intervalId);
                }
                else{
                    setStatus("Error: Retry!");
                    console.error(error);
                    clearInterval(intervalId);
                    setOutput(error);
                }                
            },1000);

        } catch ({response}) {
            if(response){
                const errMsg = response.data.err.stderr;
                setOutput(errMsg);
                setStatus("error")
            } else{
                setOutput("error connecting to server!")
            }           
        }
    };
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

    const renderTimeDetails = () =>{
        console.log("submitDetails",submitDetails);
        if(!submitDetails){
            return "";
        } 
        let exeResult = '';
        let {submittedAt, completedAt, startedAt} = submitDetails;
        // if(!completedAt || !startedAt){
        //     return exeTime;
        // }
        const start = moment(startedAt);
        const end = moment(completedAt);
        const exeTime = end.diff(start, 'seconds', true);
        exeResult += `Execution Time: ${exeTime}s`
        return exeResult;

        
    }

  return (
    <main>
        <Topbar></Topbar>
        <header className = "probsolve">
            <h1>{problemData.title}</h1>
        </header>
        <div className = "probsec">
            <section className="probdetails">
                <h2>Description:</h2>
                <p>{problemData.desc}</p>
                <br />
                <nav>
                    <p>Time Limit: {problemData.timelim}s</p>
                    <p>input:</p>
                    <p>output:</p>
                </nav>
            </section>

            <section className = "codesec">
                <select name="languages" id="lang" value={language}
                onChange={
                    (e) => {
                        setLanguage(e.target.value);
                        console.log(e.target.value);
                    }
                }>
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                </select>
                <textarea name="code" id="editor" cols="75" rows="20" 
                value={code}
                onChange={(e) =>{
                    setCode(e.target.value);
                }}
                ></textarea>
                <br />
                <div className="buttons">
                    <button onClick={handleCompileRun}>compile & run</button>
                    <button>Sumbit</button>
                </div>
                <label>Status: </label>
                <p>{status}</p>
                <label>Execution Time: </label>
                <p>{renderTimeDetails()}</p>

                <label>Input: </label>
                <textarea name="input" id="" cols="30" rows="5" value={input}
                    onChange={(e) =>{
                        setInput(e.target.value);
                    }}
                ></textarea>
                <label>Output</label>
                <textarea name="" id="" cols="30" rows="5" value={output}></textarea>
            </section>
        </div>
    </main>
  )
}
