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

## Test

Vitest を Node実行系とBrowser Mode系（Playwright / Chromium）に責務分離しています。

```bash
npm run test:unit    # src/lib配下の純粋関数をNode環境でテスト
npm run test:browser # コンポーネントの実ブラウザ操作テスト（Playwright Chromium）
npm run test         # 両方まとめて実行
npm run test:watch   # watchモード
```

- `*.unit.test.ts`: DOM非依存のロジック（フィルタ処理など）をNode環境で検証
- `*.browser.test.tsx`: タブ切り替えやモーダル表示など、実際のユーザー操作をChromium上で検証
- アクセシビリティチェック: `axe-core` + `vitest-axe`（`toHaveNoViolations` matcher）で、初期表示・タブ切り替え後・モーダル表示中の各状態にa11y違反がないことを検証
- GitHub Actions（`.github/workflows/test.yml`）で push / PR ごとにビルドとテスト一式を実行し、a11y違反を含むテスト失敗でCIを落とす

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- ルーティングは1ページ内アンカーのみのため、SPA用の `_redirects` は不要。
