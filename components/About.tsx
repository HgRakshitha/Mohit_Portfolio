'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        About Me
      </motion.h2>
      
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p 
          className={styles.paragraph}
          variants={textVariants}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          A passionate Software Developer with strong expertise in full-stack development, Node.js, Flutter, AWS, REST APIs, UI/UX, and state management solutions. Proven track record in delivering cutting-edge solutions, including API integration, third-party libraries, and performance optimization. Adept at debugging to ensure high-quality, responsive applications and an agile collaborator committed to staying current with industry trends.
        </motion.p>
        
        <motion.p 
          className={styles.paragraph}
          variants={textVariants}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          If you're seeking a skilled Software Developer to breathe life into your project and exceed your expectations, I am here to collaborate and create magic together. Reach out, and let's transform your vision into a reality!
        </motion.p>
      </motion.div>
    </section>
  )
}
