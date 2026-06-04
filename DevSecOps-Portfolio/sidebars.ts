import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Projects',
      collapsible: false,
      items: [
        'projects/v-server-setup',
        'projects/baby-tools-shop',
        'projects/truck-signs-api',
        {
          type: 'category',
          label: 'Conduit',
          collapsible: false,
          items: [
            'projects/conduit/conduit-container-cicd',
            'projects/conduit/conduit-container',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'OWASP Juice Shop',
      collapsible: false,
      items: [
        'owasp-juice-shop/login-admin',
        'owasp-juice-shop/admin-registration',
        'owasp-juice-shop/meta-geo-stalking',
        'owasp-juice-shop/client-side-xss',
      ],
    },
  ],
};

export default sidebars;
