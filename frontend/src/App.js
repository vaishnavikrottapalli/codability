import React from 'react';
// import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
// import Topbar from "./components/topbar/Topbar";
// import Contribute from "./pages/contribute/Contribute";
// import Solve from "./pages/solve/Solve";
// import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Topbar/> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <Contribute/> */}
        <About/>
        {/* <Home /> */}
        {/* <Solve/> */}
      </div>
    </Router>
    
  );
}

export default App;
