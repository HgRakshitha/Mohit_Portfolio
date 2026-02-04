'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import styles from './Achievements.module.css'

const achievements = [
  'LeetCode | Ranked 2686 in Biweekly Contest 125.',
  'Ranked under top 10 at the Hack This Fall 3.0 Hackathon.',
  'Led teams to the second round of HackOn with Amazon and the Semi-Finals of Flipkart Grid 5.0.',
  'Attained an All India Rank of 3 in the India Innovates Product Challenge organized by IIT Kharagpur.',
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
    x: -50,
    scale: 0.9,
    rotateY: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" ref={ref} className={styles.section}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        Achievements
      </motion.h2>
      
      <motion.div
        className={styles.achievementsList}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={styles.achievementCard}
            variants={cardVariants}
            whileHover={{ 
              x: 10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              whileHover={{ 
                rotate: [0, -15, 15, -15, 0],
                scale: 1.2,
                transition: { duration: 0.5 }
              }}
            >
              <FaTrophy className={styles.trophyIcon} />
            </motion.div>
            <motion.p 
              className={styles.achievementText}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + (index * 0.15) }}
            >
              {achievement}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
