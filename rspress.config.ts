import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Kitledger Documentation',
  icon: '/icon.png',
  logo: {
    light: '/logo.png',
    dark: '/logo-wt.png',
  },
  globalStyles: path.join(__dirname, 'theme/index.css'),
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
