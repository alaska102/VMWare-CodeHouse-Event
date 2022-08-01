import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Preferences from './Components/Preferences/Preferences';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";





function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route> 
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
