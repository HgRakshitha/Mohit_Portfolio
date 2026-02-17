'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import { SiCodeforces, SiCodechef } from 'react-icons/si'
import styles from './CodingProfile.module.css'

// LeetCode Icon SVG Component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662L2.571 9.145c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.152-4.152c.467-.467 1.111-.645 1.824-.645s1.357.195 1.823.462l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.901L9.505 1.037C8.548.08 7.35-.346 6.174.83L2.022 4.981c-1.176 1.177-1.176 3.072 0 4.248l5.985 5.985c1.176 1.177 3.071 1.177 4.247 0l2.697-2.607c.514-.514 1.365-.497 1.9.038.535.536.553 1.387.038 1.901zm-.193-5.251l-2.697 2.606c-.467.467-1.111.645-1.824.645s-1.357-.195-1.823-.462L4.251 7.769c-.514-.515-1.365-.497-1.9.038-.535.536-.553 1.387-.038 1.901l2.697 2.607c.467.467 1.111.662 1.824.662s1.357-.195 1.823-.662l5.985-5.985c.467-.467.702-1.15.702-1.863s-.235-1.357-.702-1.824L12.22 2.98c-.467-.467-1.111-.645-1.824-.645s-1.357.195-1.823.462L6.876 5.402c-.514.515-1.365.497-1.9-.038-.535-.536-.553-1.387-.038-1.901l2.697-2.606c1.176-1.177 3.071-1.177 4.247 0l5.985 5.985c1.176 1.177 1.176 3.071 0 4.248z"/>
  </svg>
)

interface CodingPlatform {
  name: string
  icon: React.ComponentType<{ className?: string }>
  link: string
  username?: string
}

const codingPlatforms: CodingPlatform[] = [
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    link: 'https://codeforces.com/profile/mohit.official.one',
    username: 'mohit.official.one',
  },
  {
    name: 'CodeChef',
    icon: SiCodechef,
    link: 'https://www.codechef.com/users/noob_coder61',
    username: 'noob_coder61',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const statVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function CodingProfile() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="milestones" className={styles.codingProfileSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Coding Profile
      </motion.h2>

      <motion.div
        ref={ref}
        className={styles.codingProfileContainer}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* LeetCode Section */}
        <motion.div
          className={styles.categorySection}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIconWrapper}>
              <LeetCodeIcon className={styles.categoryIcon} />
            </div>
            <div className={styles.categoryTitleWrapper}>
              <h3 className={styles.categoryTitle}>LeetCode</h3>
              <a
                href="https://leetcode.com/mohit_kumar_10/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
              >
                @mohit_kumar_10
              </a>
            </div>
          </div>

          <motion.div
            className={styles.leetCardContainer}
            variants={statVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <a
              href="https://leetcode.com/mohit_kumar_10/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.leetCardLink}
            >
              <img
                src="https://leetcard.jacoblin.cool/mohit_kumar_10"
                alt="LeetCode Stats Card"
                className={styles.leetCardImage}
                loading="lazy"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Other Platforms Section */}
        <motion.div
          className={styles.categorySection}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIconWrapper}>
              <FaCode className={styles.categoryIcon} />
            </div>
            <h3 className={styles.categoryTitle}>Other Platforms</h3>
          </div>

          <div className={styles.platformsList}>
            {codingPlatforms.map((platform, index) => {
              const PlatformIcon = platform.icon
              return (
                <motion.a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformItem}
                  variants={statVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    z: 10,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlatformIcon className={styles.platformIcon} />
                  <span className={styles.platformName}>{platform.name}</span>
                  {platform.username && (
                    <span className={styles.platformUsername}>@{platform.username}</span>
                  )}
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
