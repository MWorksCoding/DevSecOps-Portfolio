import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './my-skills.module.css';

interface Skill {
  title: string;
  iconSrc: string;
  iconSrcLight?: string;
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
    iconSrc: `${ICON_BASE}HTML.png`,
    points: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    title: 'CSS',
    iconSrc: `${ICON_BASE}CSS.png`,
    points: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    title: 'Static site generator',
    iconSrc: `${ICON_BASE}Group.png`,
    points: [
      'Search functionality',
      'Static website and customization',
      'Tags, categories, and RSS feeds',
      'Translation',
    ],
  },
  {
    title: 'Python',
    iconSrc: `${ICON_BASE}Python.png`,
    points: [
      'Build APIs',
      'Spam filtering, recommendation systems',
      'Automate software testing',
      'Using libraries like Tkinter, PyQt, or Kivy',
    ],
  },
  {
    title: 'Shell scripting',
    iconSrc: `${ICON_BASE}Terminal.png`,
    iconSrcLight: `${ICON_BASE}Terminal_dark.png`,
    points: [
      'Adding new users and setting their permissions',
      'Performing calculations or running statistical analysis on data',
      'Conditional statements, loops, functions',
    ],
  },
  {
    title: 'Yaml',
    iconSrc: `${ICON_BASE}YAML.png`,
    iconSrcLight: `${ICON_BASE}YAML_dark.png`,
    points: [
      'A Kubernetes deployment',
      'Store settings like database connections',
      'Environment-specific variables',
      'Complex data structures represent lists and maps',
    ],
  },
  {
    title: 'Container',
    iconSrc: `${ICON_BASE}Docker.png`,
    points: [
      'CI/CD pipelines',
      'Automate building, testing, deploying applications',
      'Build microservices-based applications',
    ],
  },
  {
    title: 'CI/CD with GitHub Actions',
    iconSrc: `${ICON_BASE}GitHub_Actions.png`,
    points: [
      'Automated builds and tests',
      'Pre-built actions for common tasks',
      'Push, pull request, or schedule',
      'Automated deployments',
    ],
  },
  {
    title: 'IT Security',
    iconSrc: `${ICON_BASE}IT_Security.png`,
    points: [
      'Simulate attacks and identify vulnerabilities',
      'Setting up multi-factor authentication',
      'Login security',
      'Implement authentication and authorization mechanisms',
    ],
  },
];

interface SkillCardProps {
  skill: Skill;
  iconBasePath: string;
}

function SkillCard({skill, iconBasePath}: SkillCardProps): ReactNode {
  const {colorMode} = useColorMode();
  const resolvedSrc =
    colorMode === 'light' && skill.iconSrcLight
      ? `${iconBasePath}${skill.iconSrcLight.replace(ICON_BASE, '')}`
      : `${iconBasePath}${skill.iconSrc.replace(ICON_BASE, '')}`;

  return (
    <div className={styles.card}>
      {/* Front face: icon + label */}
      <div className={styles.cardFront}>
        <div className={styles.iconWrapper}>
          {skill.customIcon ?? (
            <img
              src={resolvedSrc}
              alt={skill.title}
              className={styles.icon}
            />
          )}
        </div>
        <p className={styles.label}>{skill.title}</p>
      </div>

      {/* Back face: heading + bullet points */}
      <div className={styles.cardBack}>
        <p className={styles.backHeading}>How I used this skill</p>
        <ul className={styles.points}>
          {skill.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
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
