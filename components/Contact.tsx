'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: FaEnvelope, text: 'mohit.official.one@gmail.com', href: 'mailto:mohit.official.one@gmail.com' },
  { icon: FaPhone, text: '+91-8581017107', href: 'tel:+918581017107' },
  { icon: FaMapMarkerAlt, text: 'Bengaluru, Karnataka - 560068', href: null },
  { icon: FaLinkedin, text: 'linkedin.com/mohitkumarpal', href: 'https://linkedin.com/mohitkumarpal' },
  { icon: FaGithub, text: 'github.com/KumarMohit85', href: 'https://github.com/KumarMohit85' },
]

const achievements = [
  'LeetCode | Ranked 2686 in Biweekly Contest 125.',
  'Ranked under top 10 at the Hack This Fall 3.0 Hackathon.',
  'Led teams to the second round of HackOn with Amazon and the Semi-Finals of Flipkart Grid 5.0.',
  'Attained an All India Rank of 3 in the India Innovates Product Challenge organized by IIT Kharagpur.',
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const body = encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)
    const mailtoLink = `mailto:mohit.official.one@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    
    setTimeout(() => {
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Contact & Achievements</span>
          </h2>
          <p className="section-subtitle">
            Get in touch or check out my achievements
          </p>

          <div className={styles.content}>
            <div className={styles.contactGrid}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className={`glass-effect card ${styles.contactCard}`}
              >
                <h3 className={styles.cardTitle}>Get In Touch</h3>
                <div className={styles.contactList}>
                  {contactInfo.map((info, index) => {
                    const Component = info.href ? motion.a : motion.div
                    const props = info.href
                      ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
                      : {}
                    
                    return (
                      <Component
                        key={index}
                        {...props}
                        className={`${styles.contactItem} ${info.href ? styles.clickable : ''}`}
                        whileHover={info.href ? { x: 5 } : {}}
                      >
                        <info.icon className={styles.contactIcon} size={20} />
                        <span>{info.text}</span>
                      </Component>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className={`glass-effect card ${styles.formCard}`}
              >
                <h3 className={styles.cardTitle}>Send a Message</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={`form-input ${styles.input}`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={`form-input ${styles.input}`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className={`form-textarea ${styles.textarea}`}
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${styles.submitBtn}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={styles.successMessage}
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={styles.errorMessage}
                    >
                      Failed to send message. Please try again.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className={`glass-effect card ${styles.achievementsCard}`}
            >
              <h3 className={styles.cardTitle}>Achievements</h3>
              <div className={styles.achievementsGrid}>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className={styles.achievementItem}
                  >
                    <span className={styles.trophy}>🏆</span>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
