import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from '@playform/compress';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter.mjs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasExternalScripts = false;
const whenExternalScripts = (items = []) => hasExternalScripts ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

export default defineConfig({
  output: 'static',
  site: 'https://www.acfo.co',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'binoculars',
          'voice-presentation',
          'combo-chart',
          'business-contact',
          'process',
          'document',
          'template'
        ],
        'mdi': ['strategy'],
        'streamline': ['subscription-cashflow'],
        'fluent-emoji': ['magnifying-glass-tilted-right'],
        'material-symbols': ['communication'],
      }
    }),
    ...whenExternalScripts(() => partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false
        }
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1
    }),
    astrowind({
      config: './src/config.yaml'
    })
  ],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    },
    build: {
      sourcemap: true, // Enable source maps
    }
  }
});
