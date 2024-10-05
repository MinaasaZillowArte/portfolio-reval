// src/app/components/Testimoni.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './testimoni.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimoni {
  id: number;
  name: string;
  position: string;
  content: string;
}

const testimoniData = [
  {
    id: 1,
    name: 'Dewi Anindita',
    position: 'Staff Administrasi at PT Unilever Indonesia',
    content: 'Revaldo is incredibly skilled in coding. His ability to solve complex problems with simple, elegant solutions is impressive.',
  },
  {
    id: 2,
    name: 'Adi Wibowo',
    position: 'Supervisor IT at PT XL Axiata',
    content: 'It was a pleasure working with Revaldo. His coding knowledge is top-notch, and he always ensures the highest quality in his work.',
  },
  {
    id: 3,
    name: 'Robby Sugiharto',
    position: 'Staff IT at PT Bank Negara Indonesia (BNI)',
    content: 'Revaldo’s coding skills are on another level. He understands every detail and executes projects with precision and expertise.',
  },
  {
    id: 4,
    name: 'Alfian Nugraha',
    position: 'Staff Pengembangan Produk at PT Chandra Asri Petrochemical',
    content: 'I was amazed by Revaldo’s coding abilities. He consistently delivers clean, efficient code and is always willing to help with tough problems.',
  },
  {
    id: 5,
    name: 'Nurul Aisyah',
    position: 'Staf Pemasaran at PT Garudafood',
    content: 'Revaldo’s coding knowledge is truly exceptional. He helped us streamline our processes with innovative solutions. Highly recommended!',
  },
  {
    id: 6,
    name: 'Heru Sutrisno',
    position: 'Staf Logistik at PT Pelindo',
    content: 'Even though I’m not in IT, Revaldo’s coding work has had a huge positive impact on our operations. He’s truly a talented developer.',
  },
  {
    id: 7,
    name: 'Fitri Anwar',
    position: 'Manajer Ekspor Impor at PT Samudera Indonesia',
    content: 'Revaldo is not just a coder, he is a problem solver. He consistently delivers high-quality solutions in record time.',
  },
  {
    id: 8,
    name: 'Endang Sari',
    position: 'Sekretaris Direktur at PT Semen Baturaja',
    content: 'Revaldo’s work is outstanding! His expertise in coding has made a significant difference in our workflow efficiency.',
  },
  {
    id: 9,
    name: 'Desi Kartika',
    position: 'Manajer Legal at PT Aneka Tambang (Antam)',
    content: 'Though I work in legal, I saw how Revaldo’s coding expertise improved our team’s productivity. He’s the go-to expert when it comes to tech!',
  },
  {
    id: 10,
    name: 'Farah Anggraini',
    position: 'Manajer Pengembangan Bisnis at PT Garuda Indonesia',
    content: 'Revaldo’s coding skills were key in transforming our digital systems. His work ethic and results are commendable.',
  }
];

const Testimoni: React.FC = () => {
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
      <section id="testimoni" className={styles.testimoniSection}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.testimoniGrid}>
          {testimoniData.map((testimoni, index) => (
            <motion.div
              key={testimoni.id}
              className={styles.testimoniCard}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(239, 68, 68, 0.3)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className={styles.content}>"{testimoni.content}"</p>
              <h3 className={styles.name}>{testimoni.name}</h3>
              <p className={styles.position}>{testimoni.position}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimoni;