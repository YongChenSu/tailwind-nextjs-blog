![banner](/public/static/images/twitter-card.png)

# Coding and Climbing — YongChen's Blog

我是 YongChen，一位前端工程師，擁有超過 5 年的開發經驗，專精 Next.js、React 與 TypeScript。

這裡是我的技術筆記與作品集：記錄工作上遇到的問題、學習新工具的過程，以及做過的專案。興趣是登山與抱石，期許程式能力也像山階或抱石級數一樣，一階一階往上攀升。

[GitHub](https://github.com/YongChenSu) · [LinkedIn](https://www.linkedin.com/in/harry-su-854898174/) · [Instagram](https://www.instagram.com/dawning_climber)

## 寫些什麼

| 主題              | 精選文章                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 前端與 TypeScript | [API 錯誤處理：分層架構與 TanStack Query 整合](data/blog/2025/09/30/catch-throw-error-handling.mdx)、[TypeScript：type 和 interface 的差異](data/blog/2026/10/06/typescript-type-vs-interface.mdx)、[Zod vs Yup](data/blog/2026/10/06/zod-vs-yup.mdx)、[使用 postMessage 實現 iframe 父子頁面通訊](data/blog/2025/06/16/01/postMessage.mdx) |
| 後端與資料庫      | [後端多 Process 架構與 Pub/Sub 入門](data/blog/2026/02/18/02/pub-sub.mdx)、[MongoDB 用 $and / $or 查日期區間](data/blog/2026/10/08/mongodb-and-or-date-range.mdx)                                                                                                                                                                           |
| SEO               | [把頁面放進 Sitemap：URL、資料與前後端契約](data/blog/2026/10/28/sitemap-url-data-contract.mdx)                                                                                                                                                                                                                                             |
| DevOps 與工具     | [git worktree](data/blog/2025/07/21/01/git-worktree.mdx)、[Argo CD](data/blog/2025/07/25/argo-cd.mdx)、[GitHub Actions 分支條件判斷踩雷記錄](data/blog/2025/07/28/github-actions-job-skip.mdx)、[cross-env 與 dotenv 的載入順序](data/blog/2025/08/05/cross-env-dotenv.mdx)                                                                 |
| AI 開發工具       | [Claude Code 的專案設定機制](data/blog/2026/09/05/claude-code-project-memory-mechanisms.mdx)、[Context Window 與 `/compact`](data/blog/2026/09/06/claude-code-context-window-compact.mdx)、[Model / Effort 與 Permission Mode](data/blog/2026/09/05/claude-code-model-effort-permission-mode.mdx)                                           |

所有文章都在 [`data/blog/`](data/blog/)，依日期分資料夾。

## 作品

- **[GoodJob 職場透明化運動](https://github.com/goodjoblife/GoodJobShare)**：分享職場與面試經驗的平台，讓職場資訊更透明。
- **[rxjs-playground](https://github.com/YongChenSu/rxjs-typescript-pokemon)**：用 Pokémon 公開資料與 TypeScript 練習 RxJS 的觀察者（Observable）模式。
- **[Creative Coding - Warm Noise](https://openprocessing.org/sketch/1264279)**：靈感來自 Minecraft 的熔岩，以 noise 產生變化的生成藝術。

## 關於這個網站

以 [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 為基礎，調整了主題配色與版面。

- **技術棧**：Next.js 15（App Router）、React 19、Tailwind CSS v4、Contentlayer2（MDX）
- **功能**：kbar 搜尋、Giscus 留言、Umami 分析、RSS、程式碼高亮與 KaTeX 數學式

本機開發：

```bash
corepack enable
yarn
yarn dev
```

環境變數參考 `.env.example`。新文章放在 `data/blog/YYYY/MM/DD/*.mdx`，檔案路徑即為文章網址。

## 授權

程式碼採用 [MIT License](LICENSE)，沿用原始模板授權。文章內容版權歸作者所有。
