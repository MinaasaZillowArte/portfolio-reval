// src/app/components/About.tsx

'use client';

import React from 'react';
import styles from './about.module.css';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.aboutImage}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src="https://i.postimg.cc/0NLm4jPr/Picsart-24-08-09-09-56-14-849.png" alt="Profile" className={styles.profileImage} />
        </motion.div>
        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subHeading}>Hello! I'm Revaldo</h3>
          <p className={styles.description}>
            I'm a passionate Full-Stack Developer with over 5 years of experience in building dynamic and responsive web applications. I specialize in React, Next.js, and Node.js, and I love turning complex problems into simple, beautiful solutions.
          </p>
          <div className={styles.skills}>
            <h4 className={styles.skillsHeading}>My Skills</h4>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>JavaScript</li>
              <li className={styles.skillItem}>TypeScript</li>
              <li className={styles.skillItem}>React</li>
              <li className={styles.skillItem}>Next.js</li>
              <li className={styles.skillItem}>Node.js</li>
              <li className={styles.skillItem}>CSS3</li>
              <li className={styles.skillItem}>HTML5</li>
              <li className={styles.skillItem}>Git</li>
              <li className={styles.skillItem}>Responsive Design</li>
              <li className={styles.skillItem}>UI/UX Design</li>
            </ul>
          </div>
          <a href="#contact" className={styles.ctaButton}>
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;