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
              I'm a Fullstack Developer turned DevSecOps Engineer based in Hanau, Germany. Since 2023 I've been working as a certified Frontend Developer at manufacturing industry, where I design and maintain internal and external Angular applications in an agile team. My backend experience covers Python, Django and REST APIs, paired with solid knowledge of PostgreSQL, HTTP, CORS and SSL. Through the Developer Akademie's DevSecOps programme I extended my skill set into containerisation with Docker, infrastructure automation through Shell scripting and YAML, Linux server administration, and application security with OWASP. I believe that security and automation are not afterthoughts — they belong at every stage of the development lifecycle. I'm excited to bring that full-stack perspective to a team that thinks the same way.
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
