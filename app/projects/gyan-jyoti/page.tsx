'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowLeft,
  FaGamepad,
  FaBookOpen,
  FaMusic,
  FaPalette,
  FaAward,
  FaGithub,
  FaMobileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaGraduationCap,
  FaPlay,
  FaPause,
  FaMagic,
  FaExternalLinkAlt,
  FaEnvelope,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import CustomCursor from '@/components/CustomCursor'
import styles from './GyanJyoti.module.css'

export default function GyanJyotiPage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(true)
  const [activeStory, setActiveStory] = useState<number>(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const keywords = [
    'Flutter', 'Dart', 'Riverpod 2', 'go_router', 'Dio Client',
    'Shared Preferences', 'Firebase FCM', 'EdTech', 'Pre-school Education',
    '100% Ad-Free', 'Cross-Platform (Android & iOS)', 'Clean Architecture',
    'Flood-Fill Canvas Engine', 'Drag & Drop Scene Builder', 'Gamification Streaks'
  ]

  const stories = [
    { title: "Bunny's Big Day", moral: 'Kindness & Patience', duration: '2:15' },
    { title: 'Ellie the Kind Elephant', moral: 'Helping Others', duration: '3:05' },
    { title: 'Chicky Learns to Walk', moral: 'Perseverance', duration: '1:45' },
    { title: 'The Shining Star', moral: 'Self Confidence', duration: '2:50' },
    { title: "Teddy's Lost Button", moral: 'Problem Solving', duration: '2:10' },
  ]

  // Ordered screenshots: 10, 12, 7, 4, ss7, 6, 3, 2, 11, 1, 8, 5 (screen 9 removed)
  const screenshots = [
    { src: '/gyan_jyoti_ss/ss5.jpeg', title: 'Audio Storybook Player', desc: 'Narrated stories with audio waveform and moral reflections.' },
    { src: '/gyan_jyoti_ss/ss6.jpeg', title: 'Profile & Achievement Badges', desc: 'Gamification reward screen showcasing earned badges.' },
    { src: '/gyan_jyoti_ss/ss4.jpeg', title: 'Coloring Canvas Studio', desc: 'Flood-fill canvas rendering engine with color palette.' },
    { src: '/gyan_jyoti_ss/WhatsApp Image 2026-08-18 at 11.09.43.jpeg', title: 'Chapter Lessons Overview', desc: 'Chapter lesson list with progress indicators.' },
    { src: '/gyan_jyoti_ss/ss7.jpeg', title: 'Interactive Learning Studio', desc: 'Custom activity and creative learning studio.' },
    { src: '/gyan_jyoti_ss/ss3.jpeg', title: 'Interactive Quiz Engine', desc: 'Gamified quiz question with instant visual checkmark feedback.' },
    { src: '/gyan_jyoti_ss/ss2.jpeg', title: 'Subject & Chapter Selection', desc: 'Structured curriculum paths for English, Math, Science & Art.' },
    { src: '/gyan_jyoti_ss/ss.jpeg', title: 'Home Dashboard & Daily Streaks', desc: 'Main navigation hub with coin counter and subject cards.' },
    { src: '/gyan_jyoti_ss/WhatsApp Image 08-18 at 11.09.45.jpeg', title: 'Parent & Teacher Analytics', desc: 'Comprehensive progress and study habit tracking dashboard.' },
    { src: '/gyan_jyoti_ss/WhatsApp Image.jpeg', title: 'Welcome & Splash Screen', desc: 'App startup and branding entrance screen.' },
    { src: '/gyan_jyoti_ss/WhatsApp Image 2026-08-18 at 11.09.45.jpeg', title: 'Make a Scene Sticker Studio', desc: 'Drag-and-drop sticker compositor for creative scene building.' },
    { src: '/gyan_jyoti_ss/WhatsApp Image 2026-08-18 at 11.09.44.jpeg', title: 'Interactive Lesson Activity', desc: 'Child-friendly lesson player with animated visuals.' },
  ]

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + screenshots.length) % screenshots.length)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length)
    }
  }

  return (
    <>
      <CustomCursor />
      <div className={styles.container}>
        <div className={styles.glowBg} />

        <div className={styles.contentWrapper}>
          {/* Top Navigation */}
          <div className={styles.topNav}>
            <Link href="/#portfolio" className={styles.backBtn}>
              <FaArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* SECTION 1 — Hero / Project Intro */}
          <motion.div
            className={styles.heroSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className={styles.heroTag}>
                <FaMagic size={14} />
                <span>Gamified EdTech Mobile Showcase</span>
              </div>

              <h1 className={styles.title}>
                <span className={styles.titleGradient}>Gyan Jyoti</span>
              </h1>
              <p className={styles.meaningText}>
                Translates to &ldquo;Light of Knowledge&rdquo; (ज्ञान ज्योति)
              </p>

              <p className={styles.oneLiner}>
                A production-ready gamified preschool learning engine for children aged 2–5. Covering English, Math, Science &amp; Art with interactive quizzes, narrated storybooks, and creative art tools — built with Flutter &amp; Riverpod.
              </p>

              <div className={styles.platformPills}>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={14} /> Android
                </span>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={14} /> iOS
                </span>
                <span className={styles.techPill}>Flutter 3.5+</span>
                <span className={styles.techPill}>Riverpod 2</span>
                <span className={styles.techPill}>go_router</span>
                <span className={styles.techPill}>Dio Client</span>
                <span className={styles.techPill}>Firebase FCM</span>
              </div>

              {/* Unified Keyword Badge Showcase */}
              <div className={styles.keywordGrid}>
                <div style={{ width: '100%', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fbbf24', marginBottom: '0.3rem', fontWeight: 700 }}>
                  🌟 Key Features &amp; Architecture Highlights
                </div>
                {keywords.map((kw, i) => (
                  <motion.span
                    key={kw}
                    className={styles.keywordChip}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {kw}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Real App Screenshot Phone Mockup (Real Screen 4) */}
            <div className={styles.mockupContainer}>
              <motion.div
                className={styles.phoneFrame}
                initial={{ rotateY: 15, rotateX: 5 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI('/gyan_jyoti_ss/WhatsApp Image 2026-08-18 at 11.09.43.jpeg')}
                    alt="Gyan Jyoti Chapter Lessons Overview (Screen 4)"
                    className={styles.realPhoneImage}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SECTION — APP SCREENSHOTS */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>App Screenshots Gallery</span>
            </h2>
            <p style={{ color: 'var(--gray-300)', fontSize: '1.05rem', marginBottom: '1.8rem' }}>
              Explore Gyan Jyoti interface screens featuring curriculum chapters, interactive quizzes, coloring canvas, and audio storybooks.
            </p>

            {/* Screenshot Grid */}
            <div className={styles.galleryGrid}>
              {screenshots.map((ss, idx) => (
                <motion.div
                  key={ss.src}
                  className={styles.screenshotCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setSelectedIndex(idx)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI(ss.src)}
                    alt={ss.title}
                    className={styles.screenshotImage}
                    loading="lazy"
                  />
                  <div className={styles.screenshotOverlay}>
                    <span className={styles.screenshotCategory}>{ss.title}</span>
                    <span style={{ fontSize: '0.75rem', color: '#fbbf24', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExpand size={10} /> Expand Screen
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox Modal with Prev/Next Slideshow Controls */}
          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                className={styles.lightboxBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIndex(null)}
              >
                <motion.div
                  className={styles.lightboxContent}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className={styles.closeLightboxBtn}
                    onClick={() => setSelectedIndex(null)}
                  >
                    <FaTimes size={16} />
                  </button>

                  {/* Prev Button */}
                  <button className={`${styles.navArrowBtn} ${styles.prevBtn}`} onClick={handlePrev}>
                    <FaChevronLeft size={18} />
                  </button>

                  {/* Next Button */}
                  <button className={`${styles.navArrowBtn} ${styles.nextBtn}`} onClick={handleNext}>
                    <FaChevronRight size={18} />
                  </button>

                  {/* Screen Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={encodeURI(screenshots[selectedIndex].src)}
                    alt={screenshots[selectedIndex].title}
                    className={styles.lightboxImg}
                  />

                  {/* Screen Caption */}
                  <div className={styles.lightboxCaption}>
                    <div style={{ color: '#fbbf24', fontSize: '0.95rem', fontWeight: 700 }}>
                      {screenshots[selectedIndex].title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '4px' }}>
                      {screenshots[selectedIndex].desc}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SECTION 2 — Problem & Solution */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Why Gyan Jyoti?</span> Problem &amp; Solution
            </h2>

            <div className={styles.problemSolutionGrid}>
              <div className={styles.cardProblem}>
                <div className={styles.cardHeader} style={{ color: '#ef4444' }}>
                  <FaTimesCircle />
                  <span>The Problem in Existing Apps</span>
                </div>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Young children aged 2–5 learn best through active play, but most existing educational mobile applications are either overly complex, filled with disruptive advertisements, or lack a structured age-appropriate curriculum.
                </p>
              </div>

              <div className={styles.cardSolution}>
                <div className={styles.cardHeader} style={{ color: '#22c55e' }}>
                  <FaCheckCircle />
                  <span>The Gyan Jyoti Solution</span>
                </div>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Gyan Jyoti delivers structured, curriculum-aligned educational content inside a 100% safe, ad-free environment equipped with animated lessons, interactive quizzes, narrated storybooks, and creative art studios.
                </p>
              </div>
            </div>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🚫</div>
                <div className={styles.pillarTitle}>100% Ad-Free</div>
                <div className={styles.pillarSub}>Safe, distraction-free environment</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🎓</div>
                <div className={styles.pillarTitle}>Curriculum-Aligned</div>
                <div className={styles.pillarSub}>English · Math · Science · Art &amp; Craft</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🏆</div>
                <div className={styles.pillarTitle}>Gamified Rewards</div>
                <div className={styles.pillarSub}>Stars, Coins, Badges &amp; Streaks</div>
              </div>
            </div>
          </div>

          {/* SECTION 3 — Feature Showcase */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Core Feature Showcase</span>
            </h2>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaMagic />
                </div>
                <h3 className={styles.featureTitle}>3.1 Smart Dashboard</h3>
                <p className={styles.featureDesc}>
                  Personalized child-friendly home screen with quick-access subject cards, daily streak counters, school announcements, and coin rewards.
                </p>
                <div style={{ padding: '0.6rem 0.9rem', background: 'rgba(255,255,255,0.04)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.85rem', color: '#fbbf24' }}>
                  ✨ Daily Streaks &amp; Coin Counter for positive reinforcement
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaGraduationCap />
                </div>
                <h3 className={styles.featureTitle}>3.2 Structured Learning Paths</h3>
                <p className={styles.featureDesc}>
                  Guided progression across 4 core subjects with 18+ chapters and 53 distinct screens.
                </p>

                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>1</span> Pick a Subject (English / Math / Science / Art)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>2</span> Select a Chapter
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>3</span> Choose Lesson: 📖 Book · 🎵 Video · 🎮 Activity
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>4</span> Complete &amp; Earn ⭐ Star Badge
                  </div>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaGamepad />
                </div>
                <h3 className={styles.featureTitle}>3.3 Interactive Quizzes</h3>
                <p className={styles.featureDesc}>
                  Instant visual and auditory feedback with animated green checkmarks for correct answers and red shake animations for retry attempts.
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>Choose Quiz (Alphabets / Colors / Numbers / Animals)</div>
                  <div className={styles.stepItem}>Instant Feedback (Green Check ✓ or Red Shake ❌)</div>
                  <div className={styles.stepItem}>Score Summary &amp; Coin Rewards</div>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaPalette />
                </div>
                <h3 className={styles.featureTitle}>3.4 Creative Art &amp; Craft Studio</h3>
                <p className={styles.featureDesc}>
                  Built-in creative studio with 4 distinct art modes. Powered by a custom Flutter flood-fill canvas engine and drag-and-drop scene compositor.
                </p>

                <div className={styles.artGrid}>
                  <div className={styles.artModePill}>
                    <div className={styles.artModeTitle}>🖌️ Color &amp; Create</div>
                    <div className={styles.artModeDesc}>Flood-fill coloring canvas</div>
                  </div>
                  <div className={styles.artModePill}>
                    <div className={styles.artModeTitle}>🎨 Make a Scene</div>
                    <div className={styles.artModeDesc}>Drag &amp; drop stickers</div>
                  </div>
                  <div className={styles.artModePill}>
                    <div className={styles.artModeTitle}>✏️ Step Drawing</div>
                    <div className={styles.artModeDesc}>Numbered step tutorials</div>
                  </div>
                  <div className={styles.artModePill}>
                    <div className={styles.artModeTitle}>📄 Fold &amp; Create</div>
                    <div className={styles.artModeDesc}>Origami-style guides</div>
                  </div>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaMusic />
                </div>
                <h3 className={styles.featureTitle}>3.5 Audio Storybook Engine</h3>
                <p className={styles.featureDesc}>
                  5 illustrated stories with synchronized audio narration, highlight captions, and moral reflections at the end of each story.
                </p>

                <div className={styles.storyList}>
                  {stories.map((s, idx) => (
                    <div
                      key={s.title}
                      className={styles.storyItem}
                      onClick={() => {
                        setActiveStory(idx)
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <span style={{ fontWeight: 600 }}>📖 {s.title}</span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Moral: {s.moral}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaAward />
                </div>
                <h3 className={styles.featureTitle}>3.6 Progress &amp; Rewards Tracker</h3>
                <p className={styles.featureDesc}>
                  Comprehensive parent and teacher dashboard to monitor child learning metrics, badge completions, and study habits.
                </p>

                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>25</div>
                    <div className={styles.statLabel}>Lessons</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>12</div>
                    <div className={styles.statLabel}>Quizzes</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>92</div>
                    <div className={styles.statLabel}>Badges</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>18d</div>
                    <div className={styles.statLabel}>Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4 — Architecture */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>System Architecture &amp; Tech Stack</span>
            </h2>

            <div className={styles.archCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fbbf24' }}>
                  Flutter Mobile Architecture (Clean Architecture + Riverpod)
                </span>
                <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4', borderRadius: '9999px', fontWeight: 600 }}>
                  53 Screens · 13 Feature Areas
                </span>
              </div>

              <div className={styles.archGrid}>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>UI Framework</span>
                  <span className={styles.archValue}>Flutter 3.5+ (Dart)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>State Management</span>
                  <span className={styles.archValue}>Riverpod 2</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Navigation</span>
                  <span className={styles.archValue}>go_router (Declarative)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Network Layer</span>
                  <span className={styles.archValue}>Dio (REST Client)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Local Persistence</span>
                  <span className={styles.archValue}>Shared Preferences</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Push Notifications</span>
                  <span className={styles.archValue}>Firebase FCM</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Typeface</span>
                  <span className={styles.archValue}>Mona Sans (Custom Rounded)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Custom Canvas</span>
                  <span className={styles.archValue}>Flood-fill &amp; Drag-Drop Engine</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 — Call to Action */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Interested in Codebase Walkthrough or Architecture?
            </h2>

            <p className={styles.ctaSubtitle}>
              I would be happy to discuss the Riverpod state architecture, flood-fill canvas implementation, or cross-platform Flutter patterns.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/#contact" className={styles.btnPrimary}>
                <FaEnvelope />
                <span>Contact Me</span>
              </Link>
              <a
                href="https://github.com/KumarMohit85/GyanJyoti"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <FaGithub />
                <span>View GitHub Repository</span>
              </a>
              <Link href="/#portfolio" className={styles.btnSecondary}>
                <FaExternalLinkAlt />
                <span>Explore Other Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
