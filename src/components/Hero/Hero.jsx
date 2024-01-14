import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
              <Typewriter className={styles.title} onInit={(typewriter) => {
                typewriter.typeString("Welcome, I'm Annas.").start();
              }}/>
            </h1>
            <p className={styles.description}>I am a fourth year Computer Science Student at Carleton University seeking to expand my knowledge and increase my experience in the field. Reach out if you'd like to learn more!</p>
            <a href="mailto:annasmahgoub@outlook.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImg.png')} alt="hero image of me." className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
