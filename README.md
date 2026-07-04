# portfolio

山﨑 駿 のポートフォリオサイト。[Eleventy](https://www.11ty.dev/) + 素の CSS で構築した静的サイト。

「コードと余白」をコンセプトに、完全モノクロ・全面セリフ（Noto Serif JP）・広い余白でまとめている。

## 開発

```sh
yarn install
yarn dev     # http://localhost:8080/portfolio/
yarn build   # _site/ に静的 HTML を出力
```

## 構成

- `src/index.njk` — トップページ（About / Works / Elsewhere）
- `src/_includes/` — レイアウトと部分テンプレート（Nunjucks）
- `src/_data/` — コンテンツ（profile / works / links）。将来 i18n の受け皿
- `src/styles/` — `tokens.css`（デザイントークン）/ `reset.css` / `main.css`
- `src/assets/` — 画像

GitHub Pages（`/portfolio/`）へ GitHub Actions で自動デプロイ。
