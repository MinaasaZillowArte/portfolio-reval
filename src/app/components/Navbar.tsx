// src/app/components/Navbar.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${navbarBg ? styles.scrolled : ''}`}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Portfolio Revaldo</span>
          </Link>
        </div>

        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="#testimoni" className={styles.navLink}>
            Testimonials
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton}>
          <button
            onClick={toggleMobileMenu}
            className={styles.menuButton}
            aria-label="Toggle Menu"
          >
            <motion.svg
              className={styles.menuIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? "open" : "closed"}
              initial="closed"
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 45 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                variants={{
                  closed: { opacity: 1, d: "M4 6h16M4 12h16M4 18h16" },
                  open: { opacity: 0, d: "M6 6l12 12" }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M6 18L18 6"
                variants={{
                  closed: { opacity: 0, d: "M6 18L18 6" },
                  open: { opacity: 1, d: "M6 18L18 6" }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div
              className={styles.mobileNavLinks}
              variants={menuVariants}
            >
              <motion.a
                href="#about"
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
                variants={linkVariants}
              >
                About
              </motion.a>
              <motion.a
                href="#projects"
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
                variants={linkVariants}
              >
                Projects
              </motion.a>
              <motion.a
                href="#testimoni"
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
                variants={linkVariants}
              >
                Testimonials
              </motion.a>
              <motion.a
                href="#contact"
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
                variants={linkVariants}
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
