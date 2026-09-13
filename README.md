# Portfolio

Sho Katsumata のポートフォリオサイト。Vite + React + TypeScript + Tailwind CSS によるモノクロデザインの1ページ構成。

## Sections

- About
- Skills
- Timeline
- Works
- Blog
- Contact

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- ルーティングは1ページ内アンカーのみのため、SPA用の `_redirects` は不要。
