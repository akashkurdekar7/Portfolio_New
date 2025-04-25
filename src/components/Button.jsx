// Button.jsx
import React from "react";

const Button = ({ href, target, rel, onClick, className, children, ...props }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`btn ${className || ""}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`button ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;