import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCalendar, FiCheckCircle, FiAlertCircle, FiUser } from "react-icons/fi";
import projectData from "./ProjectData";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const Badge = ({ children, color = "primary" }) => (
  <span className={`badge bg-${color} me-2 mb-2`} style={{ fontSize: "1rem", letterSpacing: "0.03em" }}>
    {children}
  </span>
);

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the project by slug
  const project = projectData.find(
    (p) => slugify(p.title) === slug
  );

  if (!project) {
    return (
      <div className="container mt-5">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
          <FiArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="project-case-study container py-5">
      <button onClick={() => navigate(-1)} className="btn btn-outline-dark mb-4">
        <FiArrowLeft /> Back to Projects
      </button>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={project.img}
            alt={project.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover", border: "4px solid var(--accent, #6c63ff)" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold mb-2" style={{ fontSize: "2.5rem", color: "var(--accent, #6c63ff)" }}>{project.title}</h1>
          <div className="mb-3">
            <Badge color="info"><FiCalendar className="mb-1" /> {project.date}</Badge>
            <Badge color="secondary"><FiUser className="mb-1" /> {project.role}</Badge>
          </div>
          <p className="lead mb-3">{project.description}</p>
          <div className="mb-3">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent me-2 mb-2" style={{ background: "var(--accent, #6c63ff)", color: "#fff" }}>
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark mb-2">
                <FiGithub /> GitHub
              </a>
            )}
          </div>
          <div>
            {project.technologies && project.technologies.map((tech, idx) => (
              <Badge key={idx} color="primary">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-7">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3" style={{ color: "var(--accent, #6c63ff)" }}>Overview</h3>
              <p className="card-text">{project.overview}</p>
            </div>
          </div>
          {project.challenges && project.challenges.length > 0 && (
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3 text-danger"><FiAlertCircle /> Challenges</h4>
                <ul className="mb-0">
                  {project.challenges.map((ch, idx) => (
                    <li key={idx} className="mb-2">{ch}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-5">
          {project.features && project.features.length > 0 && (
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3 text-success"><FiCheckCircle /> Key Features</h4>
                <ul className="mb-0">
                  {project.features.map((f, idx) => (
                    <li key={idx} className="mb-2">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Optional: Add a gallery or more sections here */}

      <style>{`
        .btn-accent {
          background: var(--accent, #6c63ff);
          color: #fff;
        }
        .btn-accent:hover {
          background: #4e47d6;
          color: #fff;
        }
        .badge.bg-primary { background: var(--accent, #6c63ff) !important; }
        .badge.bg-info { background: #17a2b8 !important; }
        .badge.bg-secondary { background: #6c757d !important; }
        .card-title { font-weight: 600; }
        .project-case-study ul { padding-left: 1.2em; }
        .project-case-study li { font-size: 1.08em; }
      `}</style>
    </section>
  );
};

export default ProjectCaseStudy;