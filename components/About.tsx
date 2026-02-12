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
          Backend-focused Software Engineer with hands-on experience building real-time, production-grade systems. I specialize in designing scalable backend architectures using Node.js and Spring Boot, implementing event-driven workflows, Redis caching, background job scheduling, and cloud-native deployments on AWS.
        </motion.p>
        
        <motion.p 
          className={styles.paragraph}
          variants={textVariants}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          Alongside backend systems, I build clean-architecture Flutter applications integrated with secure, role-based APIs. I enjoy solving complex system problems, optimizing performance, and designing reliable multi-actor platforms that operate in real-world production environments.
        </motion.p>
      </motion.div>
    </section>
  )
}
