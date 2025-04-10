import React, {useState} from "react";
import "./Navbar.css";
import web from "../../assets/final/nav_spider.png";
import menu_img from "../../assets/final/nav_menu.jpeg";
import menu_img_small from "../../assets/final/nav_menu_small.jpeg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar_con">
        <nav className="d-flex justify-content-center ">
          <div className="logo">
            <h1 className="font-Halium">A</h1>
          </div>
          <ul className="">
            <li>
              <a href="#home">
                <img src={web} alt="navigation" />
              </a>
            </li>
            <li>
              <a href="#about">
                <img src={web} alt="navigation" />
              </a>
            </li>
            <li>
              <a href="/resume">
                <img src={web} alt="navigation" />
              </a>
            </li>
            <li
              className={`burger_menu ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`side_menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu_sections">
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
        <div className="menu_image_container">
          <img src={menu_img} alt="Menu Graphic" className="big" />
          <img src={menu_img_small} alt="Menu Graphic" className="small" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
