import "./WorkCardStyles.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WordCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="Work-container">
    <h1 className="projects-heading">Projects</h1>
    <div className="project-container">
        {WordCardData.map((val,ind)=>{
            return (
                <WorkCard 
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

export default Work