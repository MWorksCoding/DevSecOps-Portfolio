import type {ReactNode} from 'react';
import styles from './contact.module.css';

function EmailIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" fill="#2563eb" />
      <path
        d="M5 8.5l7 5 7-5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="4"
        y="7"
        width="16"
        height="11"
        rx="1.5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function LinkedInIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" fill="#2563eb" />
      <path
        d="M7 10h2v7H7v-7zm1-1.5a1 1 0 110-2 1 1 0 010 2zM11 10h1.9v1h.02c.27-.5.93-1 1.88-1C16.6 10 17 11.18 17 12.89V17h-2v-3.7c0-.88-.02-2.01-1.22-2.01-1.23 0-1.42.96-1.42 1.95V17H11v-7z"
        fill="white"
      />
    </svg>
  );
}

export default function Contact(): ReactNode {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>

          <div className={styles.left}>
            <h2 className={styles.heading}>Contact me</h2>
            <p className={styles.intro}>Include information like:</p>
            <ul className={styles.bullets}>
              <li>Feel free to reach out with job offers or opportunities</li>
              <li>What role are you looking for?</li>
              <li>How will you contribute to the new team?</li>
              <li>Are you open for remote work or even relocation?</li>
            </ul>
          </div>

          <div className={styles.right}>
            <p className={styles.tagline}>Looking forward to hearing from you!</p>
            <div className={styles.links}>
              <a
                href="mailto:contact@marius-katzer.com"
                className={styles.contactLink}
              >
                <span className={styles.iconCircle}>
                  <EmailIcon />
                </span>
                contact@marius-katzer.com
              </a>
              <a
                href="https://www.linkedin.com/in/marius-katzer"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.iconCircle}>
                  <LinkedInIcon />
                </span>
                Profile Page
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
