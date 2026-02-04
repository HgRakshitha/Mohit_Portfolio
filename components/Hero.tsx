'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import styles from './Hero.module.css'

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/KumarMohit85', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/mohitkumarpal', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:mohit.official.one@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.backgroundGradient} />
      <div className={styles.gridBackground} />

      <div className={`container ${styles.content}`}>
        <div className={styles.textCenter}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Mohit Kumar Pal</span>
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Software Developer
            </motion.p>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Full-Stack Developer specializing in Node.js, Flutter, AWS, and modern web technologies.
              Building scalable applications with clean architecture principles.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="/Mohit_Kumar_Pal_Resume.pdf"
                download="Mohit_Kumar_Pal_Resume.pdf"
                className={`glass-effect ${styles.downloadBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload size={18} />
                <span>Download Resume</span>
              </motion.a>
              
              <div className={styles.socialLinks}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-effect ${styles.socialBtn}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#about"
                className={styles.scrollDown}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span>Scroll Down</span>
                <HiArrowDown size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
