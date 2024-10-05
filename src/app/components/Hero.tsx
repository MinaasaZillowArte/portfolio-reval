// src/app/components/Hero.tsx

'use client';

import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Animated Background Layers */}
      <div className={styles.background}>
        <div className={styles.gradient}></div>
        <div className={styles.particles}></div>
        <div className={styles.shapes}>
          <motion.div
            className={styles.shape}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />
          <motion.div
            className={styles.shape}
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.shape}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.shape}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className={styles.name}>Revaldo Anderson</span>
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A <span className={styles.highlight}>Full-Stack Developer</span> crafting modern and responsive web applications.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="#projects"
            className={styles.primaryButton}
            whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }} /* Red hover */
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.secondaryButton}
            whileHover={{ scale: 1.05, backgroundColor: '#ef4444', color: '#ffffff' }} /* Red hover */
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className={styles.socialIcons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="Twitter"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </a>
        </motion.div>

        {/* Scroll Down Indicator Removed */}

      </div>

      {/* Additional Decorative Elements */}
      <motion.div
        className={styles.decorativeElement}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        {/* Add any additional decorative elements or animations here */}
      </motion.div>
    </section>
  );
};

export default Hero;