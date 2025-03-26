import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PARARS Docs',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://parars.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/public-reports/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PARARS', // Usually your GitHub org/user name.
  projectName: 'public-reports', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja-JP',
    locales: ['ja-JP'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../reports',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PARARS/public-reports/tree/main/reports/',
          sidebarItemsGenerator: async (args) => {
            const items = await args.defaultSidebarItemsGenerator(args);
            // レポート名は YYYY-MM-DD-reportname.md の形式
            // 新しい順（降順）に並べるため、デフォルト（昇順）の逆順にする
            items.map((item) => {
              // [YYYY] ディレクトリ名は年度アーカイブ。直下を逆順にする
              if (item.type === 'category' && item.label.match(/^\d{4}$/)) {
                item.items = item.items.reverse();
              }
            })
            // ルート直下を逆順にする
            return items.reverse();
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true
      },
    },
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PARARS Docs',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          href: 'https://github.com/PARARS/public-reports',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © 2025 - ${new Date().getFullYear()} 
      <a href="https://www.parars.net/" target="_blank">PARARS Inc.</a> | 
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
