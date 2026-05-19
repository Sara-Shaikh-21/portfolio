import "./experience.css";
import React, { useState } from "react";
import ExperienceData from "./experienceData";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Experience = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="experience-section">
            <h1 className="experience-heading">Professional Experience</h1>

            <div className="timeline">
                {ExperienceData.map((exp, index) => {
                    const isExpanded = expanded[index];

                    const shortText =
                        exp.text.length > 220
                            ? exp.text.substring(0, 220) + "..."
                            : exp.text;

                    return (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>

                            <div className="timeline-content">
                                <div className="company-header">
                                    <img src={exp.imgsrc} alt={exp.title} />

                                    <div className="company-info">
                                        <div className="title-row">
                                            <h2>{exp.title}</h2>

                                            <a
                                                href={exp.view}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="company-link"
                                            >
                                                <FaArrowUpRightFromSquare />
                                            </a>
                                        </div>

                                        <p className="role">{exp.role}</p>

                                        <p className="duration">{exp.duration}</p>
                                    </div>
                                </div>

                                <p className="description">
                                    {isExpanded ? exp.text : shortText}
                                </p>

                                {exp.text.length > 220 && (
                                    <button
                                        className="read-more-btn"
                                        onClick={() => toggleReadMore(index)}
                                    >
                                        {isExpanded ? "Show Less" : "Read More"}
                                    </button>
                                )}

                                <div className="tech-stack">
                                    {exp.tech?.map((tech, idx) => (
                                        <span key={idx}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;