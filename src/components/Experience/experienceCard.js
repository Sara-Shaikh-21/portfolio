import "./experience.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const ExperienceCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                <NavLink to="#" className="btn" onClick={() => window.open(props.view, "_blank", "noopener,noreferrer")}>Certificate</NavLink>
                <NavLink to="#" className="btn" onClick={() => window.open(props.view, "_blank", "noopener,noreferrer")}>Link</NavLink>
                </div>
            </div>
        </div>
  )
}

export default ExperienceCard