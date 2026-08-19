'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowLeft,
  FaMusic,
  FaMobileAlt,
  FaGithub,
  FaExternalLinkAlt,
  FaEnvelope,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaLock,
  FaHome,
  FaPlay,
  FaHeart,
  FaUpload,
  FaCloud,
  FaDatabase,
  FaServer,
  FaLayerGroup,
} from 'react-icons/fa'
import CustomCursor from '@/components/CustomCursor'
import styles from './SoundWave.module.css'

export default function SoundWavePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const keywords = [
    'Flutter (Dart 3.x)', 'Riverpod 2.0', 'fpdart (Functional Error Handling)',
    'just_audio & just_audio_background', 'Lock Screen Media Controls',
    'audio_waveforms', 'HiveDB & SharedPreferences', 'Python 3.11+ / FastAPI',
    'PostgreSQL & SQLAlchemy ORM', 'JWT Auth & Bcrypt Hashing', 'Cloudinary CDN',
    'Multipart Media Upload Pipeline',
  ]

  const screenshots = [
    {
      src: '/music_player/homepage_1.jpeg',
      title: 'Home Dashboard — Good Evening',
      flow: 'SCREEN 1: HOME',
      desc: 'Spotify-inspired discovery dashboard with personalized greeting, recent plays grid, "Latest Today" horizontal carousel, and "Made For You" collection — plus persistent mini player bar.',
    },
    {
      src: '/music_player/homepage_2.jpeg',
      title: 'Home Dashboard — Discovery Feed',
      flow: 'SCREEN 2: HOME',
      desc: 'Extended home view showing the horizontally scrollable "Latest Today" album artwork carousel and "Made For You" curated section with album art thumbnails.',
    },
    {
      src: '/music_player/music_player.jpeg',
      title: 'Interactive Music Player',
      flow: 'SCREEN 3: PLAYER',
      desc: 'Full-screen player with album artwork, real-time seek bar, playback controls (shuffle, previous, pause/play, next, repeat), and dynamic golden theme extracted from cover art.',
    },
    {
      src: '/music_player/library_screen.jpeg',
      title: 'User Library & Favorites',
      flow: 'SCREEN 4: LIBRARY',
      desc: 'Personal music hub displaying curated favorite tracks with instant heart-toggle synchronization and live track count badges.',
    },
    {
      src: '/music_player/upload_music.jpeg',
      title: 'Creator Studio — Upload Music',
      flow: 'SCREEN 5: UPLOAD',
      desc: 'Creator studio enabling users to upload MP3/WAV tracks and custom artwork directly to Cloudinary CDN, complete with form inputs and color picker.',
    },
    {
      src: '/music_player/upload_music_2.jpeg',
      title: 'Upload Music — Track Details',
      flow: 'SCREEN 6: UPLOAD',
      desc: 'Detailed upload flow with dynamic audio waveform generation, track metadata input, and artwork selection before Cloudinary CDN submission.',
    },
  ]

  const features = [
    {
      icon: <FaLock />,
      title: 'JWT Authentication & Secure Onboarding',
      desc: 'Secure login and sign-up featuring salted Bcrypt password hashing, JWT token sessions, automatic session persistence via SharedPreferences, and reactive Riverpod AuthViewModel.',
      tag: 'JWT · Bcrypt · SharedPreferences · Riverpod AuthViewModel',
    },
    {
      icon: <FaHome />,
      title: 'Personalized Home Dashboard',
      desc: 'Spotify-inspired discovery feed with dynamic greetings, recently played grid from local HiveDB cache, and horizontal "Latest Today" and "Made For You" carousels powered by AsyncValue fetching.',
      tag: 'HiveDB Cache · AsyncValue · 2-Column Grid · Horizontal ListView',
    },
    {
      icon: <FaPlay />,
      title: 'Background Audio Playback & Lock Screen Controls',
      desc: 'Uninterrupted background audio playback pinned as a persistent mini-player above the bottom nav bar, featuring native lock screen notification widgets and real-time seek bar progress.',
      tag: 'just_audio · just_audio_background · StreamBuilder · Hero Animations',
    },
    {
      icon: <FaHeart />,
      title: 'User Library & Favorites Collection',
      desc: 'Personal music hub displaying favorited tracks with instant heart-toggle UI updates, Riverpod provider invalidation for live count badges, and SQLAlchemy joined loads for efficient data fetching.',
      tag: 'Optimistic UI · Provider Invalidation · SQLAlchemy Joined Loads',
    },
    {
      icon: <FaUpload />,
      title: 'Creator Studio — Upload & Waveform Generation',
      desc: 'Full creator workflow for uploading MP3/WAV audio files and custom artwork to Cloudinary CDN via multipart HTTP requests, with dynamic audio waveform visualization and color picker.',
      tag: 'Cloudinary CDN · MultipartRequest Upload · audio_waveforms · ColorPicker',
    },
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

          {/* ── HERO ────────────────────────────────── */}
          <motion.div
            className={styles.heroSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className={styles.heroTag}>
                <FaMusic size={13} />
                <span>Full-Stack Cross-Platform Music Streaming App</span>
              </div>

              <h1 className={styles.title}>
                <span className={styles.titleGradient}>SoundWave</span>
              </h1>

              <p className={styles.oneLiner}>
                A production-grade music streaming and audio management platform — stream tracks, curate your library, and upload your own music via Cloudinary CDN, all backed by a FastAPI + PostgreSQL backend.
              </p>

              <div className={styles.platformPills}>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={13} /> Android
                </span>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={13} /> iOS
                </span>
                <span className={styles.techPill}>Flutter (Dart 3.x)</span>
                <span className={styles.techPill}>Riverpod 2.0</span>
                <span className={styles.techPill}>FastAPI (Python)</span>
                <span className={styles.techPill}>PostgreSQL</span>
                <span className={styles.techPill}>Cloudinary CDN</span>
              </div>

              <div className={styles.keywordGrid}>
                <div style={{ width: '100%', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#a78bfa', marginBottom: '0.3rem', fontWeight: 700 }}>
                  ⚡ Core Technologies
                </div>
                {keywords.map((kw, i) => (
                  <motion.span
                    key={kw}
                    className={styles.keywordChip}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {kw}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
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
                    src="/music_player/homepage_1.jpeg"
                    alt="SoundWave Home Dashboard"
                    className={styles.realPhoneImage}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── SCREENSHOTS GALLERY ─────────────────── */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>App Screenshots Gallery</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '1.8rem' }}>
              End-to-end flow: authentication, home discovery, full-screen player, user library, and creator upload studio.
            </p>

            <div className={styles.galleryGrid}>
              {screenshots.map((ss, idx) => (
                <motion.div
                  key={ss.src}
                  className={styles.screenshotCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedIndex(idx)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ss.src}
                    alt={ss.title}
                    className={styles.screenshotImage}
                    loading="lazy"
                  />
                  <div className={styles.screenshotOverlay}>
                    <span className={styles.screenshotCategory}>{ss.flow}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                      {ss.title}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#a78bfa', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExpand size={10} /> Tap to Expand
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
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
                  <button className={styles.closeLightboxBtn} onClick={() => setSelectedIndex(null)}>
                    <FaTimes size={16} />
                  </button>
                  <button className={`${styles.navArrowBtn} ${styles.prevBtn}`} onClick={handlePrev}>
                    <FaChevronLeft size={18} />
                  </button>
                  <button className={`${styles.navArrowBtn} ${styles.nextBtn}`} onClick={handleNext}>
                    <FaChevronRight size={18} />
                  </button>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={screenshots[selectedIndex].src}
                    alt={screenshots[selectedIndex].title}
                    className={styles.lightboxImg}
                  />
                  <div className={styles.lightboxCaption}>
                    <div style={{ color: '#a78bfa', fontSize: '0.95rem', fontWeight: 700 }}>
                      {screenshots[selectedIndex].title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#c4b5fd', fontWeight: 600, marginTop: '2px' }}>
                      {screenshots[selectedIndex].flow}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '6px', lineHeight: 1.45 }}>
                      {screenshots[selectedIndex].desc}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── CORE FEATURES ───────────────────────── */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>5 Core Features</span>
            </h2>

            <div className={styles.featuresGrid}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureCard}>
                  <div className={styles.featureIconBadge}>{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                  <div style={{ padding: '0.45rem 0.8rem', background: 'rgba(255,255,255,0.04)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.78rem', color: '#c4b5fd', width: 'fit-content' }}>
                    ⚡ {f.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── TECH STACK ──────────────────────────── */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Complete Tech Stack</span>
            </h2>

            <div className={styles.stackGrid}>
              <div className={styles.stackCard}>
                <div className={styles.stackCardTitle}>
                  <FaMobileAlt /> Mobile / Frontend
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Framework</span>
                  <span className={styles.stackValue}>Flutter (Dart 3.x)</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>State Management</span>
                  <span className={styles.stackValue}>Riverpod 2.0</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Error Handling</span>
                  <span className={styles.stackValue}>fpdart (Either&lt;Failure, Success&gt;)</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Audio Engine</span>
                  <span className={styles.stackValue}>just_audio + just_audio_background</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Waveform</span>
                  <span className={styles.stackValue}>audio_waveforms</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Local Persistence</span>
                  <span className={styles.stackValue}>HiveDB + SharedPreferences</span>
                </div>
              </div>

              <div className={styles.stackCard}>
                <div className={styles.stackCardTitle}>
                  <FaServer /> Backend / Cloud
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>API Framework</span>
                  <span className={styles.stackValue}>FastAPI (Python 3.11+)</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Database</span>
                  <span className={styles.stackValue}>PostgreSQL</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>ORM</span>
                  <span className={styles.stackValue}>SQLAlchemy ORM</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Authentication</span>
                  <span className={styles.stackValue}>JWT Tokens + Bcrypt Hashing</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Media CDN</span>
                  <span className={styles.stackValue}>Cloudinary SDK (Audio + Images)</span>
                </div>
                <div className={styles.stackRow}>
                  <span className={styles.stackLabel}>Upload</span>
                  <span className={styles.stackValue}>Multipart HTTP Request Pipeline</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA ─────────────────────────────────── */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Want to Discuss the Architecture?
            </h2>
            <p className={styles.ctaSubtitle}>
              Happy to walk through the Riverpod state architecture, FastAPI microservices design, Cloudinary upload pipeline, or background audio service implementation.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://github.com/KumarMohit85/MusicPlayerApp"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <FaGithub />
                <span>View GitHub Repository</span>
              </a>
              <Link href="/#contact" className={styles.btnSecondary}>
                <FaEnvelope />
                <span>Contact Me</span>
              </Link>
              <Link href="/#portfolio" className={styles.btnSecondary}>
                <FaExternalLinkAlt />
                <span>More Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
