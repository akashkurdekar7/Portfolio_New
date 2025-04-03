import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from '../Button/Button';
import "./Navbar.css"
const sections = ["about", "projects", "contact"];

const NavBar = () => {
  const [activeTitles, setActiveTitles] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      let newActiveTitles = [];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom > 50) {
            newActiveTitles.push(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      });

      setActiveTitles((prev) =>
        JSON.stringify(prev) !== JSON.stringify(newActiveTitles) ? newActiveTitles : prev
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <div
        className={`nav-container fixed-top w-100 px-4 py-2 border border-dark ${
          activeTitles.length === 0 ? "d-none" : ""
        }`}
        style={{
          backgroundColor: "#F5F5DC",
          color: "#000",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <motion.div
          className="d-flex justify-content-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {activeTitles.map((title, index) => (
            <Button key={index}>{title}</Button>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="position-absolute">
        <div
          className="position-fixed top-50"
          style={{ transform: "rotate(270deg)", left: "-4%" }}
        >
          <h5 className="text-white text-uppercase">akashkurdekar39@gmail.com</h5>
        </div>

        {/* Progress Bar */}
        <div
          className="position-fixed top-50"
          style={{
            transform: "rotate(90deg)",
            width: "10%",
            right: "-1%",
          }}
        >
          <div className="progress w-100 m-2" style={{ height: "4px" }}>
            <div
              className="progress-bar text-red"
              role="progressbar"
              style={{
                width: `${scrollProgress}%`,
                background: "linear-gradient(to bottom, #e84545, #e84545)",
                boxShadow: "0 0 5px #e84545, 0 0 10px #e84545",
                borderRadius: "2px",
                transition: "width 0.3s ease-in-out",
              }}
              aria-valuenow={scrollProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
