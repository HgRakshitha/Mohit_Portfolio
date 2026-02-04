'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Services from '@/components/Services'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import CustomCursor from '@/components/CustomCursor'
import styles from './page.module.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <CustomCursor />
      <div className={styles.mainLayout}>
        <div className={styles.contentContainer}>
          <div className={styles.sidebarWrapper}>
            <Sidebar />
          </div>
          <main className={styles.mainContent}>
            <div className={styles.contentWrapper} id="content-wrapper">
              <Navbar />
              <About />
              <Services />
              <Education />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
