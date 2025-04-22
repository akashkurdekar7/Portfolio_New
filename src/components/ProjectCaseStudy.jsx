import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";
import projectData from "./ProjectData";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find current project and index
  const projectIndex = projectData.findIndex((p) => slugify(p.title) === slug);
  const project = projectData[projectIndex];
  const nextProject = projectData[(projectIndex + 1) % projectData.length];

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

  // Example: You could add project.awards, project.category, project.year, project.brandImg, project.fonts, etc. to your data structure!
  // For now, we’ll use what you have and mock some fields for demo.

  // Mocked fields for demonstration:
  const category = project.category || "Web Development";
  const brandingImg = project.brandImg || project.img;
  const year = project.date ? project.date.split("-")[0] : "2023";
  const awards = project.awards || [
    "1× Awwwards (Honors)",
    "1× CSS Design Awards (Site of the day)",
  ];
  const fonts = project.fonts || ["Inter", "Roboto"];
  const brandGuidelines = project.brandGuidelinesImg || project.img;

  return (
    <section className="case-study-hero-page container-fluid px-0 full-height-section">
      {/* Hero Image */}
      <div className="case-study-hero-img w-100">
        <img
          src={project.img}
          alt={project.title}
          className="w-100"
          style={{
            maxHeight: "420px",
            objectFit: "cover",
            width: "100%",
            borderBottom: "6px solid var(--accent, #6c63ff)",
          }}
        />
      </div>

      {/* Content Split */}
      <div className="container py-5">
        <div className="row g-5 align-items-start">
          {/* Left: Meta */}
          <div className="col-md-5 col-lg-4">
            <h1 className="fw-bold mb-2" style={{ fontSize: "2.7rem", color: "var(--accent, #6c63ff)" }}>
              {project.title}
            </h1>
            <div className="mb-3">
              <span className="badge bg-dark me-2">{category}</span>
              <span className="badge bg-secondary me-2">Year: {year}</span>
            </div>
            <div className="mb-3">
              <div><b>Role:</b> {project.role}</div>
            </div>
            {awards && (
              <div className="mb-3">
                <div className="fw-semibold mb-1" style={{ color: "#f5b942" }}>Awards</div>
                <ul style={{ paddingLeft: "1.2em" }}>
                  {awards.map((a, i) => (
                    <li key={i} style={{ fontSize: "1.05em" }}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mb-3">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent me-2 mb-2">
                  <FiExternalLink /> Live Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark mb-2">
                  <FiGithub /> GitHub
                </a>
              )}
            </div>
          </div>
          {/* Right: Overview */}
          <div className="col-md-7 col-lg-8">
            <div className="mb-4">
              <div className="fs-5 mb-3 text-muted">{project.description}</div>
              <div className="fs-6">{project.overview}</div>
            </div>
          </div>
        </div>

        {/* Brand Guidelines Section */}
        <div className="row mt-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3" style={{ color: "var(--accent, #6c63ff)" }}>Brand Guidelines</h2>
            <div className="mb-3">A quick look at the branding and visual system used for this project.</div>
            {/* You can add more brand info here if available */}
          </div>
          <div className="col-md-6 text-center">
            <img
              src={brandGuidelines}
              alt="Brand Guidelines"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "220px", objectFit: "contain", border: "2px solid #eee" }}
            />
          </div>
        </div>

        {/* Table of Content / Tech Stack / Fonts */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="fw-bold mb-3" style={{ color: "var(--accent, #6c63ff)" }}>Project Stack & Details</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="fw-semibold mb-2">Technologies Used</div>
                <ul>
                  {project.technologies && project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 mb-3">
                <div className="fw-semibold mb-2">Fonts</div>
                <ul>
                  {fonts.map((font, idx) => (
                    <li key={idx}>{font}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Challenges */}
        <div className="row mt-4 g-4">
          <div className="col-md-6">
            {project.features && project.features.length > 0 && (
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3 text-success">Key Features</h4>
                  <ul className="mb-0">
                    {project.features.map((f, idx) => (
                      <li key={idx} className="mb-2">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-6">
            {project.challenges && project.challenges.length > 0 && (
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-3 text-danger">Challenges</h4>
                  <ul className="mb-0">
                    {project.challenges.map((ch, idx) => (
                      <li key={idx} className="mb-2">{ch}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Project Navigation */}
        <div className="row mt-5">
          <div className="col text-end">
            <button
              className="btn btn-outline-accent"
              onClick={() => navigate(`/projects/${slugify(nextProject.title)}`)}
              style={{
                borderColor: "var(--accent, #6c63ff)",
                color: "var(--accent, #6c63ff)",
                fontWeight: 600,
                fontSize: "1.1rem"
              }}
            >
              Next Project <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .btn-accent {
          background: var(--accent, #6c63ff);
          color: #fff;
        }
        .btn-accent:hover, .btn-outline-accent:hover {
          background: #4e47d6;
          color: #fff;
        }
        .btn-outline-accent {
          border: 2px solid var(--accent, #6c63ff);
          color: var(--accent, #6c63ff);
          background: transparent;
        }
        .btn-outline-accent:focus {
          box-shadow: 0 0 0 0.2rem rgba(108,99,255,.2);
        }
        .case-study-hero-img img {
          border-radius: 0 0 1.2rem 1.2rem;
        }
        .full-height-section {
          min-height: 100vh;
          overflow-y:auto !important;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: #fafaff;
        }
        .card-title { font-weight: 600; }
        ul { padding-left: 1.2em; }
        li { font-size: 1.08em; }
      `}</style>
    </section>
  );
};

export default ProjectCaseStudy;