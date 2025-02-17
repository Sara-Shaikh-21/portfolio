import "./word.css";
import React from 'react';
import WordCard from "./wordCard";
import WordCardData from "./wordCardData";

const Word = () => {
  return (
    <div className="Work-container">
    <h1 className="project-heading">Internships</h1>
    <div className="project-container">
        {WordCardData.map((val,ind)=>{
            return (
                <WordCard 
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

export default Word