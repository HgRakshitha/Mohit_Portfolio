'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Experience.module.css'

const experience = {
  company: 'Unico International Pvt. Limited',
  position: 'Software Developer (Flutter & Backend)',
  period: 'June 2025 – Present',
  location: 'Bengaluru, India',
  projects: [
    {
      name: 'Real-Time Trading Data Gateway',
      tech: 'Node.js, WebSockets, Supabase, AWS EC2, Docker, PM2',
      points: [
        'Developed a Node.js WebSocket gateway supporting 500+ concurrent connections for forex market data.',
        'Designed subscription aggregation and data distribution pipelines to optimize real-time market feed delivery.',
        'Implemented retry-safe persistence and caching mechanisms to improve system reliability and fault tolerance.',
        'Built event-driven workflows for automated Stop-Loss and Take-Profit execution using live market feeds.',
      ],
    },
    {
      name: 'DoorSync – Community Management Platform',
      tech: 'Java, Spring Boot, AWS Lambda, API Gateway, DynamoDB, Cognito',
      points: [
        'Contributed to Java Spring Boot microservices within a DDD, CQRS, and Hexagonal Architecture ecosystem.',
        'Developed serverless REST APIs using AWS Lambda and API Gateway for scalable request processing.',
        'Implemented Cognito-based authentication and managed cloud infrastructure using AWS SAM and CloudFormation.',
      ],
    },
    {
      name: 'WashBee – Laundry Service Platform',
      tech: 'Flutter, Riverpod, Node.js, Express, Prisma, PostgreSQL, Supabase, FCM',
      points: [
        'Built cross-platform Flutter apps with Provider and GoRouter, supporting 4 client interfaces on one shared backend.',
        'Implemented SSE for live order-status streaming, syncing delivery updates to clients in real time without polling.',
        'Engineered an atomic order pipeline with Prisma transactions and PostgreSQL, backed by Redis/BullMQ for async scheduling.',
      ],
    },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const projectVariants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Experience
      </motion.h2>
      
      <motion.div
        className={styles.experienceCard}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div>
            <motion.h3 
              className={styles.company}
              whileHover={{ x: 5 }}
            >
              <motion.span
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaBriefcase className={styles.icon} />
              </motion.span>
              {experience.company}
            </motion.h3>
            <motion.p 
              className={styles.position}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {experience.position}
            </motion.p>
          </div>
          <motion.div 
            className={styles.meta}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.p 
              className={styles.period}
              whileHover={{ scale: 1.05 }}
            >
              <FaCalendarAlt className={styles.calendarIcon} size={14} />
              {experience.period}
            </motion.p>
            <motion.p 
              className={styles.location}
              whileHover={{ scale: 1.05 }}
            >
              <FaMapMarkerAlt className={styles.locationIcon} size={14} />
              {experience.location}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.projects}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experience.projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.project}
              variants={projectVariants}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h4 
                className={styles.projectName}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + (index * 0.15) }}
              >
                {project.name}
              </motion.h4>
              <motion.p 
                className={styles.projectTech}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + (index * 0.15) }}
              >
                {project.tech}
              </motion.p>
              <ul className={styles.projectPoints}>
                {project.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    variants={bulletVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.7 + (index * 0.15) + (pointIndex * 0.1) }}
                  >
                    <motion.span 
                      className={styles.bullet}
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      ▹
                    </motion.span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
