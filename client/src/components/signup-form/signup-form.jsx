import React from "react";
import CustomInputForm from "../custom-input-form/custom-input-form";
import { NavLink } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import './signup-form.styles.scss'

const SignUpForm= ({toggleForm}) => {
  return (
    <>
      <section className="form-container">
        <form action="">
          <div className="title">
            <h3>Join Lifecare.</h3>
          <div className="remember-forgot">
           
              <NavLink to="">Are you a Doctor ?</NavLink>
          </div>
          </div>
          <div className="name-box">
            <CustomInputForm type="text" placeholder="Full Name"></CustomInputForm>
          </div>
          <div className="email-box">
            <CustomInputForm type="text" placeholder="Email"></CustomInputForm>
          </div>
          <div className="password-box">
            <CustomInputForm
              type="text"
              placeholder="Create Password"
            ></CustomInputForm>
            <CustomInputForm
              type="text"
              placeholder="Confirm Password"
            ></CustomInputForm>
          </div>
          <div className="submit-button">
            <input type="submit" value='Sign Up'></input>
          </div>
          <div className="go-back-link">
              <NavLink onClick={toggleForm}>Go Back</NavLink>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUpForm;
