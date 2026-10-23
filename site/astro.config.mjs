import { defineConfig } from 'astro/config';

// TODO: ajustar o domínio final (ou remover `site` se usar apenas *.github.io).
const site = process.env.SITE_URL ?? 'https://aidtecnologia.com.br';
// GitHub Pages de projeto publica em /<repo>. Defina BASE_PATH no CI ou troque aqui.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
