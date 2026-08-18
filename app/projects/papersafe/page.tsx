'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowLeft,
  FaShieldAlt,
  FaLock,
  FaFingerprint,
  FaBrain,
  FaWifi,
  FaQrcode,
  FaCamera,
  FaDatabase,
  FaFolder,
  FaGithub,
  FaMobileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaKey,
  FaSearch,
  FaMapMarkerAlt,
  FaBell,
  FaTrash,
  FaExternalLinkAlt,
  FaEnvelope,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaUserShield,
} from 'react-icons/fa'
import CustomCursor from '@/components/CustomCursor'
import styles from './PaperSafe.module.css'

export default function PaperSafePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const keywords = [
    'Flutter (Dart SDK >=3.4.0)', 'Riverpod State Management', 'GoRouter Auth Guards',
    'AES-256-CBC Envelope Encryption', 'Node.js & Express REST API', 'MongoDB & Mongoose ODM',
    'Hardware Biometrics (local_auth)', 'On-Device Google ML Kit OCR', 'Google Gemini AI API',
    'Bluetooth Low Energy (BLE)', 'Wi-Fi Direct P2P (nearby_connections)', 'Cloudinary CDN Storage',
    'Android KeyStore / iOS Keychain', 'sqflite Full-Text Search', 'Dynamic QR Code Engine'
  ]

  const screenshots = [
    { 
      src: '/papersafe_app/1.jpeg', 
      title: '1. Native Biometric Security Gate', 
      flow: 'FLOW 1: Biometric Security Gate',
      desc: 'OS-level biometric hardware authentication (Fingerprint / Face ID via local_auth) blocking unauthorized vault access.' 
    },
    { 
      src: '/papersafe_app/2.jpeg', 
      title: '2. Command Center Dashboard (Homepage)', 
      flow: 'FLOW 2: Private Space Hub',
      desc: 'Main command center (#0D1424) featuring document counts, verified ID cards carousel, and category tiles.' 
    },
    { 
      src: '/papersafe_app/3.jpeg', 
      title: '3. Marksheets Storage Vault', 
      flow: 'FLOW 3: Category Vault',
      desc: 'Academic document vault storing X & XII marksheets with AES-256 encryption and instant local access.' 
    },
    { 
      src: '/papersafe_app/4.jpeg', 
      title: '4. Tickets Storage Vault', 
      flow: 'FLOW 3: Category Vault',
      desc: 'Encrypted travel ticket vault for boarding passes and train tickets with location-aware reminders.' 
    },
    { 
      src: '/papersafe_app/5.jpeg', 
      title: '5. Cards Storage Vault', 
      flow: 'FLOW 3: Category Vault',
      desc: 'Organized vault for identity and payment cards with live search filtering and direct + Add New Cards action.' 
    },
    { 
      src: '/papersafe_app/6.jpeg', 
      title: '6. Credentials Storage Vault', 
      flow: 'FLOW 3: Category Vault',
      desc: 'Dedicated storage directory for digital credentials (Aadhaar, PAN) with AES-256 envelope encryption badges.' 
    },
    { 
      src: '/papersafe_app/7.jpeg', 
      title: '7. Profile Details & Account Info', 
      flow: 'FLOW 1: Onboarding & Profile',
      desc: 'Personalization & account management panel displaying membership tier, contact details, and user info.' 
    },
    { 
      src: '/papersafe_app/8.jpeg', 
      title: '8. Scan Document & On-Device ML Kit OCR', 
      flow: 'FLOW 4: On-Device ML OCR',
      desc: 'High-speed camera scanner powered by Google ML Kit for 100% local text extraction without cloud exposure.' 
    },
    { 
      src: '/papersafe_app/9.jpeg', 
      title: '9. Dynamic QR Code Engine & Scanner', 
      flow: 'FLOW 5: QR Tools',
      desc: 'Generate dynamic encrypted QR codes with time-to-live timestamps and mobile camera scanning.' 
    },
    { 
      src: '/papersafe_app/10.jpeg', 
      title: '10. Internet-Free Nearby P2P Sharing', 
      flow: 'FLOW 5: Offline P2P Transfer',
      desc: 'Share encrypted files with nearby users via Bluetooth Low Energy (BLE) and high-speed Wi-Fi Direct.' 
    },
    { 
      src: '/papersafe_app/11.jpeg', 
      title: '11. Vault Settings & Security Preferences', 
      flow: 'FLOW 6: Preferences & Security',
      desc: 'System preferences for Biometric lock toggles, auto-lock on minimize, storage monitor, and themes.' 
    },
    { 
      src: '/papersafe_app/12.jpeg', 
      title: '12. Maximized Interactive Identity Card Modal', 
      flow: 'FLOW 2: Interactive Card View',
      desc: 'Full-screen modal displaying unmasked card details, decrypted document preview, and one-tap Copy Number action.' 
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

          {/* SECTION 1 — Hero / Project Intro */}
          <motion.div
            className={styles.heroSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className={styles.heroTag}>
                <FaShieldAlt size={14} />
                <span>Zero-Trust Security &amp; AI Mobile Vault</span>
              </div>

              <h1 className={styles.title}>
                <span className={styles.titleGradient}>PaperSafe v2.0</span>
              </h1>
              <p className={styles.meaningText}>
                AI-Powered &amp; Hardware-Secured Digital Document Wallet
              </p>

              <p className={styles.oneLiner}>
                A zero-trust, cross-platform digital vault leveraging on-device Machine Learning, hardware biometric security, and offline Peer-to-Peer (P2P) encryption to securely store, manage, and share sensitive identity documents.
              </p>

              <div className={styles.platformPills}>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={14} /> Android
                </span>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={14} /> iOS
                </span>
                <span className={styles.techPill}>Flutter 3.4+</span>
                <span className={styles.techPill}>Riverpod</span>
                <span className={styles.techPill}>Node.js &amp; Express</span>
                <span className={styles.techPill}>MongoDB</span>
                <span className={styles.techPill}>AES-256-CBC</span>
                <span className={styles.techPill}>Google Gemini AI</span>
              </div>

              {/* Keyword Showcase */}
              <div className={styles.keywordGrid}>
                <div style={{ width: '100%', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', marginBottom: '0.3rem', fontWeight: 700 }}>
                  🔑 Technical Stack &amp; Architecture Highlights
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

            {/* Real App Screenshot Phone Mockup */}
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
                    src="/papersafe_app/2.jpeg"
                    alt="PaperSafe Command Center Dashboard (Homepage)"
                    className={styles.realPhoneImage}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SECTION — APP SCREENSHOTS GALLERY */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>App Screenshots &amp; User Flow Gallery</span>
            </h2>
            <p style={{ color: 'var(--gray-300)', fontSize: '1.05rem', marginBottom: '1.8rem' }}>
              Explore the PaperSafe screens sequentially named 1.jpeg to 12.jpeg: Biometrics (1), Homepage (2), Marksheets (3), Tickets (4), Cards (5), Credentials (6), Profile (7), OCR Scanner (8), QR Tools (9), Nearby Share (10), Settings (11), Maximized Card (12).
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
                    src={ss.src}
                    alt={ss.title}
                    className={styles.screenshotImage}
                    loading="lazy"
                  />
                  <div className={styles.screenshotOverlay}>
                    <span className={styles.screenshotCategory}>{ss.flow}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}>
                      {ss.title}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExpand size={10} /> Tap to Expand
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox Modal with Prev/Next Controls */}
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
                    src={screenshots[selectedIndex].src}
                    alt={screenshots[selectedIndex].title}
                    className={styles.lightboxImg}
                  />

                  {/* Screen Caption */}
                  <div className={styles.lightboxCaption}>
                    <div style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: 700 }}>
                      {screenshots[selectedIndex].title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600, marginTop: '2px' }}>
                      {screenshots[selectedIndex].flow}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '6px', lineHeight: 1.4 }}>
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
              <span className={styles.titleGradient}>Why PaperSafe?</span> Problem &amp; Solution
            </h2>

            <div className={styles.problemSolutionGrid}>
              <div className={styles.cardProblem}>
                <div className={styles.cardHeader} style={{ color: '#ef4444' }}>
                  <FaTimesCircle />
                  <span>The Problem with Unsecured Vaults</span>
                </div>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Physical identity documents, passports, and marksheets are bulky to carry and easily lost. Storing plain unencrypted scans in photo galleries or messaging apps exposes users to privacy leaks, data theft, and cloud exposure. Existing apps also require internet access even to transfer files to someone sitting right next to you.
                </p>
              </div>

              <div className={styles.cardSolution}>
                <div className={styles.cardHeader} style={{ color: '#10b981' }}>
                  <FaCheckCircle />
                  <span>The PaperSafe Solution</span>
                </div>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  PaperSafe provides a bank-grade digital vault with AES-256-CBC envelope encryption, local hardware biometric gates (Fingerprint/FaceID), internet-free Peer-to-Peer file sharing via BLE &amp; Wi-Fi Direct, on-device OCR text extraction, and an AI conversational document assistant.
                </p>
              </div>
            </div>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🔐</div>
                <div className={styles.pillarTitle}>Zero-Trust Encryption</div>
                <div className={styles.pillarSub}>AES-256-CBC + OS Hardware KeyStore</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>🧠</div>
                <div className={styles.pillarTitle}>On-Device ML &amp; AI</div>
                <div className={styles.pillarSub}>Google ML Kit OCR &amp; Gemini AI Chat</div>
              </div>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>📡</div>
                <div className={styles.pillarTitle}>Internet-Free P2P</div>
                <div className={styles.pillarSub}>Bluetooth BLE + Wi-Fi Direct Transfer</div>
              </div>
            </div>
          </div>

          {/* SECTION 3 — Screen-by-Screen & User Flow Walkthrough */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Screen-by-Screen &amp; Flow Walkthrough</span>
            </h2>

            <div className={styles.featuresGrid}>
              {/* Flow 1 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaLock />
                </div>
                <h3 className={styles.featureTitle}>FLOW 1: Authentication &amp; Hardware Biometrics</h3>
                <p className={styles.featureDesc}>
                  Impenetrable entry barrier with passwordless OTP login and OS-level biometric verification.
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>1</span> Native Biometric Security Gate (1.jpeg - local_auth)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>2</span> User Profile &amp; Account Info (7.jpeg - Profile Details)
                  </div>
                </div>
              </div>

              {/* Flow 2 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaShieldAlt />
                </div>
                <h3 className={styles.featureTitle}>FLOW 2: Command Center &amp; Interactive ID Cards</h3>
                <p className={styles.featureDesc}>
                  Private command hub displaying overall vault statistics and full-screen unmasked ID card modals.
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>3</span> Command Center Dashboard Homepage (2.jpeg)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>4</span> Maximized Identity Card Modal (12.jpeg)
                  </div>
                </div>
              </div>

              {/* Flow 3 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaFolder />
                </div>
                <h3 className={styles.featureTitle}>FLOW 3: Category Vault Directory &amp; Upload</h3>
                <p className={styles.featureDesc}>
                  Visual directory listing document categories (Marksheets, Tickets, Cards, Credentials).
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>5</span> Marksheets Vault (3.jpeg)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>6</span> Tickets Vault (4.jpeg)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>7</span> Cards Vault (5.jpeg)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>8</span> Credentials Vault (6.jpeg)
                  </div>
                </div>
              </div>

              {/* Flow 4 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaBrain />
                </div>
                <h3 className={styles.featureTitle}>FLOW 4: On-Device ML Kit OCR &amp; AI Engine</h3>
                <p className={styles.featureDesc}>
                  Eliminate manual typing with instant on-device text parsing and intelligent document scanner.
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>9</span> Scan Document &amp; ML Kit OCR (8.jpeg)
                  </div>
                </div>
              </div>

              {/* Flow 5 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaWifi />
                </div>
                <h3 className={styles.featureTitle}>FLOW 5: Offline P2P Transfer &amp; Dynamic QR Engine</h3>
                <p className={styles.featureDesc}>
                  Transfer files without cellular data using BLE + Wi-Fi Direct and dynamic encrypted QR payloads.
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>10</span> Dynamic QR Code Engine &amp; Scanner (9.jpeg)
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>11</span> Internet-Free Nearby P2P Transfer (10.jpeg)
                  </div>
                </div>
              </div>

              {/* Flow 6 */}
              <div className={styles.featureCard}>
                <div className={styles.featureIconBadge}>
                  <FaBell />
                </div>
                <h3 className={styles.featureTitle}>FLOW 6: Vault Configuration &amp; Security</h3>
                <p className={styles.featureDesc}>
                  Automated background daemons, location-aware travel reminders, and security preferences.
                </p>
                <div className={styles.stepper}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNumber}>12</span> Account Settings &amp; Security Configuration (11.jpeg)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4 — Monolithic Architecture & Security Flow */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Monolithic Architecture &amp; Security Flow</span>
            </h2>

            <div className={styles.archCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>
                  End-to-End Encryption &amp; Data Pipeline Architecture
                </span>
                <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderRadius: '9999px', fontWeight: 600 }}>
                  Flutter + Node.js Monolith · AES-256-CBC
                </span>
              </div>

              <div className={styles.archGrid}>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Client Framework</span>
                  <span className={styles.archValue}>Flutter (Dart SDK &gt;=3.4.0)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Backend REST Engine</span>
                  <span className={styles.archValue}>Node.js / Express.js API</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Database &amp; Storage</span>
                  <span className={styles.archValue}>MongoDB (Mongoose) + Cloudinary CDN</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Encryption Cipher</span>
                  <span className={styles.archValue}>Client/Server AES-256-CBC</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Hardware Security</span>
                  <span className={styles.archValue}>Android KeyStore / iOS Keychain</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Biometric Hardware</span>
                  <span className={styles.archValue}>Fingerprint &amp; FaceID (local_auth)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Offline P2P Protocol</span>
                  <span className={styles.archValue}>BLE + Wi-Fi Direct (nearby_connections)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>On-Device ML OCR</span>
                  <span className={styles.archValue}>Google ML Kit Vision Engine</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>AI Intelligence</span>
                  <span className={styles.archValue}>Google Gemini API (google_generative_ai)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Offline Indexing</span>
                  <span className={styles.archValue}>sqflite SQLite Full-Text Search</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 — Call to Action */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Interested in PaperSafe Architecture or Security Walkthrough?
            </h2>

            <p className={styles.ctaSubtitle}>
              I would be happy to discuss the AES-256-CBC encryption pipeline, Google Nearby Connections P2P sharing, or Riverpod state management implementation.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/#contact" className={styles.btnPrimary}>
                <FaEnvelope />
                <span>Contact Me</span>
              </Link>
              <a
                href="https://github.com/KumarMohit85/PaperSafe"
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
