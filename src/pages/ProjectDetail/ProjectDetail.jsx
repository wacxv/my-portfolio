import React, { useState } from "react";
import "./projectDetail.css";
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../../data/projectsData';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div id="project-detail-outer">
      <div id="project-detail-inner">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects" className="back-button">
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          className="project-detail-header"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="project-detail-title" variants={fadeIn}>
            {project.title}
          </motion.h1>
          
          <motion.div className="project-meta" variants={fadeIn}>
            <span className="project-date">{project.date}</span>
            <span className="project-category">{project.category}</span>
          </motion.div>

          <motion.div className="project-links-header" variants={fadeIn}>
            {project.github && (
              <a 
                href={project.github} 
                className="project-link-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                className="project-link-btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Image Slider */}
        <motion.div 
          className="project-slider"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="slider-container">
            <button 
              className="slider-btn prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <div className="slider-image-container">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="slider-image"
              />
            </div>

            <button 
              className="slider-btn next" 
              onClick={nextImage}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="image-counter">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div 
          className="project-content-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Description */}
          <motion.div className="project-section" variants={fadeIn}>
            <h2 className="section-title">About</h2>
            <p className="project-full-description">{project.fullDescription}</p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div className="project-section" variants={fadeIn}>
            <h2 className="section-title">Technologies Used</h2>
            <div className="tech-stack-grid">
              {project.tech.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-icon">{tech.charAt(0)}</span>
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectDetail;