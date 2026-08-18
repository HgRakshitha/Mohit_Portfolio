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
} from 'react-icons/fa'
import CustomCursor from '@/components/CustomCursor'
import styles from './WashBee.module.css'

export default function WashBeePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const keywords = [
    'Flutter (Dart)', 'Provider State Management', 'google_maps_flutter', 'geolocator & Reverse Geocoding',
    'GoRouter Navigation', 'Dio HTTP Client & Interceptors', 'UPI & Card Payments',
    'Firebase Push Notifications (FCM)', 'Hardware Camera Uploads', 'Multi-Role Architecture'
  ]

  const features = [
    {
      num: '1',
      title: 'Interactive Google Maps & Pin-Drop Location Selection',
      icon: <FaMapMarkerAlt />,
      desc: 'Customers drop a precise pin on an interactive map so pickup drivers arrive at the exact location without needing back-and-forth phone calls.',
      tag: 'google_maps_flutter · geolocator'
    },
    {
      num: '2',
      title: 'Interactive Service & Garment Catalog Browsing',
      icon: <FaTshirt />,
      desc: 'Customers easily browse laundry services (Wash & Fold, Steam Press, Dry Cleaning, Shoe Care) and customize individual clothing items.',
      tag: 'Dynamic Catalog · Category Filters'
    },
    {
      num: '3',
      title: 'Smart Laundry Cart & Hybrid Price Calculator',
      icon: <FaShoppingCart />,
      desc: 'Customers can mix individual delicate items with bulk laundry by weight (per-KG), seeing instant transparent pricing before ordering.',
      tag: 'Provider State · Hybrid Pricing'
    },
    {
      num: '4',
      title: 'Pickup & Delivery Time Slot Scheduling',
      icon: <FaCalendarAlt />,
      desc: 'Users choose their preferred pickup and delivery dates and time slots that fit their daily schedules.',
      tag: 'Date & Time Picker · Capacity Guards'
    },
    {
      num: '5',
      title: 'Flexible & Secure Payment Checkout',
      icon: <FaCreditCard />,
      desc: 'Customers enjoy multiple convenient payment choices—online Cards, instant UPI, or Cash on Delivery (COD).',
      tag: 'Cards · UPI · Cash on Delivery'
    },
    {
      num: '6',
      title: 'Field Logistics Task Board (Driver View)',
      icon: <FaTruck />,
      desc: 'Delivery drivers get a clean, organized daily task list sorted into Pickups and Deliveries with status indicators.',
      tag: 'Tabbed Routing · Task Queue'
    },
    {
      num: '7',
      title: 'Photo Proof of Collection (Anti-Loss Guarantee)',
      icon: <FaCamera />,
      desc: 'Drivers take a photo of the sealed laundry bag at customer pickup, creating a digital proof-of-custody that prevents lost items.',
      tag: 'Hardware Camera · Dio Uploads'
    },
    {
      num: '8',
      title: 'Warehouse Intake & Smart Bill Reconciliation',
      icon: <FaClipboardCheck />,
      desc: 'Warehouse staff weigh and count items. If the actual weight differs from the customer\'s estimate, the bill updates automatically.',
      tag: 'Audit Logging · Auto Invoicing'
    },
    {
      num: '9',
      title: 'Multi-Stage FIFO Processing Pipeline',
      icon: <FaStream />,
      desc: 'Clothes move through a structured pipeline (Washing ➔ Drying ➔ Steam Pressing), ensuring quality control.',
      tag: 'FIFO State Machine · Visual Pipeline'
    },
    {
      num: '10',
      title: 'Real-Time Customer Order Tracking & Push Alerts',
      icon: <FaBell />,
      desc: 'Customers follow their order\'s live status step-by-step—from pickup to washing and doorstep delivery—with instant phone alerts.',
      tag: 'Timeline Widget · Firebase FCM'
    },
  ]

  const screenshots = [
    {
      src: '/washbee/select_pickup_location_on_map.jpeg',
      title: '1. Interactive Google Maps Pin-Drop Location Selection',
      flow: 'FEATURE 1',
      desc: 'Interactive map picker using google_maps_flutter and reverse geocoding for pinpoint address accuracy.'
    },
    {
      src: '/washbee/order_types_pro_cleaning.jpeg',
      title: '2. Service & Garment Catalog Browsing',
      flow: 'FEATURE 2',
      desc: 'Interactive catalog for browsing services (Wash & Fold, Pro Clean, Home Linens, Luxury Care).'
    },
    {
      src: '/washbee/item_selection_for cart.jpeg',
      title: '3. Smart Laundry Cart & Customization',
      flow: 'FEATURE 3',
      desc: 'Custom garment selection and reactive pricing engine for piece-by-piece and per-kg hybrid calculation.'
    },
    {
      src: '/washbee/scheduling_pickup_and_delivery_time.jpeg',
      title: '4. Pickup & Delivery Slot Selection',
      flow: 'FEATURE 4',
      desc: 'Flexible scheduling widget for selecting convenient pickup and delivery date/time slots.'
    },
    {
      src: '/washbee/customer_payment_order.jpeg',
      title: '5. Easy Payment Options & Checkout',
      flow: 'FEATURE 5',
      desc: 'Secure checkout supporting Card, UPI, and Cash on Delivery with itemized receipt breakdown.'
    },
    {
      src: '/washbee/delivery_staff_homepage.jpeg',
      title: '6. Delivery Partner Task Board (Driver View)',
      flow: 'FEATURE 6',
      desc: 'Driver logistics queue with tabbed routing (Pickups vs Deliveries) and customer contact actions.'
    },
    {
      src: '/washbee/image_proof_uplod_delivery_staff.jpeg',
      title: '7. Photo Proof Verification & Bag Tag Screen',
      flow: 'FEATURE 7',
      desc: 'Anti-loss photo capture proof of collection created by drivers upon bag collection.'
    },
    {
      src: '/washbee/adding_items_in_order.jpeg',
      title: '8. Warehouse Garment Intake & Reconciliation',
      flow: 'FEATURE 8',
      desc: 'Warehouse intake form for verifying actual garment counts and weight before processing.'
    },
    {
      src: '/washbee/service_man_queue.jpeg',
      title: '9. Processing Queue Pipeline (Washing & Ironing)',
      flow: 'FEATURE 9',
      desc: 'Factory FIFO processing pipeline tracking orders through Washing, Drying, and Steam Pressing.'
    },
    {
      src: '/washbee/order_tracking_customer.jpeg',
      title: '10. Live Order Progress Timeline & Tracking',
      flow: 'FEATURE 10',
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
              </div>

              {/* Keyword Showcase */}
              <div className={styles.keywordGrid}>
                <div style={{ width: '100%', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#60a5fa', marginBottom: '0.3rem', fontWeight: 700 }}>
                  ⚡ Core Technologies &amp; Features
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
              <span className={styles.titleGradient}>App Screenshots Gallery</span>
            </h2>
            <p style={{ color: 'var(--gray-300)', fontSize: '1.05rem', marginBottom: '1.8rem' }}>
              Explore the complete 10-feature mobile application across Customer ordering, Driver logistics, and Warehouse intake.
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

          {/* SECTION 2 — Feature Showcase */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>10 Core Mobile Features</span>
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
                  
                  <p className={styles.featureDesc} style={{ marginBottom: '1rem' }}>
                    {f.desc}
                  </p>

                  <div style={{ padding: '0.45rem 0.8rem', background: 'rgba(255,255,255,0.04)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.78rem', color: '#93c5fd', width: 'fit-content' }}>
                    ⚡ {f.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 — Mobile Architecture Highlights */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.titleGradient}>System Architecture &amp; Key Highlights</span>
            </h2>

            <div className={styles.archCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#60a5fa' }}>
                  Flutter Multi-Role Architecture
                </span>
                <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '9999px', fontWeight: 600 }}>
                  Customer · Driver · Warehouse
                </span>
              </div>

              <div className={styles.archGrid}>
                <div className={styles.archRow}>
                  <span className={styles.archLabel}>Single Multi-Role App</span>
                  <span className={styles.archValue}>Role-based navigation for Customer, Driver &amp; Warehouse</span>
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
                  <span className={styles.archValue}>Hardware camera + compressed Dio file uploads</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4 — Call to Action */}
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Interested in WashBee Architecture or Case Study Details?
            </h2>

            <p className={styles.ctaSubtitle}>
              Feel free to reach out to discuss the mobile engineering, Provider state management, or Google Maps integration.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/#contact" className={styles.btnPrimary}>
                <FaEnvelope />
                <span>Contact Me</span>
              </Link>
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
