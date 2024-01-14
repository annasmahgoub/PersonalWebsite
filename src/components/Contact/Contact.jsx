import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Cantact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <ul className={styles.links}>
            <li className={styles.link}>
            <a href="mailto:annasmahgoub@outlook.com"><img src={getImageUrl('contact/email.png')} alt="email icon" />Email</a>
            </li>
            <li className={styles.link}>
            <a href="https://www.linkedin.com/in/annas-mahgoub-0a636b290/"><img src={getImageUrl('contact/linkedin.png')} alt="linkedin icon"/>Linkedin</a>
            </li>
            <li className={styles.link}>
                <a href="https://www.github.com/annasmahgoub"><img src={getImageUrl('contact/github.png')} alt="github icon" />GitHub</a>
            </li>
            <li className={styles.link}>
                <a href={getImageUrl('resume.pdf')}><img src={getImageUrl('contact/resume.png')} alt="github icon" />Resume</a>
            </li>
        </ul>
        <p className={styles.copyright}>Copyright &copy; 2024 Annas Mahgoub</p>
    </footer>
  )
}

export default Cantact
