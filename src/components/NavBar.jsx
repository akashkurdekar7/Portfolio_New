import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link
import menu from "../assets/final/nav_menu.jpeg";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState("darkmode");
  const [language, setLanguage] = useState("EN");

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

  const cycleLanguage = () => {
    const languages = ["EN", "KN", "HN", "TL"];
    const currentIndex = languages.indexOf(language);
    const nextLanguage = languages[(currentIndex + 1) % languages.length];
    setLanguage(nextLanguage);
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
    <nav>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to={"/"} className="logo m-0">ak</Link>

        <div className="d-flex justify-content-center align-items-center gap-5">
          <h3
            className="language-switch fw-bold mb-0"
            role="button"
            onClick={cycleLanguage}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {language}
          </h3>

          <div
            className="mode fs-4 d-flex"
            role="button"
            onClick={cycleTheme}
            style={{
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {renderIcon()}
          </div>
          <div
            className={`dotgrid ${active ? "active" : ""}`}
            onClick={navIcon}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="dot" />
            ))}
          </div>
        </div>
      </div>

      <div className={`menu ${active ? "show" : ""}`}>
        <div className="img">
          <img src={menu} alt="Menu Background" />
        </div>
        <div className="menu-content">
          <ul className="w-100">
            <li onClick={()=>setActive(!active)}>
              <Link to="/">
                Ho<span className="line"></span>me
              </Link>
            </li>
            <li onClick={()=>setActive(!active)}>
              <Link to="/about">
                Abo<span className="line"></span>ut
              </Link>
            </li>
            {/* <li onClick={()=>setActive(!active)}>
              <Link to="/skills">
                Ski<span className="line"></span>lls
              </Link>
            </li> */}
            <li onClick={()=>setActive(!active)}>
              <Link to="/experience">
                Experi<span className="line"></span>ence
              </Link>
            </li>
            <li onClick={()=>setActive(!active)}>
              <Link to="/projects">
                Pro<span className="line"></span>jects
              </Link>
            </li>
            <li onClick={()=>setActive(!active)}>
              <Link to="/contact">
                Con<span className="line"></span>tact
              </Link>
            </li>
            <li onClick={()=>setActive(!active)}>
              <Link to="/resume">
                Resu<span className="line"></span>me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
