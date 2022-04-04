import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
const STYLES = ['btn-primary', 'btn-outline', 'btn-login'];
const SIZE = ['btn-large', 'btn-medium'];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  canceSignup
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <Link
      to={canceSignup ? '/' : './sign-up'}
      className="btn-mobile"
    >
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle} ${canceSignup}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
