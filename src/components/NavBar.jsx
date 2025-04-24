import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
// import menu from "../assets/navbar/nav_menu.jpeg";
import profile from "../assets/navbar/nav_menu2.jpg";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaArrowUpRightDots, FaArrowUpRightFromSquare } from "react-icons/fa6";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState("darkmode");
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ["hello", "ನಮಸ್ಕಾರ", "नमस्ते", "హలో", "ഹലോ0", "bonjour"];
  const [blur, setBlur] = useState(0);
  const [scale, setScale] = useState(1);

  const navIcon = () => {
    setActive((prev) => !prev);
  };

  const cycleTheme = () => {
    const nextTheme = theme === "darkmode" ? "lightmode" : "darkmode";
    setTheme(nextTheme);
  };

  const Greetings = () => {
    setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("darkmode", "lightmode");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(5);
      setScale(1.2);

      setTimeout(() => {
        setBlur(0);
        setScale(1);
        Greetings();
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = () => {
    return theme === "darkmode" ? <FaMoon /> : <FaSun />;
  };

  return (
    <nav>
      <div className="topidx container-fluid d-flex justify-content-between align-items-center">
        <Link to={"/"} className="logo m-0">
          ak
        </Link>

        <div className="d-flex justify-content-center align-items-center gap-5">
          <h3
            className="language-switch fw-bold mb-0"
            role="button"
            style={{
              cursor: "pointer",
              transition: "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
              transform: `scale(${scale})`,
              filter: `blur(${blur}px)`,
            }}>
            {languages[languageIndex]}
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
        <div className="w-100 d-flex">

          <div className="img">
            {/* <img src={menu} alt="Menu Background" /> */}
            <img src={profile} alt="Menu Background" className="menu_img" />
          </div>
          <div className="menu-content">
            <ul className="w-100">
              <li onClick={() => setActive(!active)}>
                <Link to="/">
                  <h2 >

                    Ho<span className="line"></span>me
                  </h2>
                </Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <Link to="/about">
                  <h2>
                    Ab<span className="line"></span>out
                  </h2>
                </Link>
              </li>
              {/* <li onClick={() => setActive(!active)}>
              <Link to="/experience">
                Experi<span className="line"></span>ence
              </Link>
            </li> */}
              <li onClick={() => setActive(!active)}>
                <Link to="/projects">
                  <h2>
                    Pro<span className="line"></span>jects
                  </h2>
                </Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <Link to="/contact">
                  <h2>
                    Cont<span className="line"></span>act
                  </h2>
                </Link>
              </li>
              <li onClick={() => setActive(!active)}>
                <a href="/Akash_BE_CSE_2024.pdf" download>
                  <h2>
                    Resu<span className="line"></span>me
                  </h2>
                </a>
              </li>
              <li onClick={() => setActive(!active)} className="gap-4 mt-md-4 mt-2 nav-links">
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="size18 social-link d-flex gap-3"
                >
                  <FaArrowUpRightFromSquare className="social-link-icon" />Instagram

                </a>

                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="size18 social-link d-flex  gap-3"
                >
                  <FaArrowUpRightFromSquare className="social-link-icon" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
