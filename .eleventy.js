export default function (eleventyConfig) {
  // 静的アセットはそのままコピー
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // footer 用の年
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  return {
    // GitHub Pages のプロジェクトページ配信（https://sYamaz.github.io/portfolio/）
    // テンプレ内のリンク/アセットは必ず `| url` フィルタ経由にすること
    pathPrefix: "/portfolio/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
