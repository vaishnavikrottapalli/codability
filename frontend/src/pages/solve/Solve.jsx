import Topbar from "../../components/topbar/Topbar";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from 'axios';
import moment from 'moment';
import Editor from "@monaco-editor/react"
import "./solve.css";

export default function Solve() {
    const { user } = useContext(Context)
    const uname = user.username;
    const userId = user._id;
    const [problemData, setproblemData] = useState([]);
    const { problemId } = useParams();
    const probtitle = problemData.title;
    const probAuthorId = problemData.userID;
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [language, setLanguage] = useState("cpp");
    const [output, setOutput] = useState("");
    const [status, setStatus] = useState("");
    const [submitDetails, setSubmitDetails] = useState(null);
    console.log("proble data is: ",problemData);
    let canEdit = false;
    if (problemData.userID === userId){
        canEdit = true;
    }
    const handleDelete = async()=>{
        const res = await axios.delete(`http://localhost:5000/api/problems/${problemId}?userID=${probAuthorId}`);
        window.location.replace("http://localhost:3000/");
        console.log(res);
    }
    const handleSubmitCode = async() =>{
        const subload = {
            problemId,
            language,
            code           
        };
        const {tcdata} = await axios.post('http://localhost:5000/run/submit', subload);
        console.log(tcdata);
    };

    const handleEditorChange = (newValue, e) => {
        setCode(newValue);
      };
    const handleCompileRun = async() =>{
        const payload = {
            uname,
            userId,
            probtitle,
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
                <h2 className="sec-name">Problem Story</h2>
                {canEdit && <button onClick={handleDelete}>delete</button>}
                <p>{problemData.desc}</p>
                <br />
            </section>
            <section className = "codesec">
                <select className ="lang-dd"name="languages" id="lang" value={language}
                onChange={
                    (e) => {
                        setLanguage(e.target.value);
                        console.log(e.target.value);
                    }
                }>
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                </select>
                <Editor className="editorbox"
                    height = ""
                    // witdh = "100%"
                    theme="vs-dark"
                    
                    value={code}
                    onChange={handleEditorChange}
                    options={{
                        selectOnLineNumbers: true,
                        folding: true,
                    }}
                />
                <br />
                <div className="buttons">
                    <button onClick={handleCompileRun}>Compile & Run</button>
                    <button onClick={handleSubmitCode}>Sumbit</button>
                </div>
                <label className="execution-details">Status: {status}</label>
                <label className="execution-details">Execution Time: {renderTimeDetails()} </label>
                <label className="execution-details">Input: </label>
                <textarea name="input" id="" cols="30" rows="5" value={input}
                    onChange={(e) =>{
                        setInput(e.target.value);
                    }}
                ></textarea>
                <label className="execution-details">Output: </label>
                <textarea name="" id="" cols="30" rows="5" value={output}></textarea>
            </section>
        </div>
    </main>
  )
}
