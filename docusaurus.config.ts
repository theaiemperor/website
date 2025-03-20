import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const title = 'Bhavishya the vision'
const projectName = 'website';

const config: Config = {
  title,
  tagline: 'A step to success',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://theaiemperor.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'theaiemperor', // Usually your GitHub org/user name.
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,

    ],

  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      },
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: title + ' logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'studySidebar',
          position: 'left',
          label: 'Study',

        },
        {
          type: 'docSidebar',
          sidebarId: 'quizSidebar',
          position: 'left',
          label: 'Quizes',
        },
        {
          to: 'contact',
          label: 'Contact us'
        }
      ],
    },


    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ${title}, Inc. `,
    },


    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
