# Site da AID Tecnologia

Site institucional e portfólio, construído com [Astro](https://astro.build).

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build local
```

## Estrutura

Este projeto vive em `site/`; os demais projetos da AID ficam na raiz do repositório.

```
src/
  components/    seções e blocos da one-page
  data/
    projects.ts  catálogo de projetos (nome, descrição, stack, ano, link)
    site.ts      nome, contatos e navegação
  layouts/       shell HTML (SEO, fontes, scripts globais)
  pages/         index.astro
  styles/        CSS global (tema, componentes, responsivo)
public/          estáticos (favicon)
```

## Antes de publicar

Os contatos estão com placeholder e marcados com `TODO`:

- [ ] `src/data/site.ts` — e-mail, WhatsApp e localização
- [ ] `src/data/site.ts` — links de redes sociais (opcional)
- [ ] `astro.config.mjs` — domínio final em `site`
- [ ] `src/data/projects.ts` — revisar anos, descrições e links públicos

## Deploy (GitHub Pages)

1. Crie o repositório no GitHub e faça push da branch `main`.
2. Em **Settings → Pages**, selecione **GitHub Actions** como source.
3. O workflow `.github/workflows/deploy-site.yml` (na raiz do repositório) publica automaticamente a cada push.
4. Para domínio próprio: configure o CNAME em **Settings → Pages** e ajuste `SITE_URL`.

Se o site ficar em `usuario.github.io/repo`, o workflow já define `BASE_PATH` automaticamente.
