import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import InputForm from "../input-form/input-form";
import Homepage from "../homepage/homepage";
import AboutUs from "../../pages/about-us/about-us";
const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<InputForm />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default AppRoute;
