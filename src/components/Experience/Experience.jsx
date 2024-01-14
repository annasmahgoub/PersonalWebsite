import React from 'react'
import { getImageUrl } from '../../utils'
import skills from '../../data/skills.json'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
          skills.map((skill, id) => {
            return <div className={styles.skill} key={id}>
              <div className={styles.skillImg}><img src={getImageUrl(skill.image)} alt={skill.title} /></div>
              <p>{skill.title}</p>
            </div>
          })
          }</div>
      </div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Experience
