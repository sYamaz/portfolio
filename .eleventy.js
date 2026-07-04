export default function (eleventyConfig) {
  // 静的アセットはそのままコピー
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // footer 用の年
  eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

  return {
    // カスタムドメイン me.shunyamazaki.com のルートで配信するため pathPrefix は付けない
    // （テンプレ内のリンク/アセットは引き続き `| url` フィルタ経由にすること）
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
