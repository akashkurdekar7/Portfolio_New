import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiGithub, FiExternalLink, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import projectData from "./ProjectData";
import Button from "./Button";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = projectData.findIndex((p) => slugify(p.title) === slug);
  const project = projectData[projectIndex];
  const nextProject = projectData[(projectIndex + 1) % projectData.length];
  const prevProject = projectData[
    (projectIndex - 1 + projectData.length) % projectData.length
  ];

  if (!project) {
    return (
      <section className="case-study">
        <div className="container d-flex flex-column justify-content-center align-items-center h-100 ">
          <h2 className="size32 mb-3 project-not-found">Project Not Found</h2>
          <Button onClick={() => navigate(-1)} className="back-btn">
            <FiArrowLeft className="size18 back-icon" /> Go Back
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="case-study">
      <div className="container h-100">
        <div className="content">
          <div className="img-con">
            <img src={project.img} alt={project.title} className="w-100" />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="d-flex justify-content-center align-items-start flex-column">
                  <h1 className="title size32">{project.title}</h1>
                  <h4 className="role size18">{project.role}</h4>
                  <p className="date size16">{project.date}</p>
                  <div className="d-flex justify-content-center align-content-center gap-2">
                    {project.githubLink && (
                      <Button
                        className="gitlink"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub />
                        git link
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button
                        className="demo"
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="h-100 d-flex justify-content-between align-items-start flex-column">
                  <p className="size18 description">{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center gap-4">
                    <Button
                      className="prev-btn"
                      onClick={() => navigate(`/projects/${slugify(prevProject.title)}`)}
                    >
                      <FiChevronLeft className="size18 prev-left-icon" />
                      Previous
                      <FiChevronRight className="size18 prev-right-icon" />
                    </Button>
                    <Button
                      className="next-btn"
                      onClick={() => navigate(`/projects/${slugify(nextProject.title)}`)}
                    >
                      <FiChevronRight className="size18 next-left-icon" />
                      Next
                      <FiChevronLeft className="size18 next-right-icon" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudy;