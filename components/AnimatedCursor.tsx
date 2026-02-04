'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './AnimatedCursor.module.css'

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const trailIdRef = useRef(0)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Add to trail
      const newTrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
      }
      setTrail(prev => [...prev.slice(-10), newTrailPoint])
    }

    const smoothUpdate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }))
      animationFrameRef.current = requestAnimationFrame(smoothUpdate)
    }

    animationFrameRef.current = requestAnimationFrame(smoothUpdate)

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check for hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('navLink') ||
        target.classList.contains('contactItem') ||
        target.classList.contains('socialIcon') ||
        target.classList.contains('serviceCard') ||
        target.classList.contains('skillItem') ||
        target.classList.contains('projectCard') ||
        target.classList.contains('achievementCard')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [position])

  return (
    <>
      {/* Main cursor */}
      <div
        className={`${styles.cursor} ${isHovering ? styles.hover : ''} ${isClicking ? styles.clicking : ''}`}
        style={{
          left: `${smoothPosition.x}px`,
          top: `${smoothPosition.y}px`,
        }}
      >
        <div className={styles.cursorInner}></div>
        <div className={styles.cursorRing}></div>
        <div className={styles.cursorGlow}></div>
      </div>

      {/* Trailing dot */}
      <div
        className={`${styles.cursorDot} ${isHovering ? styles.hover : ''} ${isClicking ? styles.clicking : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>

      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className={styles.trailParticle}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
          }}
        ></div>
      ))}
    </>
  )
}

