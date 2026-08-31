
// src/components/Freelancing/FreelancingContent.js

import React from "react";
import "./FreelancingContent.css";

import {
    FaCode,
    FaLaptopCode,
    FaMobileAlt,
    FaRobot,
    FaGlobe,
    FaArrowUpRightFromSquare,
    FaGithub,
    FaEnvelope,
    FaCheck,
} from "react-icons/fa6";

const FreelancingContent = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Web Development",
            description:
                "Modern, responsive websites and web applications built with React, Node.js, TypeScript and modern web technologies.",
            tags: ["React", "Node.js", "TypeScript"],
        },
        {
            icon: <FaCode />,
            title: "Full Stack Development",
            description:
                "End-to-end applications including frontend, backend, REST APIs, databases, authentication and deployment.",
            tags: ["MERN", "REST APIs", "MongoDB"],
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Development",
            description:
                "Responsive mobile interfaces and application screens with clean UI, reusable components and smooth navigation.",
            tags: ["Flutter", "Dart", "Responsive UI"],
        },
        {
            icon: <FaRobot />,
            title: "AI Integration",
            description:
                "AI-powered features including chatbots, intelligent search, automation, recommendations and API integrations.",
            tags: ["AI", "OpenAI", "APIs"],
        },
    ];

    const technologies = [
        "React.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Flutter",
        "Dart",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Git",
        "Docker",
    ];

    return (
        <section className="freelancing-section">

            {/* HERO */}

            <div className="freelancing-hero">

                <div className="freelancing-badge">
                    <span className="status-dot"></span>
                    Available for freelance projects
                </div>

                <span className="freelancing-label">
                    // freelance.services
                </span>

                <h1>
                    Let's Build Something
                    <span> Great Together.</span>
                </h1>

                <p className="hero-description">
                    I help businesses, startups and individuals turn ideas
                    into reliable, scalable and user-friendly digital
                    products.
                </p>

                <div className="hero-buttons">

                    <a
                        href="mailto:sarassk21@gmail.com"
                        className="freelance-btn primary"
                    >
                        <FaEnvelope />
                        Start a Project
                    </a>

                    <a
                        href="https://github.com/Sara-Shaikh-21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="freelance-btn secondary"
                    >
                        <FaGithub />
                        View My Work
                    </a>

                </div>

            </div>


            {/* SERVICES */}

            <div className="freelance-container">

                <div className="section-heading">

                    <span>// what.i.do</span>

                    <h2>
                        Services I Offer
                    </h2>

                    <p>
                        From an idea to a production-ready application,
                        I can help you build and improve your digital product.
                    </p>

                </div>


                <div className="services-grid">

                    {services.map((service, index) => (

                        <div
                            className="service-card"
                            key={index}
                        >

                            <div className="service-number">
                                0{index + 1}
                            </div>

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>
                                {service.title}
                            </h3>

                            <p>
                                {service.description}
                            </p>

                            <div className="service-tags">

                                {service.tags.map((tag, idx) => (
                                    <span key={idx}>
                                        {tag}
                                    </span>
                                ))}

                            </div>

                        </div>

                    ))}

                </div>


                {/* PROCESS */}

                <div className="process-section">

                    <div className="section-heading">

                        <span>// how.it.works</span>

                        <h2>
                            Simple & Transparent
                        </h2>

                    </div>

                    <div className="process-grid">

                        <div className="process-step">
                            <strong>01</strong>
                            <h3>Discuss</h3>
                            <p>
                                We discuss your idea, requirements,
                                goals and expected outcome.
                            </p>
                        </div>

                        <div className="process-step">
                            <strong>02</strong>
                            <h3>Plan</h3>
                            <p>
                                I break the project into clear milestones
                                and choose the right technology.
                            </p>
                        </div>

                        <div className="process-step">
                            <strong>03</strong>
                            <h3>Build</h3>
                            <p>
                                Development happens iteratively with
                                regular progress updates.
                            </p>
                        </div>

                        <div className="process-step">
                            <strong>04</strong>
                            <h3>Deliver</h3>
                            <p>
                                Final testing, deployment and handover
                                of the completed project.
                            </p>
                        </div>

                    </div>

                </div>


                {/* TECHNOLOGIES */}

                <div className="technology-section">

                    <div className="section-heading">

                        <span>// tech.stack</span>

                        <h2>
                            Technologies I Work With
                        </h2>

                    </div>

                    <div className="technology-cloud">

                        {technologies.map((tech, index) => (

                            <span key={index}>
                                {tech}
                            </span>

                        ))}

                    </div>

                </div>


                {/* CTA */}

                <div className="freelance-cta">

                    <div>

                        <span>// have.an.idea?</span>

                        <h2>
                            Let's turn your idea into reality.
                        </h2>

                        <p>
                            Have a project in mind? I'd love to hear
                            about it and discuss how I can help.
                        </p>

                    </div>

                    <a
                        href="mailto:sarassk21@gmail.com"
                        className="cta-button"
                    >
                        Get In Touch
                        <FaArrowUpRightFromSquare />
                    </a>

                </div>

            </div>

        </section>
    );
};

export default FreelancingContent;
