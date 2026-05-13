import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './my-projects.module.css';

interface ProjectTag {
  label: string;
}

interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  thumbColor: string;
  thumbLabel: string;
  docsHref: string;
  githubHref: string;
}

const projects: Project[] = [
  {
    title: 'Baby Tools Shop',
    description:
      'A Django web application containerized with Docker, served via Gunicorn and WhiteNoise. Deployable on any V-Server with a single Docker run command.',
    tags: [{label: 'Python'}, {label: 'Django'}, {label: 'Container'}],
    thumbColor: '#092e20',
    thumbLabel: '🛒',
    docsHref: '/docs/projects/baby-tools-shop',
    githubHref: 'https://github.com/MWorksCoding/baby-tools-shop',
  },
  {
    title: 'Truck Signs API',
    description:
      'Full Django REST backend with a dedicated PostgreSQL container, networked via Docker and exposed via Gunicorn on port 8020.',
    tags: [{label: 'Python'}, {label: 'PostgreSQL'}, {label: 'Container'}],
    thumbColor: '#0d1f2d',
    thumbLabel: '🚛',
    docsHref: '/docs/projects/truck-signs-api',
    githubHref: 'https://github.com/MWorksCoding/truck_signs_api',
  },
  {
    title: 'OWASP Juice Shop',
    description:
      'Hands-on security challenges covering SQL Injection, Mass Assignment, OSINT via EXIF metadata, and Stored XSS — all documented with exploit payloads and recommendations.',
    tags: [{label: 'IT Security'}, {label: 'Burp Suite'}, {label: 'OWASP'}],
    thumbColor: '#1a2a1a',
    thumbLabel: '🔐',
    docsHref: '/docs/owasp-juice-shop/login-admin',
    githubHref: 'https://github.com/juice-shop/juice-shop',
  },
  {
    title: 'Minecraft Server',
    description:
      'A Docker-powered Minecraft server built manually from the official JAR — no ready-made images. Includes a Python mcstatus checker to query the server state.',
    tags: [{label: 'YAML'}, {label: 'Shell scripting'}, {label: 'Container'}],
    thumbColor: '#2d5a27',
    thumbLabel: '🎮',
    docsHref: '/docs/projects/minecraft-server',
    githubHref: 'https://github.com/MWorksCoding/minecraft-server',
  },
  {
    title: 'WordPress Docker',
    description:
      'A fully containerized WordPress + MariaDB environment using Docker Compose. One command to build, one to start — ready for local dev or production on a V-Server.',
    tags: [{label: 'YAML'}, {label: 'Shell scripting'}, {label: 'Container'}],
    thumbColor: '#21759b',
    thumbLabel: '📝',
    docsHref: '/docs/projects/wordpress-docker',
    githubHref: 'https://github.com/MWorksCoding/wordpress-docker',
  },
];

export default function MyProjects(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="my-projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My project highlights</h2>
        <div className={styles.layout}>

          {/* Left: numbered project list */}
          <nav className={styles.list}>
            {projects.map((project, idx) => (
              <button
                key={project.title}
                className={idx === activeIndex ? styles.activeItem : styles.listItem}
                onClick={() => setActiveIndex(idx)}
              >
                <span className={styles.itemNumber}>{idx + 1}.</span>
                <span>{project.title}</span>
              </button>
            ))}
            <Link to="/docs/projects/v-server-setup" className={styles.moreLink}>
              ↳ see more projects
            </Link>
          </nav>

          {/* Right: active project card */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{active.title}</h3>
              <div className={styles.tags}>
                {active.tags.map((tag) => (
                  <span key={tag.label} className={styles.tag}>{tag.label}</span>
                ))}
              </div>
            </div>
            <div className={styles.cardBody}>
              <div
                className={styles.thumbnail}
                style={{backgroundColor: active.thumbColor}}
              >
                <span className={styles.thumbEmoji}>{active.thumbLabel}</span>
              </div>
              <p className={styles.description}>{active.description}</p>
            </div>
            <div className={styles.cardActions}>
              <Link to={active.docsHref} className={styles.docsBtn}>
                Documentation
              </Link>
              <a
                href={active.githubHref}
                className={styles.githubBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
