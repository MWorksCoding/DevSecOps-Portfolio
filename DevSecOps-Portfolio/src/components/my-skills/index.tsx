import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './my-skills.module.css';

interface Skill {
  title: string;
  iconSrc: string;
  customIcon?: ReactNode;
  points: string[];
}

function TerminalIcon(): ReactNode {
  return (
    <div className={styles.terminalIcon}>
      <span className={styles.terminalPrompt}>&gt;_</span>
    </div>
  );
}

function ShieldIcon(): ReactNode {
  return (
    <svg className={styles.shieldIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6v5c0 5.25 3.4 10.15 8 11.35C16.6 21.15 20 16.25 20 11V6L12 2z" fill="#2563eb" />
      <path d="M10 17l-4-4 1.41-1.42L10 14.17l6.59-6.58L18 9l-8 8z" fill="white" />
    </svg>
  );
}

function YamlIcon(): ReactNode {
  return (
    <div className={styles.yamlIcon}>
      <span className={styles.yamlTop}>YA</span>
      <span className={styles.yamlBottom}>ML</span>
    </div>
  );
}

const ICON_BASE = '/img/skills/';

const skills: Skill[] = [
  {
    title: 'HTML',
    iconSrc: `${ICON_BASE}html.svg`,
    points: [
      'Structuring Docusaurus documentation with semantic markup',
      'Building MDX components for interactive documentation',
      'Creating accessible, standards-compliant web pages',
      'Writing custom page layouts for the Docusaurus portfolio',
    ],
  },
  {
    title: 'CSS',
    iconSrc: `${ICON_BASE}css.svg`,
    points: [
      'Styling React components using CSS Modules for scoped styles',
      'Building responsive layouts with Flexbox and CSS Grid',
      'Customizing Docusaurus themes with CSS custom properties',
      'Designing mobile-first, accessible user interfaces',
    ],
  },
  {
    title: 'Static site generator',
    iconSrc: `${ICON_BASE}docusaurus.svg`,
    points: [
      'Building this DevSecOps portfolio using Docusaurus',
      'Configuring multi-sidebar documentation structures',
      'Deploying static sites automatically to GitHub Pages',
      'Authoring documentation in MDX with embedded React components',
    ],
  },
  {
    title: 'Python',
    iconSrc: `${ICON_BASE}python.svg`,
    points: [
      'Containerizing Django applications for production deployment',
      'Building REST APIs for e-commerce backends (Truck Signs API)',
      'Configuring Gunicorn WSGI servers for production use',
      'Automating database migrations and superuser creation on startup',
    ],
  },
  {
    title: 'Shell scripting',
    iconSrc: '',
    customIcon: <TerminalIcon />,
    points: [
      'Automating V-Server setup and SSH key configuration',
      'Hardening servers by disabling password authentication',
      'Writing CI/CD pipeline scripts for Docker deployments',
      'Managing containers, networks, and volumes via CLI commands',
    ],
  },
  {
    title: 'Yaml',
    iconSrc: '',
    customIcon: <YamlIcon />,
    points: [
      'Writing GitHub Actions workflows for CI/CD pipelines',
      'Configuring multi-service Docker Compose stacks',
      'Defining environment-specific deployment configurations',
      'Managing reusable workflow templates for automated deployments',
    ],
  },
  {
    title: 'Container',
    iconSrc: `${ICON_BASE}docker.svg`,
    points: [
      'Containerizing Django, Angular, and Minecraft server applications',
      'Orchestrating multi-container stacks with Docker Compose',
      'Publishing images to GitHub Container Registry (GHCR)',
      'Managing Docker networks and volumes for data persistence',
    ],
  },
  {
    title: 'CI/CD with GitHub Actions',
    iconSrc: `${ICON_BASE}githubactions.svg`,
    points: [
      'Automating builds and deployments with GitHub Actions',
      'Deploying to GitHub Pages and VPS servers via SSH',
      'Auto-creating pull requests for feature branches',
      'Building and pushing Docker images to GHCR on every commit',
    ],
  },
  {
    title: 'IT Security',
    iconSrc: '',
    customIcon: <ShieldIcon />,
    points: [
      'Identifying SQL Injection, XSS, and Mass Assignment vulnerabilities',
      'Intercepting and manipulating HTTP requests with Burp Suite',
      'Analysing OWASP Top 10 vulnerabilities in Juice Shop CTF',
      'Implementing SSH hardening and disabling password-based auth',
    ],
  },
];

interface SkillCardProps {
  skill: Skill;
  iconBasePath: string;
}

function SkillCard({skill, iconBasePath}: SkillCardProps): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {skill.customIcon ?? (
          <img
            src={`${iconBasePath}${skill.iconSrc.replace(ICON_BASE, '')}`}
            alt={skill.title}
            className={styles.icon}
          />
        )}
      </div>
      <p className={styles.label}>{skill.title}</p>
      <ul className={styles.points}>
        {skill.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function MySkills(): ReactNode {
  const iconBasePath = useBaseUrl('img/skills/');

  return (
    <section id="my-skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} iconBasePath={iconBasePath} />
          ))}
        </div>
      </div>
    </section>
  );
}
