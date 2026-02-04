'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <p className={styles.text}>
            Made with <FaHeart className={styles.heart} /> by Mohit Kumar Pal
          </p>
          <p className={styles.copyright}>© {new Date().getFullYear()} All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}
