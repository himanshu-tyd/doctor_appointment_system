import React, { useState } from "react";
import CustomInputForm from "../custom-input-form/custom-input-form";
import { NavLink } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import "./login-form.styles.scss";

const LoginForm = ({toggleForm}) => {


  return (
    <>
      <section className="form-container">
        <form action="">
          <div className="title">
            <h3>Join Lifecare.</h3>
          </div>
          <div className="email-box">
            <CustomInputForm type="text" placeholder="Email"></CustomInputForm>
          </div>
          <div className="password-box">
            <CustomInputForm
              type="text"
              placeholder="Password"
            ></CustomInputForm>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <div className="forgot-password">
              <NavLink to="">Forgot Passoword</NavLink>
            </div>
          </div>
          <div className="submit-button">
            <input type="submit" value='Sign In'></input>
          </div>
          <div className="registration-link">
              <NavLink onClick={toggleForm}> I do not have an Account</NavLink>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
