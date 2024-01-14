import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
      <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl('about/aboutImg.png')} 
                alt="about image"
                className={styles.aboutImg} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorImg.png')} alt="cursor image" className={styles.itemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I am a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverImg.png')} alt="server image" className={styles.itemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimizing back-end systems and APIs.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/designImg.png')} alt="design image" className={styles.itemImg}/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have created design systems as well.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default About
