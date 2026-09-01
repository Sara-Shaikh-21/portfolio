import React, { useState } from "react";
import "./MSkills.css";

import html from "../../assets/html.png";
import php from "../../assets/php.png";
import react from "../../assets/reactjs.png";
import mysql from "../../assets/mysql.png";
import mongo from "../../assets/mongo.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import dialogflow from "../../assets/d.png";
import elk from "../../assets/elk.png";
import cpp from "../../assets/cpp.png";
import c from "../../assets/c.png";
import git from "../../assets/git.png";
import vscode from "../../assets/vs.png";
import docker from "../../assets/docker.png";
import node from "../../assets/node.png";

import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaRobot,
} from "react-icons/fa";

const skillCategories = [
  {
    id: "languages",
    icon: <FaCode />,
    title: "Languages",
    command: "languages.list()",
    skills: [
      { name: "C", image: c, level: "Intermediate", percentage: 70 },
      { name: "C++", image: cpp, level: "Intermediate", percentage: 72 },
      { name: "Java", image: java, level: "Intermediate", percentage: 75 },
      { name: "Python", image: python, level: "Advanced", percentage: 82 },
    ],
  },
  {
    id: "frontend",
    icon: <FaCode />,
    title: "Frontend",
    command: "frontend.stack()",
    skills: [
      { name: "HTML", image: html, level: "Advanced", percentage: 90 },
      { name: "React.js", image: react, level: "Advanced", percentage: 88 },
    ],
  },
  {
    id: "backend",
    icon: <FaServer />,
    title: "Backend",
    command: "backend.stack()",
    skills: [
      { name: "Node.js", image: node, level: "Advanced", percentage: 85 },
      { name: "PHP", image: php, level: "Intermediate", percentage: 72 },
    ],
  },
  {
    id: "database",
    icon: <FaDatabase />,
    title: "Databases",
    command: "database.stack()",
    skills: [
      { name: "MySQL", image: mysql, level: "Advanced", percentage: 82 },
      { name: "MongoDB", image: mongo, level: "Advanced", percentage: 80 },
      { name: "ELK Stack", image: elk, level: "Intermediate", percentage: 65 },
    ],
  },
  {
    id: "ai",
    icon: <FaRobot />,
    title: "AI & Platforms",
    command: "ai.integrations()",
    skills: [
      { name: "Dialogflow", image: dialogflow, level: "Intermediate", percentage: 70 },
    ],
  },
  {
    id: "tools",
    icon: <FaTools />,
    title: "Developer Tools",
    command: "tools.installed()",
    skills: [
      { name: "Git / GitHub", image: git, level: "Advanced", percentage: 88 },
      { name: "VS Code", image: vscode, level: "Advanced", percentage: 92 },
      { name: "Docker", image: docker, level: "Intermediate", percentage: 70 },
    ],
  },
];

const MSkills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const activeData = skillCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section className="skills-main" id="skills">

      {/* Header */}
      <div className="skills-header">

        <div className="section-terminal">
          <span className="terminal-prompt">$</span>
          <span>cat skills.json</span>
          <span className="terminal-cursor"></span>
        </div>

        <h2>
          Technical <span>Skills</span>
        </h2>

        <p>
          Technologies, tools and platforms I use to build,
          deploy and experiment with software.
        </p>

      </div>

      {/* Main dashboard */}
      <div className="skills-dashboard">

        {/* Sidebar */}
        <aside className="skills-sidebar">

          <div className="sidebar-title">
            <span className="status-dot"></span>
            SKILL_CATEGORIES
          </div>

          <div className="category-list">

            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={
                  activeCategory === category.id
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedSkill(null);
                }}
              >
                <span className="category-icon">
                  {category.icon}
                </span>

                <span>{category.title}</span>

                <span className="category-arrow">
                  →
                </span>
              </button>
            ))}

          </div>

        </aside>

        {/* Content */}
        <div className="skills-content">

          <div className="skills-terminal-header">

            <div className="terminal-controls">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>

            <span className="terminal-file">
              ~/portfolio/skills/{activeCategory}.json
            </span>

          </div>

          <div className="skills-terminal-body">

            <div className="command-line">
              <span className="prompt">sara@portfolio:~$</span>
              <span>{activeData.command}</span>
            </div>

            <div className="code-output">

              <div className="code-line">
                <span className="line-number">01</span>
                <span className="code-bracket">{"{"}</span>
              </div>

              <div className="code-line">
                <span className="line-number">02</span>
                <span className="code-key">"category"</span>
                <span>:</span>
                <span className="code-string">
                  "{activeData.title}"
                </span>
                <span>,</span>
              </div>

              <div className="code-line">
                <span className="line-number">03</span>
                <span className="code-key">"technologies"</span>
                <span>:</span>
              </div>

            </div>

            {/* Skill cards */}
            <div className="skills-grid">

              {activeData.skills.map((skill, index) => (

                <button
                  className={
                    selectedSkill === skill.name
                      ? "skill-card selected"
                      : "skill-card"
                  }
                  key={skill.name}
                  onClick={() =>
                    setSelectedSkill(
                      selectedSkill === skill.name
                        ? null
                        : skill.name
                    )
                  }
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >

                  <div className="skill-card-top">

                    <div className="skill-icon-wrapper">
                      <img
                        src={skill.image}
                        alt={skill.name}
                      />
                    </div>

                    <div className="skill-info">

                      <h3>{skill.name}</h3>

                      <span>{skill.level}</span>

                    </div>

                    <span className="skill-arrow">
                      ↗
                    </span>

                  </div>

                  <div className="skill-progress">

                    <div className="progress-header">
                      <span>proficiency</span>
                      <span>{skill.percentage}%</span>
                    </div>

                    <div className="progress-track">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${skill.percentage}%`,
                        }}
                      />

                    </div>

                  </div>

                </button>

              ))}

            </div>

            <div className="code-line closing-bracket">
              <span className="line-number">04</span>
              <span className="code-bracket">{"}"}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom stats */}
      <div className="skills-stats">

        <div className="stat">
          <strong>15+</strong>
          <span>Technologies</span>
        </div>

        <div className="stat">
          <strong>6</strong>
          <span>Skill Categories</span>
        </div>

        <div className="stat">
          <strong>∞</strong>
          <span>Learning Mode</span>
        </div>

        <div className="stat">
          <strong>24/7</strong>
          <span>Curiosity</span>
        </div>

      </div>

      {/* Profiles */}
      <div className="skills-footer">

        <span>
          // Want to see what I'm currently learning?
        </span>

        <div className="profile-links">

          <a
            href="https://github.com/Sara-Shaikh-21/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sara-shaikh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default MSkills;