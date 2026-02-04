'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaCode,
  FaJava,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaTools,
  FaGraduationCap,
  FaLightbulb,
} from 'react-icons/fa'
import {
  SiC,
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiFastapi,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiAmazonec2,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazondynamodb,
  SiSupabase,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiXcode,
  SiPostman,
  SiJira,
} from 'react-icons/si'
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
    icon: FaCode,
    title: 'Languages',
    skills: [
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'Dart', icon: SiDart },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Python', icon: FaPython },
      { name: 'SQL', icon: FaCode },
      { name: 'HTML/CSS', icon: FaHtml5, isMultiple: true, icons: [FaHtml5, FaCss3Alt] },
    ],
  },
  {
    icon: FaCode,
    title: 'Technologies/Frameworks',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Node.js', icon: FaNode },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    icon: FaCloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS EC2', icon: SiAmazonec2 },
      { name: 'AWS Lambda', icon: SiAwslambda },
      { name: 'API Gateway', icon: SiAmazonapigateway },
      { name: 'DynamoDB', icon: SiAmazondynamodb },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    icon: FaTools,
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: SiVisualstudiocode },
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'XCode', icon: SiXcode },
      { name: 'Postman', icon: SiPostman },
      { name: 'Jira', icon: SiJira },
      { name: 'Docker', icon: FaDocker },
    ],
  },
  {
    icon: FaGraduationCap,
    title: 'Coursework',
    skills: [
      { name: 'Data Structures & Algorithms', icon: FaCode },
      { name: 'OOP', icon: FaCode },
      { name: 'DBMS', icon: FaCode },
      { name: 'Operating Systems', icon: FaCode },
      { name: 'Computer Networks', icon: FaCode },
      { name: 'IoT', icon: FaCode },
      { name: 'LLD', icon: FaCode },
    ],
  },
  {
    icon: FaLightbulb,
    title: 'Concepts',
    skills: [
      { name: 'RESTful API', icon: FaCode },
      { name: 'WebSockets', icon: FaCode },
      { name: 'Microservices', icon: FaCode },
      { name: 'Clean Architecture', icon: FaCode },
      { name: 'MVVM', icon: FaCode },
      { name: 'DDD', icon: FaCode },
      { name: 'CQRS', icon: FaCode },
      { name: 'Hexagonal Architecture', icon: FaCode },
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
