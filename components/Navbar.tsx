'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '/Mohit_Kumar_Pal_Resume.pdf', download: true },
]

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const contentWrapper = document.getElementById('content-wrapper') as HTMLElement
    const isMobile = window.innerWidth <= 1023
    
    const handleScroll = () => {
      const scrollTop = isMobile ? window.scrollY : (contentWrapper?.scrollTop || 0)
      
      const sections = navItems
        .filter(item => !item.download)
        .map(item => {
          const id = item.href.replace('#', '')
          const element = document.querySelector(item.href)
          return { id, element }
        })
      
      const scrollPosition = scrollTop + (isMobile ? 150 : 200)
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          let elementTop: number
          let elementBottom: number
          
          if (isMobile) {
            // On mobile, use window scroll
            const elementRect = section.element.getBoundingClientRect()
            elementTop = elementRect.top + window.scrollY
            elementBottom = elementTop + elementRect.height
          } else {
            // On desktop, use contentWrapper scroll
            if (contentWrapper) {
              const containerRect = contentWrapper.getBoundingClientRect()
              const elementRect = section.element.getBoundingClientRect()
              elementTop = elementRect.top - containerRect.top + scrollTop
              elementBottom = elementTop + elementRect.height
            } else {
              continue
            }
          }
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id)
            return
          }
        }
      }
      
      if (scrollTop < 100) {
        setActiveSection('about')
      }
    }
    
    // Initial check after a small delay to ensure DOM is ready
    setTimeout(handleScroll, 100)
    
    // Add scroll listeners based on device type
    if (isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    } else if (contentWrapper) {
      contentWrapper.addEventListener('scroll', handleScroll, { passive: true })
    }
    
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll)
      } else if (contentWrapper) {
        contentWrapper.removeEventListener('scroll', handleScroll)
      }
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <nav className={styles.navbar}>
      <motion.div 
        className={styles.navContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {navItems.map((item, index) => {
          const isActive = !item.download && activeSection === item.href.replace('#', '')
          return (
            <motion.a
              key={item.name}
              href={item.href}
              download={item.download ? 'Mohit_Kumar_Pal_Resume.pdf' : undefined}
              target={item.download ? '_blank' : undefined}
              rel={item.download ? 'noopener noreferrer' : undefined}
              className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                y: -2,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (!item.download) {
                  e.preventDefault()
                  const contentWrapper = document.getElementById('content-wrapper') as HTMLElement
                  const element = document.querySelector(item.href)
                  const isMobile = window.innerWidth <= 1023
                  
                  if (element) {
                    const offset = isMobile ? 100 : 120
                    
                    if (isMobile) {
                      // On mobile, scroll the window
                      const elementRect = element.getBoundingClientRect()
                      const elementTop = elementRect.top + window.scrollY
                      const offsetPosition = elementTop - offset
                      
                      window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                      })
                    } else if (contentWrapper) {
                      // On desktop, scroll the contentWrapper
                      const containerRect = contentWrapper.getBoundingClientRect()
                      const elementRect = element.getBoundingClientRect()
                      const scrollTop = contentWrapper.scrollTop
                      const elementTop = elementRect.top - containerRect.top + scrollTop
                      const offsetPosition = elementTop - offset
                      
                      contentWrapper.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                      })
                    }
                  }
                }
              }}
            >
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className={styles.activeIndicator}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              {item.name}
            </motion.a>
          )
        })}
      </motion.div>
    </nav>
  )
}
