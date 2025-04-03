import React, { useEffect, useRef } from "react";
import "./Button.css"; // External CSS file for styles

const Button = ({ children }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const item = buttonRef.current;
    if (!item) return;

    const word = children.split("");
    const frontDiv = document.createElement("div");
    const backDiv = document.createElement("div");

    frontDiv.classList.add("menu-text");
    backDiv.classList.add("menu-text");
    backDiv.style.position = "absolute";
    backDiv.style.left = "0";
    backDiv.style.top = "0";

    word.forEach((letter, idx) => {
      const spanFront = document.createElement("span");
      spanFront.style.setProperty("--index", idx);
      spanFront.textContent = letter;
      frontDiv.appendChild(spanFront);

      const spanBack = document.createElement("span");
      spanBack.style.setProperty("--index", idx);
      spanBack.textContent = letter;
      backDiv.appendChild(spanBack);
    });

    item.innerHTML = "";
    item.appendChild(frontDiv);
    item.appendChild(backDiv);
  }, [children]);

  return <button className="menu-item" ref={buttonRef}>{children}</button>;
};

export default Button;
