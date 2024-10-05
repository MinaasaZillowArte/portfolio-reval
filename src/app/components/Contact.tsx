// src/app/components/Contact.tsx

'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Me</h2>
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subHeading}>Get in Touch</h3>
          <p className={styles.description}>
            Whether you have a question or just want to say hi, feel free to drop a message. I'll get back to you as soon as possible.
          </p>
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Email:</span>
              <a href="mailto:revaldoanjennurillifanderson@gmail.com" className={styles.link}>revaldoanjennurillifanderson@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 0a2 2 0 012-2h.01a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
              <span>Phone:</span>
              <a href="tel:+62 881011160226" className={styles.link}>+62 881-0111-60226</a>
            </div>
            <div className={styles.infoItem}>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l.445 1.342a12.042 12.042 0 005.294 5.294l1.342.445a1 1 0 01.684.948V19a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3.28a1 1 0 01-.684-.948l.445-1.342a12.042 12.042 0 00-5.294-5.294L6.684 6.68A1 1 0 016 5.732V5z" />
              </svg>
              <span>Location:</span>
              <span className={styles.text}>Cipinang Lontar II, Kelurahan PuloGadung, 1340, Jakarta Timur</span>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.205 11.385c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61a3.176 3.176 0 00-1.333-1.752c-1.09-.746.083-.73.083-.73a2.515 2.515 0 011.836 1.23c1.514 2.597 3.98 1.867 4.947 1.43a2.81 2.81 0 012.588-1.795c1.042.005 2.127.142 3.13.417a2.816 2.816 0 012.614 2.328c0 1.686-.016 3.05-.016 3.467 0 .321.218.694.825.576A12.003 12.003 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.869 0-2.155 1.459-2.155 2.967v5.697h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.56 2.836-1.56 3.037 0 3.6 2.0 3.6 4.6v5.6z" />
              </svg>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482c-4.084-.205-7.702-2.158-10.126-5.134a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616c-.054 2.385 1.693 4.374 4.158 4.827a4.935 4.935 0 01-2.224.084c.63 1.953 2.445 3.377 4.6 3.419a9.868 9.868 0 01-6.102 2.105c-.396 0-.787-.023-1.17-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
          </div>
        </motion.div>
        <motion.div
          className={styles.contactForm}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {isSubmitted && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.input}
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={6}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;