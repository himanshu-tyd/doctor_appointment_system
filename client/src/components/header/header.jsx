import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";
import Logo from "../../assets/logo.svg";
import CustomButton from "../custom-button/custom-button";

const Header = () => {
  return (
    <>
      <section className="container">
        <NavLink to="/" className="logo-container">
          <img className="logo" src={Logo} alt="logo" width="140"></img>
        </NavLink>
        <nav className="nav-items"> 
          <NavLink>Find Doctor</NavLink>
          <NavLink>Video Consult</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink>Contact</NavLink>
        </nav>
        <div className="btn-container">
          <NavLink to="/registration" className="btn">
            Login/Singup
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Header;
