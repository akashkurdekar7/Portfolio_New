import React from 'react';
import "../styles.css";

const Button = ({ className = '', children, ...props }) => {
  return (
    <button className={`button ${className}`} role="button" {...props}>
      {children}
    </button>
  );
};

export default Button;