import React from 'react';
// import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
// import Topbar from "./components/topbar/Topbar";
import Contribute from "./pages/contribute/Contribute";
import Solve from "./pages/solve/Solve";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/solve/:problemId" element={<Solve />} />

      </Routes>
      {/* <div className="App"> */}
        {/* <Topbar/> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <Contribute/> */}
        {/* <About/> */}        
        {/* <Solve/> */}
      {/* </div> */}
    </Router>
    
  );
}
export default App;
