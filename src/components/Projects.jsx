import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProjectData from "./ProjectData";

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [imgFade, setImgFade] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setImgFade(true);
    const timeout = setTimeout(() => setImgFade(false), 200); 
    return () => clearTimeout(timeout);
  }, [hoveredIdx]);


  return (
    <section className="projects">
      <div className="container-fluid h-100">
        <div className="content flex-md-row flex-column">
          {/* Left: Image */}
          <div className="project-img-col d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
            <img
              src={ProjectData[hoveredIdx].img}
              alt={ProjectData[hoveredIdx].title}
              className={`h-100 cursor-pointer project-img${imgFade ? " fade-out" : ""}`}
              onClick={() => navigate(`/projects/${slugify(ProjectData[hoveredIdx].title)}`)}
            />
          </div>

          {/* Right: List */}
          <div className="project-list-col ms-md-3 h-100 w-100" style={{ flex: .6 }}>
            <div className="d-flex align-items-center justify-content-between">
              <h1 className="size32 fw-bold">Projects</h1>
              <span className="size55 number">{ProjectData.length}</span>
            </div>

            <ul className="project-list mt-3 p-0">
              {ProjectData.map((p, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => navigate(`/projects/${slugify(p.title)}`)}
                  className={`size18 cursor-pointer project-list-item ${hoveredIdx === idx ? "hovered fw-bolder" : "fw-normal"}`}
                  style={{
                    color: hoveredIdx === idx ? "var(--accent)" : "var(--text)",
                    padding: 0,
                  }}
                >
                  <div className="size18 position-relative d-flex justify-content-between align-items-center w-100 p-3">
                    <span
                      className={`project-title-inner${hoveredIdx === idx ? " hovered" : ""}`}
                    >
                      {/* Show arrow only when hovered */}
                      {hoveredIdx === idx && (
                        <FiArrowRight className="me-2 project-arrow" />
                      )}
                      {p.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        
      `}</style>
    </section>
  );
};

export default Projects;

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}