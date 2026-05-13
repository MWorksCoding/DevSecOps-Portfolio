import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MK',
  tagline: 'DevSecOps Portfolio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mworkscoding.github.io',
  baseUrl: '/DevSecOps-Portfolio/',

  organizationName: 'MWorksCoding',
  projectName: 'DevSecOps-Portfolio',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MK',
      logo: {
        alt: 'Dinosaur Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'owaspSidebar',
          position: 'left',
          label: 'OWASP Juice Shop',
        },
        {
          href: 'https://github.com/MWorksCoding',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {label: 'V-Server Setup', to: '/docs/projects/v-server-setup'},
            {label: 'Baby Tools Shop', to: '/docs/projects/baby-tools-shop'},
            {label: 'Truck Signs API', to: '/docs/projects/truck-signs-api'},
            {label: 'Conduit', to: '/docs/projects/conduit/conduit-container-cicd'},
          ],
        },
        {
          title: 'OWASP Juice Shop',
          items: [
            {label: 'Login Admin', to: '/docs/owasp-juice-shop/login-admin'},
            {label: 'Admin Registration', to: '/docs/owasp-juice-shop/admin-registration'},
            {label: 'Meta Geo Stalking', to: '/docs/owasp-juice-shop/meta-geo-stalking'},
            {label: 'Client Side XSS', to: '/docs/owasp-juice-shop/client-side-xss'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MWorksCoding',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MK. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
