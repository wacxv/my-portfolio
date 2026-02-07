import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import TaskEval1 from '../../assets/img-project-temp/TaskEval/TaskEval1.png';
import HavenBloom2 from '../../assets/img-project-temp/HavenBloom/HavenBloom2.png';
import AWSCalcu1 from '../../assets/img-project-temp/AWSCalcu/AWSCalcu1.png';

// Continuous Wave Animation Component
const AnimatedTechContinuous = ({ text, baseDelay = 0 }) => {
  const letters = text.split('');
  
  return (
    <span className='tech-highlight-continuous'>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          animate={{
            color: ['#DC2626', '#EF4444', '#F87171', '#EF4444', '#DC2626'],
            textShadow: [
              '0 0 0px rgba(220, 38, 38, 0)',
              '0 0 15px rgba(220, 38, 38, 0.6)',
              '0 0 25px rgba(220, 38, 38, 0.9)',
              '0 0 15px rgba(220, 38, 38, 0.6)',
              '0 0 0px rgba(220, 38, 38, 0)'
            ],
            scale: [1, 1.05, 1.1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: baseDelay + (index * 0.08),
            ease: "easeInOut"
          }}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

const Profile = () => {
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

  const projectCard = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <div id="profile-outer">
        <div id="profile-inner">
          {/* Hero Section */}
          <motion.div 
            id="hero-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 id="hero-greeting" variants={fadeInUp}>
              Hi, I'm <span className="name-highlight">Joaquin Vizconde</span>
            </motion.h1>
            
            <motion.h2 id="hero-title" variants={fadeInUp}>
              a Full-Stack Developer
            </motion.h2>
            
            <motion.p id="hero-description" variants={fadeInUp}>
              I'm a full-stack developer who loves turning ideas into polished web applications. 
              I focus on writing clean, maintainable code and creating intuitive user experiences 
              using {' '}
              <AnimatedTechContinuous text="React" baseDelay={0} />,{' '}
              <AnimatedTechContinuous text="Node.js" baseDelay={0.5} />,{' '}
              <AnimatedTechContinuous text="MongoDB" baseDelay={1.0} />, and{' '}
              <AnimatedTechContinuous text="Express.js" baseDelay={1.5} />.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <Link to="/contact" id="cta-button">
                Get in Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div className="hero-socials" variants={fadeInUp}>
              <a 
                href='https://github.com/wacxv' 
                className='social-link'
                aria-label='GitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a 
                href='https://www.linkedin.com/in/joaquin-carlos-vizconde' 
                className='social-link'
                aria-label='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              {/* dont put email, redirect to contact page */}
              <a 
                href='mailto:your.email@example.com' 
                className='social-link'
                aria-label='Email'
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            id="section-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          {/* Recent Projects Section */}
          <div id="projects-section-container">
            <motion.h2 
              id="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Recent Projects
            </motion.h2>
            
            <motion.div 
              id="projects-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div 
                className="project-card" 
                tabIndex="0"
                variants={projectCard}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={TaskEval1} alt="TaskEval Project" />
                <div className="project-info" aria-hidden="true">
                  <h3>Task Evaluator</h3>
                  <p>A .NET 9 + PostgreSQL task API evaluator for assessing CRUD, auth, and EF Core usage.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="project-card" 
                tabIndex="0"
                variants={projectCard}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={HavenBloom2} alt="HavenBloom Project" />
                <div className="project-info" aria-hidden="true">
                  <h3>HavenBloom</h3>
                  <p>A Telehealth platform for maternal health with real-time video consultations and IoT device monitoring.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="project-card" 
                tabIndex="0"
                variants={projectCard}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src={AWSCalcu1} alt="AWSCalcu Project" />
                <div className="project-info" aria-hidden="true">
                  <h3>AWS Calculator</h3>
                  <p>Angular-based AWS pricing calculator with auth, cost modeling, and collection management, built for AWS CloudFront deployment.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to="/project" id="view-all-link">
                View All Projects
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;