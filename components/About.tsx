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
          Software Developer specializing in <strong>Flutter &amp; Backend Engineering</strong> with hands-on experience building production-grade mobile applications and distributed backend systems. I engineer clean-architecture Flutter apps (Riverpod, Provider, GoRouter, Dio) integrated with event-driven backend microservices in Node.js, Java (Spring Boot), and Python (FastAPI).
        </motion.p>
        
        <motion.p 
          className={styles.paragraph}
          variants={textVariants}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          From building real-time WebSocket trading gateways supporting 500+ concurrent connections and serverless cloud APIs on AWS, to architecting multi-client mobile apps with live SSE streaming, zero-server offline P2P encryption, and background audio streaming engines, I enjoy solving complex end-to-end engineering challenges.
        </motion.p>
      </motion.div>
    </section>
  )
}
