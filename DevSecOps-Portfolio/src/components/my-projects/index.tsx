import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './my-projects.module.css';

interface ProjectTag {
  label: string;
  iconFile: string;
}

interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  thumbFile: string;
  docsHref: string;
  githubHref: string;
}

const projects: Project[] = [
  {
    title: 'Baby Tools Shop',
    description:
      'A Django web application containerized with Docker, served via Gunicorn and WhiteNoise. Deployable on any V-Server with a single Docker run command.',
    tags: [
      {label: 'Shell scripting', iconFile: 'Terminal.png'},
      {label: 'Python', iconFile: 'Python.png'},
      {label: 'Container', iconFile: 'Docker.png'},
    ],
    thumbFile: 'baby_tools_shop.png',
    docsHref: '/docs/projects/baby-tools-shop',
    githubHref: 'https://github.com/MWorksCoding/baby-tools-shop',
  },
  {
    title: 'Truck Signs API',
    description:
      'Full Django REST backend with a dedicated PostgreSQL container, networked via Docker and exposed via Gunicorn on port 8020.',
    tags: [
      {label: 'YAML', iconFile: 'YAML.png'},
      {label: 'Shell scripting', iconFile: 'Terminal.png'},
      {label: 'Python', iconFile: 'Python.png'},
      {label: 'Container', iconFile: 'Docker.png'},
    ],
    thumbFile: 'truck_signs.png',
    docsHref: '/docs/projects/truck-signs-api',
    githubHref: 'https://github.com/MWorksCoding/truck_signs_api',
  },
  {
    title: 'OWASP Juice Shop',
    description:
      'Hands-on security challenges covering SQL Injection, Mass Assignment, OSINT via EXIF metadata, and Stored XSS — all documented with exploit payloads and recommendations.',
    tags: [
      {label: 'Shell scripting', iconFile: 'Terminal.png'},
      {label: 'IT Security', iconFile: 'IT_Security.png'},
    ],
    thumbFile: 'owasp_juice_shop.png',
    docsHref: '/docs/owasp-juice-shop/login-admin',
    githubHref: 'https://github.com/juice-shop/juice-shop',
  },
  {
    title: 'Minecraft Server',
    description:
      'A Docker-powered Minecraft server built manually from the official JAR — no ready-made images. Includes a Python mcstatus checker to query the server state.',
    tags: [
      {label: 'YAML', iconFile: 'YAML.png'},
      {label: 'Shell scripting', iconFile: 'Terminal.png'},
      {label: 'Container', iconFile: 'Docker.png'},
    ],
    thumbFile: 'Minecraft.png',
    docsHref: '/docs/projects/minecraft-server',
    githubHref: 'https://github.com/MWorksCoding/minecraft-server',
  },
  {
    title: 'WordPress Docker',
    description:
      'A fully containerized WordPress + MariaDB environment using Docker Compose. One command to build, one to start — ready for local dev or production on a V-Server.',
    tags: [
      {label: 'YAML', iconFile: 'YAML.png'},
      {label: 'Shell scripting', iconFile: 'Terminal.png'},
      {label: 'Container', iconFile: 'Docker.png'},
    ],
    thumbFile: 'Wordpress.png',
    docsHref: '/docs/projects/wordpress-docker',
    githubHref: 'https://github.com/MWorksCoding/wordpress-docker',
  },
];

export default function MyProjects(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];
  const iconBase = useBaseUrl('img/skills/');

  return (
    <section id="my-projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My project highlights</h2>

        {/* ── Desktop: interactive list + card panel ── */}
        <div className={styles.layout}>
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

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{active.title}</h3>
              <div className={styles.tags}>
                {active.tags.map((tag) => (
                  <span key={tag.label} className={styles.tag}>
                    <img src={iconBase + tag.iconFile} alt={tag.label} className={styles.tagIcon} />
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.cardBody}>
              <img
                src={iconBase + active.thumbFile}
                alt={active.title}
                className={styles.thumbnail}
              />
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

        {/* ── Mobile: first 3 projects as stacked cards ── */}
        <div className={styles.mobileView}>
          {projects.slice(0, 3).map((project, idx) => (
            <div key={project.title} className={styles.mobileCard}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  {idx + 1}. {project.title}
                </h3>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag.label} className={styles.tag}>
                      <img src={iconBase + tag.iconFile} alt={tag.label} className={styles.tagIcon} />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={iconBase + project.thumbFile}
                alt={project.title}
                className={styles.mobileThumbnail}
              />
              <p className={styles.description}>{project.description}</p>
              <div className={styles.cardActions}>
                <Link to={project.docsHref} className={styles.docsBtn}>
                  Documentation
                </Link>
                <a
                  href={project.githubHref}
                  className={styles.githubBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

          <p className={styles.mobileIntro}>
            These three projects cover the core pillars of this portfolio — deployment,
            automation, and security. Each one presented its own real-world challenges,
            from configuring containerised application stacks to analysing vulnerabilities
            from an attacker's perspective. If you'd like to explore the implementation
            details, architecture decisions, or security findings behind each project,
            the full documentation is just one click away.
          </p>

          <Link to="/docs/projects/v-server-setup" className={styles.moreLink}>
            ↳ see more projects
          </Link>
        </div>

      </div>
    </section>
  );
}
