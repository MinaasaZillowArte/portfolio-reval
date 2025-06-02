// src/app/components/ProjectModal.tsx

'use client';

import React from 'react';
import styles from './projects.module.css'; // Assuming styles are needed and defined in projects.module.css
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.modalOverlay}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close Modal">
              &times;
            </button>
            <h3 className={styles.modalHeading}>{project.title}</h3>
            <p className={styles.modalDescription}>{project.fullDescription}</p>
            <h4 className={styles.modalSubHeading}>Technologies Used:</h4>
            <ul className={styles.modalTechnologiesList}>
              {project.technologies.map((tech, idx) => (
                <li key={idx} className={styles.modalTechnologyItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.modalLinks}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                  Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                  Repository
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
