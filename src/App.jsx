import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componen/home/Home';
import Profile from './componen/profile/Profile';
import AboutUs from './componen/aboutus/AboutUs';
import LoginPage from './componen/login/LoginPage';
import RegisPage from './componen/register/RegisPage';

export const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/regis" element={<RegisPage />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
