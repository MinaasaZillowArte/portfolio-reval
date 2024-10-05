'use client';

import React, { useState } from 'react';
import styles from './projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    shortDescription: 'A responsive portfolio website showcasing personal projects and skills.',
    fullDescription: 'This project involves building a personal portfolio website using React and TypeScript. The main features include project showcases, responsive design, smooth scrolling, and a contact form.',
    technologies: ['NextJS', 'TypeScript', 'CSS Modules', 'TailwindCSS'],
    liveLink: 'https://yourwebsite.com/portfolio',
    repoLink: 'https://github.com/yourusername/portfolio-website',
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    shortDescription: 'A real-time chat application built with Next.js and Firebase.',
    fullDescription: 'This project allows users to join chat rooms and exchange messages in real time. It features Firebase for authentication and database, as well as Framer Motion for smooth UI animations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
    liveLink: 'https://yourwebsite.com/chat-app',
    repoLink: 'https://github.com/yourusername/chat-app',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    shortDescription: 'A full-featured e-commerce platform with user authentication, cart, and payment integration.',
    fullDescription: 'The e-commerce platform is built using Node.js and Express, with a MongoDB backend for data storage. It features Stripe for payment processing, user authentication, and an admin dashboard for managing products and orders.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://yourwebsite.com/e-commerce',
    repoLink: 'https://github.com/yourusername/e-commerce',
  },
  {
    id: 4,
    title: 'AI Image Classifier',
    shortDescription: 'An AI-based image classifier built using Python and TensorFlow.',
    fullDescription: 'This project focuses on developing a machine learning model to classify images into different categories. It uses TensorFlow for training the model, and Flask is used to deploy the model as a web service.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'OpenCV'],
    liveLink: 'https://yourwebsite.com/image-classifier',
    repoLink: 'https://github.com/yourusername/image-classifier',
  },
  {
    id: 5,
    title: 'Weather Forecasting System',
    shortDescription: 'A web-based weather forecasting system using API integration.',
    fullDescription: 'This project provides real-time weather updates using OpenWeatherMap API. It is built with Vue.js and displays temperature, humidity, and weather conditions for a specific location.',
    technologies: ['Vue.js', 'Vuex', 'OpenWeatherMap API'],
    liveLink: 'https://yourwebsite.com/weather-app',
    repoLink: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 6,
    title: 'AI-powered Chatbot',
    shortDescription: 'A chatbot powered by natural language processing (NLP) using Python.',
    fullDescription: 'This chatbot is developed using Python and machine learning libraries like NLTK and TensorFlow. It can handle user queries, provide customer support, and learn from user interactions.',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Django'],
    liveLink: 'https://yourwebsite.com/chatbot',
    repoLink: 'https://github.com/yourusername/ai-chatbot',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(239, 68, 68, 0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openModal(project)}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.shortDescription}</p>
              <ul className={styles.technologiesList}>
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className={styles.technologyItem}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <button className={styles.viewButton}>View Project</button>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal} aria-label="Close Modal">
                &times;
              </button>
              <h3 className={styles.modalHeading}>{selectedProject.title}</h3>
              <p className={styles.modalDescription}>{selectedProject.fullDescription}</p>
              <h4 className={styles.modalSubHeading}>Technologies Used:</h4>
              <ul className={styles.modalTechnologiesList}>
                {selectedProject.technologies.map((tech, idx) => (
                  <li key={idx} className={styles.modalTechnologyItem}>
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={styles.modalLinks}>
                {selectedProject.liveLink && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                    Live Demo
                  </a>
                )}
                {selectedProject.repoLink && (
                  <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                    Repository
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;