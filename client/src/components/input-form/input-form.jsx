import React, { useState } from "react";
import LoginForm from "../login-form/login-form";
import "./input-form.styles.scss";
import SignUpForm from "../signup-form/signup-form";

const InputForm = () => {
  const [isSignup, setSignup] = useState(false);

  const toggleForm = () => {
    setSignup(!isSignup);
  };

  return (
    <>
      <section className={`input-form-container ${isSignup ? 'signup' : 'login'}`}>
        {isSignup ? (
          <SignUpForm toggleForm={toggleForm} />
        ) : (
          <LoginForm toggleForm={toggleForm} />
        )}
      </section>
    </>
  );
};

export default InputForm;







