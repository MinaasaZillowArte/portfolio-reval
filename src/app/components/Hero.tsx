// src/app/components/Hero.tsx

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'; // Added useMotionValue

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Mouse follow effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXMouse = useTransform(mouseY, [-300, 300], [-10, 10]);
  const rotateYMouse = useTransform(mouseX, [-300, 300], [10, -10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left - rect.width / 2);
      mouseY.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <section
      ref={heroRef}
      className={styles.heroSection}
      onMouseMove={handleMouseMove} // Added mouse move handler
    >
      <motion.div
        className={styles.parallaxBackgroundContainer}
        style={{ scale }}
      >
        <Image
          src="/images/hero_background_wave.jpg"
          alt="Ocean wave background"
          layout="fill"
          objectFit="cover"
          priority // Preload this important image
        />
      </motion.div>

      {/* Pseudo-3D Elements */}
      <motion.div
        className={styles.pseudo3dCube}
        style={{
          rotateX: rotateXMouse,
          rotateY: rotateYMouse,
        }}
      />
      <motion.div
        className={styles.pseudo3dOrb}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

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
            <Image
              src="/images/github.svg"
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
            <Image
              src="/images/linkedin.svg"
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
            <Image
              src="/images/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </a>
        </motion.div>

        {/* Scroll Down Indicator Removed */}

      </div>

      {/* Additional Decorative Elements - This might be the old .shapes or .decorativeElement, consider if needed or removing */}
      {/* For now, let's assume the new pseudo3D elements replace the old .decorativeElement if it was singular */}
      {/* If styles.decorativeElement is still used for something else, it can remain. Based on the prompt, this might be removed or replaced. */}
      {/* Let's remove the specific one named decorativeElement as its purpose seems to be superseded by the new 3D elements */}
      {/*
      <motion.div
        className={styles.decorativeElement}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
      </motion.div>
      */}
    </section>
  );
};

export default Hero;