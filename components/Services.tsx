'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMobileAlt, FaCode, FaPencilRuler, FaServer } from 'react-icons/fa'
import styles from './Services.module.css'

const services = [
  {
    icon: FaMobileAlt,
    title: 'Mobile Apps',
    description: 'Professional development of applications for Android and iOS.',
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'High-quality development of sites at the professional level.',
  },
  {
    icon: FaPencilRuler,
    title: 'UI/UX Design',
    description: 'The most modern and high-quality design.',
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    description: 'High-performance backend services.',
  },
]

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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -15,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        What I'm Doing
      </motion.h2>
      
      <motion.div
        className={styles.servicesGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className={styles.iconWrapper}
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            >
              <service.icon className={styles.icon} size={40} />
            </motion.div>
            <motion.h3 
              className={styles.serviceTitle}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + (index * 0.15) }}
            >
              {service.title}
            </motion.h3>
            <motion.p 
              className={styles.serviceDescription}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + (index * 0.15) }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
