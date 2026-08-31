
import "./experience.css";
import React, { useState, useEffect } from "react";
import ExperienceData from "./experienceData";
import {
    FaArrowUpRightFromSquare,
    FaChevronDown,
    FaBriefcase,
    FaCode,
} from "react-icons/fa6";

const Experience = () => {
    const [expanded, setExpanded] = useState({});
    const [activeExperience, setActiveExperience] = useState(0);

    const toggleReadMore = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    /* Detect which experience is currently visible */
    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll(".timeline-item");

            let closestIndex = 0;
            let closestDistance = Infinity;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();

                const distance = Math.abs(
                    rect.top - window.innerHeight * 0.35
                );

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveExperience(closestIndex);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="experience-section">

            {/* HEADER */}

            <div className="experience-header">

                <div className="experience-icon">
                    <FaBriefcase />
                </div>

                <span className="section-label">
                    // career.timeline
                </span>

                <h1 className="experience-heading">
                    Professional Experience
                </h1>

                <p className="experience-subtitle">
                    A journey through my professional experience,
                    technical growth, and the products I've helped build.
                </p>

                <div className="experience-stats">

                    <div className="stat">
                        <strong>{ExperienceData.length}</strong>
                        <span>Experiences</span>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat">
                        <strong>
                            {ExperienceData.reduce(
                                (total, exp) =>
                                    total + (exp.tech?.length || 0),
                                0
                            )}
                            +
                        </strong>
                        <span>Technologies</span>
                    </div>

                    <div className="stat-divider"></div>

                    <div className="stat">
                        <strong>5+</strong>
                        <span>Years Journey</span>
                    </div>

                </div>

            </div>


            {/* TIMELINE */}

            <div className="timeline">

                <div className="timeline-progress"></div>

                {ExperienceData.map((exp, index) => {

                    const isExpanded = expanded[index];

                    const shortText =
                        exp.text.length > 220
                            ? exp.text.substring(0, 220) + "..."
                            : exp.text;

                    const isCurrent =
                        exp.duration.toLowerCase().includes("present");

                    const isActive =
                        activeExperience === index;

                    return (
                        <article
                            className={`timeline-item 
                                ${isActive ? "active-item" : ""}
                                ${isCurrent ? "current-role" : ""}
                            `}
                            key={index}
                        >

                            {/* TIMELINE NODE */}

                            <div className="timeline-node-container">

                                <div className="timeline-node">

                                    {isCurrent ? (
                                        <span className="live-dot"></span>
                                    ) : (
                                        <span>{index + 1}</span>
                                    )}

                                </div>

                            </div>


                            {/* EXPERIENCE CARD */}

                            <div className="experience-card">

                                {/* Current badge */}

                                {isCurrent && (
                                    <div className="current-badge">
                                        <span></span>
                                        Currently Working
                                    </div>
                                )}


                                {/* Company Header */}

                                <div className="company-header">

                                    <div className="company-logo-wrapper">
                                        <img
                                            src={exp.imgsrc}
                                            alt={`${exp.title} logo`}
                                        />
                                    </div>

                                    <div className="company-info">

                                        <div className="title-row">

                                            <h2>{exp.title}</h2>

                                            <a
                                                href={exp.view}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="company-link"
                                                aria-label={`Visit ${exp.title}`}
                                                title="Visit company"
                                            >
                                                <FaArrowUpRightFromSquare />
                                            </a>

                                        </div>

                                        <p className="role">
                                            {exp.role}
                                        </p>

                                        <p className="duration">
                                            {exp.duration}
                                        </p>

                                    </div>

                                </div>


                                {/* Description */}

                                <div className="description-container">

                                    <p className="description">
                                        {isExpanded
                                            ? exp.text
                                            : shortText}
                                    </p>

                                    {exp.text.length > 220 && (

                                        <button
                                            className={`read-more-btn ${isExpanded
                                                    ? "expanded"
                                                    : ""
                                                }`}
                                            onClick={() =>
                                                toggleReadMore(index)
                                            }
                                        >
                                            {isExpanded
                                                ? "Show Less"
                                                : "Read More"}

                                            <FaChevronDown />

                                        </button>

                                    )}

                                </div>


                                {/* Tech Stack */}

                                <div className="tech-section">

                                    <div className="tech-heading">
                                        <FaCode />
                                        <span>Technologies</span>
                                    </div>

                                    <div className="tech-stack">

                                        {exp.tech?.map((tech, idx) => (

                                            <span
                                                key={idx}
                                                className="tech-tag"
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                </div>


                                {/* Footer */}

                                <div className="experience-card-footer">

                                    <span>
                                        Experience #{String(index + 1).padStart(2, "0")}
                                    </span>

                                    <a
                                        href={exp.view}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Company
                                        <FaArrowUpRightFromSquare />
                                    </a>

                                </div>

                            </div>

                        </article>
                    );
                })}

            </div>

        </section>
    );
};

export default Experience;

