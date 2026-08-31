import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Сайт публикуется как проект GitHub Pages, то есть НЕ в корне домена:
// https://thenameisdmitry.github.io/STATIC
// `base` должен совпадать с именем репозитория с точностью до регистра.
export default defineConfig({
  site: 'https://thenameisdmitry.github.io',
  base: '/STATIC',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
