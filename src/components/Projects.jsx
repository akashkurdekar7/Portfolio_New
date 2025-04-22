import wildlifeImg from "../assets/projects/widlife.png";
import ammasPasteryImg from "../assets/projects/ammaspatery.png";
import contestImg from "../assets/projects/contest.webp";
import knightBiteImg from "../assets/projects/knightbite.png";
import kraftopiaImg from "../assets/projects/kraftopia.png";
import parallaxImg from "../assets/projects/parallaxWebsite.png";
import vehicleWashImg from "../assets/projects/vehiclewash.jpg";
import roadSafetyImg from "../assets/projects/roadsafety.jpg";
import royalBrothersImg from "../assets/projects/royalbrothers.png";
import moneyConvertImg from "../assets/projects/money-5459709_1280.png";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const projectData = [
  { title: "Wildlife Conservation Initiative", description: "An impactful initiative focused on wildlife conservation, habitat preservation, and environmental education.", img: wildlifeImg },
  { title: "Parallax Single-Page Website", description: "A beautifully animated single-page site with Framer Motion and scroll effects.", img: parallaxImg },
  { title: "Smart Road Safety System", description: "An IoT-enabled system for detecting and alerting potholes and speed bumps.", img: roadSafetyImg },
  { title: "Knight-Bite Clone", description: "A responsive clone of the Knight-Bite food delivery website.", img: knightBiteImg },
  { title: "Vehicle Service Management System", description: "A full-stack app to manage vehicle servicing, bookings, and reminders.", img: vehicleWashImg },
  { title: "Royal Brothers Clone", description: "A UI clone of Royal Brothers' bike rental website with responsive design.", img: royalBrothersImg },
  { title: "Amma’s Pastry Clone", description: "A sweet and responsive UI clone of Amma’s Pastry website for bakery lovers.", img: ammasPasteryImg },
  { title: "Kraftopia Website", description: "A colorful, creative website built for Kraftopia with handmade design vibes.", img: kraftopiaImg },
  { title: "Contest Voting Platform", description: "A platform for hosting and voting on creative contests, integrated with Firebase.", img: contestImg },
  { title: "Currency Converter", description: "A sleek currency converter app for INR, USD, and AED with real-time exchange rates.", img: moneyConvertImg }
];

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="projects">
      <div className="container-fluid h-100">
        <div className="content d-flex flex-md-row flex-column">
          {/* Left: Image */}
          <div className="project-img-col h-100 d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
            <img
              src={projectData[hoveredIdx].img}
              alt={projectData[hoveredIdx].title}
              className="h-100 rounded cursor-pointer"
              onClick={() => navigate(`/project/${slugify(projectData[hoveredIdx].title)}`)}
            />
          </div>

          {/* Right: List */}
          <div className="project-list-col mx-3 h-100" style={{ flex: 1 }}>
            <div className="d-flex align-items-center justify-content-between">
              <h1 className="size32 fw-bold">Projects</h1>
              <span className="size55">{projectData.length}</span>
            </div>

            <ul className="project-list mt-3">
              {projectData.map((p, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => navigate(`/projects/${slugify(p.title)}`)}
                  className={`size18 cursor-pointer ${hoveredIdx === idx ? "hovered fw-bolder" : "fw-normal"}`}
                  style={{
                    color: hoveredIdx === idx ? "var(--accent)" : "var(--text)",
                    background: hoveredIdx === idx ? "#000" : "transparent",
                    padding: 0,
                  }}
                >
                  <div className="size18 position-relative d-flex justify-content-between align-items-center w-100 p-3">
                    <p className="size18 p-0 m-0">{p.title}</p>
                    <FiArrowUpRight />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}
