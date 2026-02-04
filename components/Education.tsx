'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import styles from './Education.module.css'

const education = [
  {
    degree: 'Bachelor of Technology in Electronics and Communications Engineering',
    institution: 'Indian Institute of Information Technology, Ranchi',
    period: '2021 – 2025',
    location: 'Ranchi, Jharkhand',
    cgpa: 'CGPA: 8.08',
  },
  {
    degree: 'Higher Secondary School Certificate (CBSE) in Science stream',
    institution: 'Vikash Residential School, Bhubaneshwar',
    period: '2018 – 2020',
    location: 'Bhubaneshwar, Odisha',
    cgpa: 'Percentage: 91.60%',
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
    x: -100,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={ref} className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Education
      </motion.h2>
      
      <motion.div
        className={styles.educationList}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={styles.educationCard}
            variants={cardVariants}
            whileHover={{ 
              x: 10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className={styles.timelineLine}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
            />
            
            <motion.div 
              className={styles.timelineDot}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + (index * 0.2),
                type: 'spring',
                stiffness: 200
              }}
            />
            
            <div className={styles.educationHeader}>
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaGraduationCap className={styles.icon} />
              </motion.div>
              <div>
                <motion.h3 
                  className={styles.degree}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + (index * 0.2) }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.p 
                  className={styles.institution}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                >
                  {edu.institution}
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className={styles.educationMeta}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + (index * 0.2) }}
            >
              <motion.span 
                className={styles.metaItem}
                whileHover={{ scale: 1.05 }}
              >
                <FaCalendarAlt className={styles.metaIcon} size={14} />
                {edu.period}
              </motion.span>
              <motion.span 
                className={styles.metaItem}
                whileHover={{ scale: 1.05 }}
              >
                <FaMapMarkerAlt className={styles.metaIcon} size={14} />
                {edu.location}
              </motion.span>
              <motion.span 
                className={styles.cgpa}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: 0.7 + (index * 0.2),
                  type: 'spring',
                  stiffness: 200
                }}
              >
                {edu.cgpa}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
