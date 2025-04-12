import React, {useEffect, useState} from "react";
import "./Comp.css";
import {FaSun, FaMoon, FaFireAlt} from "react-icons/fa";

const Components = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState("darkmode");

  const navIcon = () => {
    setActive((prev) => !prev);
  };

  const cycleTheme = () => {
    const nextTheme =
      theme === "darkmode"
        ? "lightmode"
        : theme === "lightmode"
        ? "redmode"
        : "darkmode";
    setTheme(nextTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("darkmode", "lightmode", "redmode");
    root.classList.add(theme);
  }, [theme]);

  const renderIcon = () => {
    if (theme === "darkmode") return <FaMoon />;
    if (theme === "lightmode") return <FaSun />;
    return <FaFireAlt />;
  };

  return (
    <nav className="p-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <h2 className="fw-bolder m-0">ak</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <h3 className="m-0">EN</h3>
          <div
            className="text-white fs-4"
            role="button"
            onClick={cycleTheme}
            style={{
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
            {renderIcon()}
          </div>
          <div
            className={`dotgrid ${active ? "active" : ""}`}
            onClick={navIcon}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div>
        </div>
      </div>

      <div className={`menu ${active ? "show" : ""}`}>
      <ul>
            <li>
              <a href="#home">
                Ho<span className="line"></span>me
              </a>
            </li>
            <li>
              <a href="#about">
                Abo<span className="line"></span>ut
              </a>
            </li>
            <li>
              <a href="#skills">
                Ski<span className="line"></span>lls
              </a>
            </li>
            <li>
              <a href="#experience">
                Experi<span className="line"></span>ence
              </a>
            </li>
            <li>
              <a href="#projects">
                Pro<span className="line"></span>jects
              </a>
            </li>
            <li>
              <a href="#contact">
                Con<span className="line"></span>tact
              </a>
            </li>
            <li>
              <a href="#resume">
                Resu<span className="line"></span>me
              </a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Components;
