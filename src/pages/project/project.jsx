import React, { useState } from "react";
import "./project.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllProjects, getProjectsByCategory } from '../../data/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const project = getProjectsByCategory(selectedCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const projectCardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div id="project-page-outer">
      <div id="project-page-inner">
        
        {/* Page Header */}
        <motion.div 
          className="project-header"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="project-page-title" variants={fadeInUp}>
            Projects
          </motion.h1>
          <motion.p className="project-page-subtitle" variants={fadeInUp}>
            A collection of project I've built, showcasing my skills in full-stack development
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="project-grid-container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {project.map((project) => (
            <motion.div
              key={project.id}
              className="project-grid-card"
              variants={projectCardVariant}
            >
              <Link to={`/project/${project.id}`} className="project-card-link">
                <div className="project-card-image">
                  <img src={project.thumbnail} alt={project.title} />
                  <div className="project-card-overlay">
                    <span className="view-project-text">View Project →</span>
                  </div>
                </div>
                
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.shortDescription}</p>
                  
                  <div className="project-card-tech">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag more">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  <div className="project-card-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="project-icon-link"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        className="project-icon-link"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};
{/* temporary to, and fix the css ui ung hardcoded magiging call from backend dapat*/}
export default Project;