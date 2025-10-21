import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'content'),
  title: 'Kitledger Docs',
  icon: './content/public/brand/icon.png',
  logo: {
    light: './brand/logo.png',
    dark: './brand/logo-wt.png',
  },
  globalStyles: path.join(__dirname, 'index.css'),
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/kitledger',
      },
    ],
  },
});
