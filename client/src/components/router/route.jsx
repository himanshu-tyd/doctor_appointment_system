import React from "react";
import Homepage from "../homepage/homepage";
import AboutUs from "../../pages/about-us/about-us";
import { Route, Routes } from "react-router-dom";
import Header from "../header/header";
import InputForm from "../input-form/input-form";
import SignUpForm from "../signup-form/signup-form";

const AppRoute = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/registration" element={<InputForm />} />
        {/* <Route path="/registration" element={<SignUpForm />} /> */}
      </Routes>
    </>
  );
};

export default AppRoute;
