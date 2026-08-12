# PookaAI website

Marketing site for [PookaAI](https://pookaai.com) — an AI automation agency for local and SMB service businesses.

Built with **Astro** + **Tailwind CSS**, static output ready for **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL Astro prints (usually `http://localhost:4321`).

Useful scripts:

- `npm run build` — production static build to `dist/`
- `npm run preview` — preview the production build locally

## Cloudflare Pages deploy

1. Connect this GitHub repo to Cloudflare Pages.
2. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Leave Node version at Cloudflare's current LTS (or set `NODE_VERSION=20` in Pages env vars).
4. Attach the custom domain `pookaai.com` in Cloudflare once the first deploy succeeds.

No server runtime is required — this project uses `output: "static"`.

## Project layout

- `src/pages/index.astro` — homepage composition
- `src/components/` — hero, services, audience, how-it-works, CTA, header/footer
- `src/layouts/BaseLayout.astro` — document shell, fonts, SEO tags
- `public/` — favicon, robots.txt, Cloudflare `_headers`

## Contact

Primary CSA: [hello@pookaai.com](mailto:hello@pookaai.com)
