import "./experience.css";
import React from 'react';
import ExperienceCard from "./experienceCard";
import ExperienceData from "./experienceData";

const Experience = () => {
  return (
    <div className="Work-container">
    <h1 className="project-heading">Work History</h1>
    <div className="project-container">
        {ExperienceData.map((val,ind)=>{
            return (
                <ExperienceCard 
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

export default Experience