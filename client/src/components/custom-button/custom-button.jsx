// CustomButton.jsx
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  const buttonClasses = `${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-btn`;

  return (
    <button className={buttonClasses} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
