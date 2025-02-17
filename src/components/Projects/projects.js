import "./projects.css";
import React from 'react';
import ProjectsCard from "./projectsCard";
import ProjectsData from "./projectsData";

const Projects = () => {
  return (
    <div className="Work-container">
    <h1 className="projects-heading">Projects</h1>
    <div className="project-container">
        {
          ProjectsData.map((val,ind)=>{
            return (
                <ProjectsCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                />
            )
        })}
    </div>
    </div>
  )
}

export default Projects