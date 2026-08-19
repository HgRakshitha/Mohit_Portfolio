'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaCode,
  FaJava,
  FaJs,
  FaPython,
  FaNode,
  FaDocker,
  FaCloud,
  FaServer,
  FaBolt,
  FaDatabase,
  FaCubes,
  FaAws,
  FaKey,
  FaUserShield,
  FaNetworkWired,
  FaBroadcastTower,
  FaSitemap,
  FaProjectDiagram,
  FaLayerGroup,
  FaTasks,
  FaCogs,
  FaMobileAlt,
} from 'react-icons/fa'
import {
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiFastapi,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiFirebase,
  SiPrisma,
  SiPm2,
  SiSocketdotio,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TbApi, TbHexagons, TbBinaryTree } from 'react-icons/tb'
import { BiData } from 'react-icons/bi'
import styles from './Skills.module.css'
import { IconType } from 'react-icons'

interface Skill {
  name: string
  icon: IconType
  isMultiple?: boolean
  icons?: IconType[]
}

interface SkillCategory {
  icon: IconType
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: FaMobileAlt,
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Dart', icon: SiDart },
      { name: 'Riverpod', icon: FaCubes },
      { name: 'Provider', icon: FaLayerGroup },
      { name: 'GoRouter', icon: FaSitemap },
      { name: 'fpdart', icon: FaCode },
      { name: 'Dio', icon: TbApi },
    ],
  },
  {
    icon: FaCode,
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Dart', icon: SiDart },
      { name: 'Python', icon: FaPython },
      { name: 'SQL', icon: BiData },
    ],
  },
  {
    icon: FaServer,
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: FaNode },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: TbApi },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'RBAC', icon: FaUserShield },
    ],
  },
  {
    icon: FaBolt,
    title: 'Real-Time & Caching',
    skills: [
      { name: 'WebSockets', icon: SiSocketdotio },
      { name: 'SSE', icon: FaBroadcastTower },
      { name: 'Redis', icon: SiRedis },
      { name: 'FCM', icon: SiFirebase },
    ],
  },
  {
    icon: FaDatabase,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Prisma ORM', icon: SiPrisma },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    icon: FaCloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, Lambda, API Gateway)', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'PM2', icon: SiPm2 },
    ],
  },
  {
    icon: FaCubes,
    title: 'Architecture',
    skills: [
      { name: 'Clean Architecture', icon: FaLayerGroup },
      { name: 'Microservices', icon: FaSitemap },
      { name: 'DDD', icon: TbBinaryTree },
      { name: 'CQRS', icon: FaNetworkWired },
      { name: 'Hexagonal', icon: TbHexagons },
      { name: 'System Design', icon: FaProjectDiagram },
      { name: 'Background Jobs', icon: FaTasks },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <motion.div
        ref={ref}
        className={styles.skillsContainer}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {skillCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon
          return (
            <motion.div
              key={categoryIndex}
              className={styles.categorySection}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIconWrapper}>
                  <CategoryIcon className={styles.categoryIcon} />
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon
                  const isMultiple = skill.isMultiple && skill.icons
                  return (
                    <motion.div
                      key={skillIndex}
                      className={styles.skillItem}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        z: 10,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isMultiple ? (
                        <span className={styles.multipleIcons}>
                          {skill.icons!.map((Icon, idx) => (
                            <Icon key={idx} className={styles.skillIcon} />
                          ))}
                        </span>
                      ) : (
                        <SkillIcon className={styles.skillIcon} />
                      )}
                      <span className={styles.skillName}>{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
