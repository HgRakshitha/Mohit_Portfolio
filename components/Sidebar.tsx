'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FaLinkedin, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import styles from './Sidebar.module.css'

const contactInfo = [
  { 
    icon: FaEnvelope, 
    label: 'EMAIL', 
    value: 'mohit.official.one@gmail.com',
    href: 'mailto:mohit.official.one@gmail.com'
  },
  { 
    icon: FaPhone, 
    label: 'PHONE', 
    value: '+91-8581017107',
    href: 'tel:+918581017107'
  },
  { 
    icon: FaMapMarkerAlt, 
    label: 'LOCATION', 
    value: 'Bengaluru, Karnataka - 560068',
    href: null
  },
]

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/mohitkumarpal', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/KumarMohit85', label: 'GitHub' },
  { icon: FaGoogle, href: 'mailto:mohit.official.one@gmail.com', label: 'Google' },
  { icon: FaTwitter, href: 'https://x.com/MohitKumar861', label: 'Twitter' },
]

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 500, damping: 30 })
  const springY = useSpring(y, { stiffness: 500, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / 10)
    y.set((e.clientY - centerY) / 10)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <aside className={styles.sidebar}>
      <motion.div
        className={styles.sidebarContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springY,
          rotateY: springX,
        }}
      >
        {/* Profile Section */}
        <motion.div
          className={styles.profileSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className={styles.avatarWrapper}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            transition={{ 
              delay: 0.2,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 25 }
            }}
          >
            <div className={styles.avatarContainer}>
              <div className={styles.avatarGlow} />
              <motion.div 
                className={styles.avatarImageWrapper}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/mohit.JPEG"
                  alt="Mohit Kumar Pal"
                  width={120}
                  height={120}
                  className={styles.avatarImage}
                  priority
                  unoptimized
                />
              </motion.div>
              <motion.div 
                className={styles.onlineIndicator}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              />
            </div>
          </motion.div>
          
          <motion.div
            className={styles.nameContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className={styles.name}>
              Mohit Kumar Pal
            </h1>
            <motion.div 
              className={styles.titleBadge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>Software Developer</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Contact Section */}
        <motion.div
          className={styles.contactSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {contactInfo.map((info, index) => {
            const Component = info.href ? motion.a : motion.div
            const props = info.href
              ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            
            return (
              <Component
                key={index}
                {...props}
                className={styles.contactItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ x: 4 }}
              >
                <motion.div 
                  className={styles.contactIconWrapper}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    backgroundColor: hoveredIndex === index 
                      ? 'rgba(6, 182, 212, 0.15)' 
                      : 'rgba(6, 182, 212, 0.08)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <info.icon className={styles.contactIcon} size={14} />
                </motion.div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>{info.label}</span>
                  <span className={styles.contactValue}>{info.value}</span>
                </div>
              </Component>
            )
          })}
        </motion.div>

        {/* Social Section */}
        <motion.div
          className={styles.socialSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1.1 + index * 0.05,
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.15,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </aside>
  )
}
