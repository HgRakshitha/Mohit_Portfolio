'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaCalendarAlt, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'PaperSafe',
    tech: 'Flutter, Node.js, Express.js, MongoDB, Cloudinary',
    period: 'Oct 2024 – Nov 2024',
    githubUrl: 'https://github.com/KumarMohit85/PaperSafe',
    description: 'Digital document wallet with secure storage and AES-256-CBC encryption',
    color: 'rgba(6, 182, 212, 0.15)',
  },
  {
    name: 'MusicPlayer',
    tech: 'Flutter, FastAPI, PostgreSQL, Cloudinary',
    period: 'Feb 2024 – Mar 2024',
    githubUrl: 'https://github.com/KumarMohit85/MusicPlayerApp',
    description: 'Full-stack cross-platform music player with JWT authentication',
    color: 'rgba(139, 92, 246, 0.15)',
  },
  {
    name: 'VitalCarePlus',
    tech: 'Flutter, Dart, Cross-platform',
    period: '2024',
    githubUrl: 'https://github.com/KumarMohit85/VitalCarePlus',
    description: 'Healthcare management application built with Flutter for cross-platform deployment',
    color: 'rgba(236, 72, 153, 0.15)',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" ref={ref} className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Projects
      </motion.h2>
      
      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            variants={cardVariants}
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 3, -3, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
              },
              rotateY: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5,
              },
            }}
            whileHover={{ 
              y: -15,
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.97 }}
            style={{ '--card-color': project.color } as React.CSSProperties}
          >
            <motion.div
              className={styles.cardGlow}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5,
              }}
            />
            
            <motion.div
              className={styles.cardBorder}
              animate={{
                background: [
                  'linear-gradient(90deg, var(--primary), var(--secondary))',
                  'linear-gradient(180deg, var(--secondary), var(--accent))',
                  'linear-gradient(270deg, var(--accent), var(--primary))',
                  'linear-gradient(360deg, var(--primary), var(--secondary))',
                ],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className={styles.projectHeader}>
              <motion.div
                className={styles.iconContainer}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.4,
                }}
              >
                <FaCode className={styles.projectIcon} size={24} />
              </motion.div>
              <motion.h3 
                className={styles.projectName}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.15) }}
              >
                {project.name}
              </motion.h3>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                } : {}}
                transition={{ delay: 0.3 + (index * 0.15), type: 'spring', stiffness: 200 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${project.name} on GitHub`}
              >
                <FaGithub size={20} />
                <FaExternalLinkAlt size={12} className={styles.externalIcon} />
              </motion.a>
            </div>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + (index * 0.15) }}
            >
              {project.description}
            </motion.p>

            <div className={styles.projectFooter}>
              <motion.span 
                className={styles.period}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + (index * 0.15), type: 'spring' }}
              >
                <motion.span
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  <FaCalendarAlt className={styles.calendarIcon} size={12} />
                </motion.span>
                {project.period}
              </motion.span>
              <motion.div 
                className={styles.techStack}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + (index * 0.15) }}
              >
                {project.tech.split(', ').map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className={styles.techTag}
                    initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                    animate={inView ? { 
                      opacity: 1, 
                      scale: 1, 
                      rotateZ: 0,
                      y: [0, -4, 0],
                    } : {}}
                    transition={{ 
                      opacity: { delay: 0.7 + (index * 0.15) + (techIndex * 0.08) },
                      scale: { delay: 0.7 + (index * 0.15) + (techIndex * 0.08), type: 'spring', stiffness: 200 },
                      rotateZ: { delay: 0.7 + (index * 0.15) + (techIndex * 0.08) },
                      y: {
                        duration: 2 + (techIndex * 0.2),
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: (index * 0.3) + (techIndex * 0.2),
                      },
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotateZ: [0, 5, -5, 0],
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
