// src/app/components/Navbar.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) { // Adjust threshold as needed
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            Project
          </Link>
          <Link href="#testimoni" className={styles.navLink}>
            Testimoni
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.menuButton}
            aria-label="Toggle Menu"
          >
            <svg
              className={styles.menuIcon}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
      >
        <Link href="#about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
          About
        </Link>
        <Link href="#projects" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
          Project
        </Link>
        <Link href="#testimoni" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
          Testimoni
        </Link>
        <Link href="#contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
