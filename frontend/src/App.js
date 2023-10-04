import React, { useContext } from 'react';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contribute from "./pages/contribute/Contribute";
import Solve from "./pages/solve/Solve";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={user ? <Home/> : <Signup />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/" element={user ? <Home />: <Signup/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={user ? <Contribute /> : <Signup/>} />
        <Route path="/solve/:problemId" element={user ? <Solve /> : <Signup/>} />
      </Routes>
    </Router>
    
  );
}
export default App;
