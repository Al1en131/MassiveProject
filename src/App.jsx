import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componen/home/Home";
import Profile from "./componen/profile/Profile";
import AboutUs from "./componen/aboutus/AboutUs";
import LoginPage from "./componen/login/LoginPage";
import RegisPage from "./componen/register/RegisPage";
import Edukasi from "./componen/service-edukasi/Edukasi";
import ServiceNews from "./componen/service-news/ServiceNews";
import ServicePickup from "./componen/service_pickup/ServicePickup";
import { UserProvider } from "./context/UserContext";
import Edu from "./componen/desduksi/desduksi";

export const App = () => {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/regis" element={<RegisPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/news" element={<ServiceNews />} />
            <Route path="/pickup" element={<ServicePickup />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edu" element={<Edu />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
