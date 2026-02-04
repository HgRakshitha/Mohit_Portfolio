'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Experience.module.css'

const experience = {
  company: 'Unico International Pvt. Limited',
  position: 'Software Developer',
  period: 'June 2025 – Present',
  location: 'Bengaluru, India',
  type: 'Intern: Jun 2025 – Dec 2025',
  projects: [
    {
      name: 'Real-Time Trading Data Gateway',
      tech: 'Node.js, WebSockets, Supabase, AWS EC2, Docker, PM2',
      points: [
        'Developed and scaled a real-time trading backend for forex and crypto markets using Node.js and WebSockets, enabling sub-second market data streaming and automated SL/TP execution.',
        'Designed retry-safe database operations and caching layers, and deployed production workloads on AWS EC2 using Docker and PM2 for reliability and scalability.',
      ],
    },
    {
      name: 'DoorSync – Community Management Platform',
      tech: 'Java, Spring Boot, AWS Lambda, API Gateway, DynamoDB, Cognito',
      points: [
        'Contributed to backend microservices development using Java and Spring Boot, following DDD, CQRS, and Hexagonal Architecture principles.',
        'Implemented serverless APIs using AWS Lambda and API Gateway, integrated Amazon Cognito authentication, and managed infrastructure via AWS SAM / CloudFormation.',
      ],
    },
    {
      name: 'WashBee – Laundry Service Platform',
      tech: 'Node.js, Express, Prisma, PostgreSQL, Supabase, FCM',
      points: [
        'Architected a scalable multi-actor backend for customers, admins, in-house staff, and delivery partners, supporting full order lifecycle, cart, service catalog, dual pricing models, billing, and role-based workflows.',
        'Designed real-time delivery assignment and tracking using SSE and FCM, with live location tracking, photo-based pickup/drop proof, and automated assignment flows via polling jobs and webhook-driven triggers.',
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
            <motion.p 
              className={styles.type}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {experience.type}
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
