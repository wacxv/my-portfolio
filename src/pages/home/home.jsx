import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div id="profile-outer">
        <div id="profile-inner">
          {/* Hero Section */}
          <div id="hero-container">
            <h1 id="hero-greeting">Hi, I'm wacxvizc</h1>
            <h2 id="hero-title">a Full-Stack Developer</h2>
            <p id="hero-description">
              I'm a full stack developer passionate about creating clean,
              functional, and user-centered web applications. Currently
              focused on React, Node.js, and modern design systems.
            </p>
            <Link to="/contact" id="cta-button">Get in Touch</Link>
          </div>

          {/* Divider */}
          <div id="section-divider"></div>

          {/* Recent Projects Section */}
          <div id="projects-section-container">
            <h2 id="section-title">Recent Projects</h2>
            <div id="projects-grid">
              <div className="project-card" tabIndex="0"></div>
              <div className="project-card" tabIndex="0"></div>
              <div className="project-card" tabIndex="0"></div>
            </div>
            <Link to="/project" id="view-all-link">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;