'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import styles from './CustomCursor.module.css'

interface Particle {
  id: number
  x: number
  y: number
  size: number
}

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    let particleId = 0
    let lastX = 0
    let lastY = 0
    
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      // Create trailing particles
      if (Math.abs(e.clientX - lastX) > 5 || Math.abs(e.clientY - lastY) > 5) {
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
        }
        setParticles((prev) => [...prev.slice(-8), newParticle])
        lastX = e.clientX
        lastY = e.clientY
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      // Create ripple effect
      setRipples((prev) => [
        ...prev,
        { id: Date.now(), x: e.clientX, y: e.clientY },
      ])
    }
    
    const handleMouseUp = () => {
      setIsClicking(false)
    }
    
    // Check for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Cleanup particles
    const particleInterval = setInterval(() => {
      setParticles((prev) => prev.slice(1))
    }, 100)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      clearInterval(particleInterval)
    }
  }, [cursorX, cursorY])

  // Cleanup ripples
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1))
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [ripples])

  if (!mounted) return null

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className={`${styles.cursor} ${isHovering ? styles.hover : ''} ${isClicking ? styles.click : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <div className={styles.cursorGlow} />
      </motion.div>
      
      {/* Inner dot */}
      <motion.div
        className={`${styles.cursorDot} ${isHovering ? styles.hover : ''} ${isClicking ? styles.click : ''}`}
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      
      {/* Trailing particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Ripple effects on click */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className={styles.ripple}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Outer glow effect */}
      <motion.div
        className={`${styles.cursorOuterGlow} ${isHovering ? styles.hover : ''} ${isClicking ? styles.click : ''}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  )
}

