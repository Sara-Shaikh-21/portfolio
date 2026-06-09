import React from "react";
import "./EducationData.css";

const EducationData = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">My Education Journey</h1>

      <div className="education-card">
        <div className="edu-icon">🎓</div>

        <div className="edu-content">
          <h2>Bachelor's in Computer Engineering</h2>
          <h3>Pune Institute Of Computer Technology</h3>
          <p>
            Completed Computer Engineering with focus on Full Stack Development,
            Software Engineering, and Problem Solving.
          </p>
        </div>
      </div>

      <div className="education-card">
        <div className="edu-icon">💻</div>

        <div className="edu-content">
          <h2>Diploma in Computer Engineering</h2>
          <h3>Cusrow Wadia Institute of Technology</h3>
          <p>
            Built strong fundamentals in core programming, databases, networking,
            and software development.
          </p>
        </div>
      </div>

      <div className="education-card">
        <div className="edu-icon">📚</div>

        <div className="edu-content">
          <h2>SSC</h2>
          <h3>Sardar Dastur Girls' High School</h3>
          <p>
            Completed schooling with emphasis on academics and extracurricular
            activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationData;