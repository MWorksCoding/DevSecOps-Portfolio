import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './hero.module.css';

export default function Hero(): ReactNode {
  return (
    <section id="about-me" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.greeting}>Hey there. 👋 I am</p>
            <h1 className={styles.name}>Marius Katzer</h1>
            <p className={styles.title}>DevSecOps Engineer</p>
            <p className={styles.bio}>
              I am a German speaking Web Developer from Hanau, Germany, who loves
              building web apps with JavaScript &amp; Angular. Feel free to take a
              look at some of my projects that show you my experience with
              programming. Starting with VBA (Visual Basic for Applications) to
              accelerate and automate work processes. I realized programming helps to
              increase productivity and profits in the company. So I decided to join
              the Developer Academy in Munich to deepen my knowledge and skills in
              programming as a front-end developer. Automation is the key to the
              future. With this perspective I want to help companies to be profitable
              in the future through my skills.
            </p>
            <a href="#contact" className={styles.ctaButton}>
              Contact me
            </a>
          </div>
          <div className={styles.photoWrapper}>
            <img
              src={useBaseUrl('img/profile.png')}
              alt="MK Profile"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
