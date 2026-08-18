'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaTshirt,
  FaShoppingCart,
  FaCalendarAlt,
  FaCreditCard,
  FaTruck,
  FaCamera,
  FaClipboardCheck,
  FaStream,
  FaBell,
  FaMobileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExternalLinkAlt,
  FaEnvelope,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaShieldAlt,
  FaBolt,
  FaSync,
} from 'react-icons/fa'
import CustomCursor from '@/components/CustomCursor'
import styles from './WashBee.module.css'

export default function WashBeePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const keywords = [
    'Flutter (Dart)', 'Provider State Management', 'google_maps_flutter', 'geolocator & Reverse Geocoding',
    'GoRouter (Declarative & Auth Guards)', 'Dio HTTP Client & Request Interceptors', 'Razorpay / Stripe Payments',
    'Firebase Messaging (FCM)', 'image_picker (Hardware Camera)', 'Multi-Role Architecture',
    'FIFO Processing Pipeline Engine', 'Hybrid Pricing Engine (per-Piece & per-KG)', 'Audit Reconciliation Logic'
  ]

  const features = [
    {
      num: '1',
      title: 'Interactive Google Maps & Pin-Drop Location Selection',
      icon: <FaMapMarkerAlt />,
      business: 'Eliminates wrong-address delivery issues! Customers drop a precise pin on an interactive map so pickup drivers arrive at the exact location without needing back-and-forth phone calls.',
      technical: 'Built using google_maps_flutter and geolocator. Handles reverse-geocoding to convert map coordinates into human-readable address strings.',
      stack: 'google_maps_flutter · geolocator · Geocoding API'
    },
    {
      num: '2',
      title: 'Interactive Service & Garment Catalog Browsing',
      icon: <FaTshirt />,
      business: 'Intuitive service selection! Customers easily browse laundry services (Wash & Fold, Steam Press, Dry Cleaning, Shoe Care, Luxury Care) and customize individual clothing items.',
      technical: 'Renders dynamic grid layouts filtered by service category IDs, utilizing clean state handling for item add-ons (Stain Removal, Starch).',
      stack: 'Dynamic Grid View · Category Filter State · Clean Architecture'
    },
    {
      num: '3',
      title: 'Smart Laundry Cart & Hybrid Price Calculator',
      icon: <FaShoppingCart />,
      business: 'Transparent, worry-free pricing! Customers can easily mix individual delicate items (like suits or sarees) with bulk laundry by weight (per-KG), instantly seeing total costs before ordering.',
      technical: 'Powered by Provider state management. Features a reactive pricing engine that dynamically recalculates subtotal, discounts, delivery fees, and taxes on every user interaction.',
      stack: 'Provider State Management · Dynamic Math Engine'
    },
    {
      num: '4',
      title: 'Pickup & Delivery Time Slot Scheduling',
      icon: <FaCalendarAlt />,
      business: 'Complete customer convenience! Users choose their preferred pickup and delivery dates and time slots that fit their daily busy schedules.',
      technical: 'Custom date/time picker logic integrated into checkout state flow, validating operating hours and available driver capacity.',
      stack: 'Date Picker · Time Slot Selection Engine · Operating Hour Guards'
    },
    {
      num: '5',
      title: 'Flexible & Secure Payment Gateway Integration',
      icon: <FaCreditCard />,
      business: 'Smooth, hassle-free checkout! Customers enjoy multiple convenient payment choices—online Cards, instant UPI, or traditional Cash on Delivery (COD)—with instant digital payment verification.',
      technical: 'Clean payment handler integrating secure payment gateway SDKs (Razorpay/Stripe/UPI) and Cash-on-Delivery state validation with backend invoice updates.',
      stack: 'Payment Gateway Integration · Payment State Handler'
    },
    {
      num: '6',
      title: 'Field Logistics Task Board (Driver View)',
      icon: <FaTruck />,
      business: 'Maximizes driver productivity! Delivery drivers get a clean, organized daily task list sorted into "Pickups" and "Deliveries" with clear status indicators.',
      technical: 'Built with declarative tabbed routing (GoRouter), rendering dynamic status badges and real-time task queue updates.',
      stack: 'Tabbed Routing (GoRouter) · Status Badges · Queue State'
    },
    {
      num: '7',
      title: 'Photo Proof of Collection (Anti-Loss Guarantee)',
      icon: <FaCamera />,
      business: 'Builds 100% customer trust! Drivers take a photo of the sealed laundry bag at customer pickup, creating a digital proof-of-custody that prevents lost items.',
      technical: 'Integrates native device camera via image_picker, performs client-side image compression, and uploads files asynchronously using Dio multipart requests.',
      stack: 'Hardware Camera (image_picker) · Multipart Dio Uploads'
    },
    {
      num: '8',
      title: 'Warehouse Intake & Smart Bill Reconciliation',
      icon: <FaClipboardCheck />,
      business: 'Fair & accurate billing for everyone! At the warehouse, staff weigh the laundry bag and count items. If the actual weight differs from the customer\'s estimate, the bill updates automatically with full transparency.',
      technical: 'Implements dynamic form fields, audit trail logging, and automatic invoice recalculation before approving processing.',
      stack: 'Dynamic Form Validation · Audit Reconciliation Logic'
    },
    {
      num: '9',
      title: 'Multi-Stage FIFO Processing Pipeline',
      icon: <FaStream />,
      business: 'Factory-standard quality control! Clothes move through a structured pipeline (Washing ➔ Drying ➔ Steam Pressing), ensuring no garments are skipped or damaged.',
      technical: 'Features a First-In, First-Out (FIFO) queue state machine with visual progress indicators and status progression guards.',
      stack: 'FIFO Queue State Machine · Visual Progress UI'
    },
    {
      num: '10',
      title: 'Real-Time Customer Order Tracking & Push Alerts',
      icon: <FaBell />,
      business: 'Keeps customers informed and happy! Customers follow their order\'s live status step-by-step—from pickup to washing and doorstep delivery—with instant phone notifications.',
      technical: 'Built with custom step-timeline widgets and firebase_messaging (FCM) for event-driven push notification alerts.',
      stack: 'Timeline Widget · firebase_messaging (FCM)'
    },
  ]

  const screenshots = [
    {
      src: '/washbee/select_pickup_location_on_map.jpeg',
      title: '1. Interactive Google Maps Pin-Drop Location Selection',
      flow: 'FEATURE 1: Pin-Drop Maps',
      desc: 'Interactive map picker using google_maps_flutter and reverse geocoding for pinpoint address accuracy.'
    },
    {
      src: '/washbee/order_types_pro_cleaning.jpeg',
      title: '2. Service & Garment Catalog Browsing',
      flow: 'FEATURE 2: Service Catalog',
      desc: 'Interactive catalog for browsing services (Wash & Fold, Pro Clean, Home Linens, Luxury Care).'
    },
    {
      src: '/washbee/item_selection_for cart.jpeg',
      title: '3. Smart Laundry Cart & Customization',
      flow: 'FEATURE 3: Smart Cart',
      desc: 'Custom garment selection and reactive pricing engine for piece-by-piece and per-kg hybrid calculation.'
    },
    {
      src: '/washbee/scheduling_pickup_and_delivery_time.jpeg',
      title: '4. Pickup & Delivery Slot Selection',
      flow: 'FEATURE 4: Slot Scheduling',
      desc: 'Flexible scheduling widget for selecting convenient pickup and delivery date/time slots.'
    },
    {
      src: '/washbee/customer_payment_order.jpeg',
      title: '5. Easy Payment Options & Checkout',
      flow: 'FEATURE 5: Easy Payments',
      desc: 'Secure checkout supporting Card, UPI, and Cash on Delivery with itemized receipt breakdown.'
    },
    {
      src: '/washbee/delivery_staff_homepage.jpeg',
      title: '6. Delivery Partner Task Board (Driver View)',
      flow: 'FEATURE 6: Driver Task Board',
      desc: 'Driver logistics queue with tabbed routing (Pickups vs Deliveries) and customer contact actions.'
    },
    {
      src: '/washbee/image_proof_uplod_delivery_staff.jpeg',
      title: '7. Photo Proof Verification & Bag Tag Screen',
      flow: 'FEATURE 7: Photo Proof',
      desc: 'Anti-loss photo capture proof of collection created by drivers upon bag collection.'
    },
    {
      src: '/washbee/adding_items_in_order.jpeg',
      title: '8. Warehouse Garment Intake & Reconciliation',
      flow: 'FEATURE 8: Smart Intake',
      desc: 'Warehouse intake form for verifying actual garment counts and weight before processing.'
    },
    {
      src: '/washbee/service_man_queue.jpeg',
      title: '9. Processing Queue Pipeline (Washing & Ironing)',
      flow: 'FEATURE 9: Service Pipeline',
      desc: 'Factory FIFO processing pipeline tracking orders through Washing, Drying, and Steam Pressing.'
    },
    {
      src: '/washbee/order_tracking_customer.jpeg',
      title: '10. Live Order Progress Timeline & Tracking',
      flow: 'FEATURE 10: Live Tracking',
      desc: 'Step-by-step order timeline widget with FCM push notifications from pickup to doorstep delivery.'
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
                <FaTshirt size={14} />
                <span>On-Demand Mobile Laundry Ecosystem</span>
              </div>

              <h1 className={styles.title}>
                <span className={styles.titleGradient}>WashBee</span>
              </h1>
              <p className={styles.meaningText}>
                Smart Mobile Ecosystem for On-Demand Laundry &amp; Dry Cleaning Logistics
              </p>

              <p className={styles.oneLiner}>
                A multi-role cross-platform mobile ecosystem serving Customers, Delivery Drivers, and Warehouse Staff. Features pin-drop GPS maps, hybrid per-kg/per-piece cart engine, anti-loss photo verification, and live order tracking timelines.
              </p>

              <div className={styles.platformPills}>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={14} /> Android
                </span>
                <span className={styles.platformBadge}>
                  <FaMobileAlt size={14} /> iOS
                </span>
                <span className={styles.techPill}>Flutter (Dart)</span>
                <span className={styles.techPill}>Provider</span>
                <span className={styles.techPill}>google_maps_flutter</span>
                <span className={styles.techPill}>Dio Client</span>
                <span className={styles.techPill}>Firebase FCM</span>
                <span className={styles.techPill}>Multi-Role Architecture</span>
              </div>

              {/* Keyword Showcase */}
              <div className={styles.keywordGrid}>
                <div style={{ width: '100%', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#60a5fa', marginBottom: '0.3rem', fontWeight: 700 }}>
                  ⚡ Technical Stack &amp; Architecture Highlights
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
                    src="/washbee/customer_homepage.jpeg"
                    alt="WashBee Customer Home Screen"
                    className={styles.realPhoneImage}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SECTION — APP SCREENSHOTS GALLERY */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>10 Core Features &amp; Screenshots Gallery</span>
            </h2>
            <p style={{ color: 'var(--gray-300)', fontSize: '1.05rem', marginBottom: '1.8rem' }}>
              Explore the complete 10-feature mobile ecosystem across Customer app, Delivery Partner logistics, and Warehouse intake.
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
                    <span style={{ fontSize: '0.75rem', color: '#60a5fa', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
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
                    <div style={{ color: '#60a5fa', fontSize: '0.95rem', fontWeight: 700 }}>
                      {screenshots[selectedIndex].title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600, marginTop: '2px' }}>
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

          {/* SECTION 2 — Feature Matrix Table */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Quick Overview: Business Impact vs. Technical Magic</span>
            </h2>

            <div className={styles.tableWrapper}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>🎯 Non-Technical &amp; Business Value</th>
                    <th>⚡ Technical Stack &amp; Architecture</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((f) => (
                    <tr key={f.num}>
                      <td style={{ fontWeight: 700, color: '#60a5fa', whiteSpace: 'nowrap' }}>
                        {f.num}. {f.title.split(' ')[1] || f.title}
                      </td>
                      <td>{f.business}</td>
                      <td style={{ color: '#38bdf8', fontWeight: 500 }}>{f.technical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 3 — Detailed Feature Breakdown */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>10 Core Features Walkthrough</span>
            </h2>

            <div className={styles.featuresGrid}>
              {features.map((f) => (
                <div key={f.num} className={styles.featureCard}>
                  <div className={styles.featureIconBadge}>
                    {f.icon}
                  </div>
                  <h3 className={styles.featureTitle}>
                    {f.num}. {f.title}
                  </h3>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      🎯 Business &amp; User Value
                    </div>
                    <p className={styles.featureDesc} style={{ margin: 0 }}>
                      {f.business}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                      ⚡ Technical Implementation
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
                      {f.technical}
                    </p>
                  </div>

                  <div style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.04)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.78rem', color: '#93c5fd' }}>
                    🛠️ {f.stack}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4 — Mobile Architecture & Engineering Highlights */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>Mobile Architecture &amp; Engineering Highlights</span>
            </h2>

            <div className={styles.archCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#60a5fa' }}>
                  Clean Architecture + Multi-Role Flutter Engine
                </span>
                <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontWeight: 600 }}>
                  Customer · Driver · Warehouse
                </span>
              </div>

              <div className={styles.archGrid}>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Single Multi-Role App</span>
                  <span className={styles.archValue}>Role-based navigation guards (Customer / Driver / Warehouse)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>State Management</span>
                  <span className={styles.archValue}>Provider (Reactive cart &amp; checkout states)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Networking Layer</span>
                  <span className={styles.archValue}>Dio REST client with auto JWT refresh interceptors</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Map &amp; Location SDK</span>
                  <span className={styles.archValue}>google_maps_flutter + geolocator reverse-geocoding</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Push Notifications</span>
                  <span className={styles.archValue}>firebase_messaging (FCM) event-driven alerts</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Media Uploads</span>
                  <span className={styles.archValue}>Hardware camera + multipart Dio file compression</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Payment Integrations</span>
                  <span className={styles.archValue}>Cards, instant UPI &amp; Cash on Delivery (COD)</span>
                </div>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>UI Performance</span>
                  <span className={styles.archValue}>Smooth 60 FPS modular widget breakdown</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5 — Call to Action */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Interested in WashBee Architecture or Technical Details?
            </h2>

            <p className={styles.ctaSubtitle}>
              I would be happy to discuss the multi-role Flutter architecture, Provider cart calculation engine, or Google Maps reverse-geocoding implementation.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/#contact" className={styles.btnPrimary}>
                <FaEnvelope />
                <span>Contact Me</span>
              </Link>
              <a
                href="https://github.com/KumarMohit85/WashBee"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <FaLayerGroup />
                <span>View Repository</span>
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
