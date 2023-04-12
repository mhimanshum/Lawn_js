import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Bg from './components/B1.jpg';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="absolute -z-50 blur-sm">
        <img src={Bg} alt="Bg1"></img>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
