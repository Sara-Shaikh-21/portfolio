import "./projects.css";
import React, { useState } from "react";
import ProjectsData from "./projectsData";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="projects-section">
      <h1 className="projects-heading">Featured Projects</h1>

      <div className="projects-grid">
        {ProjectsData.map((project, index) => {
          const isExpanded = expanded[index];

          const shortText =
            project.text.length > 180
              ? project.text.substring(0, 180) + "..."
              : project.text;

          return (
            <div className="project-card" key={index}>
              <img src={project.imgsrc} alt={`${project.title} preview`} />

              <div className="project-content">
                <div className="project-title-row">
                  <h2>{project.title}</h2>

                  <div className="project-links">
                    <a
                      href={project.view}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaArrowUpRightFromSquare />
                    </a>

                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <p className="project-description">
                  {isExpanded ? project.text : shortText}
                </p>

                {
                  project.text.length > 180 && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleReadMore(index)}
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )
                }

                <div className="project-tech-wrapper">
                  <span className="tech-label">stack:</span>
                  <div className="project-tech">
                    {project.tech?.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div >
    </div >
  );
};

export default Projects;