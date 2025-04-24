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
 

   const category = project.category || "Web Development";
   const brandingImg = project.brandImg || project.img;
   const year = project.date ? project.date.split("-")[0] : "2023";
   const awards = project.awards || [
     "1× Awwwards (Honors)",
     "1× CSS Design Awards (Site of the day)",
   ];
   const fonts = project.fonts || ["Inter", "Roboto"];
   const brandGuidelines = project.brandGuidelinesImg || project.img;

   
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
    <section className="case-study-page container-fluid px-0 full-height-section">
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
    </section>
  );
}; 

export default ProjectCaseStudy;