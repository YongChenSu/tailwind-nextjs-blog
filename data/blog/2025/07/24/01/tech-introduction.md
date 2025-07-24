---
title: 專案技術導入與優化紀錄（含已完成與待優化項目）
date: '2025-07-24'
tags: ['essay']
draft: false
summary: "專案中做了幾項優化，記錄一下，還蠻喜歡部分的優化的，簡單但 DX 體驗大好"
authors: ['YongChen']
---

## 已優化的地方

### 1. 串 confluence MCP 
- 透過讀 conflunece文件，寫成 doc 規格文件。
- 與 AI pair programming 讀 doc 規格文件並實作功能。

### 2. 專案中加入 vitest (unit test)

- 安裝 vitest 相關套件。
- 設定 vitest.config.mjs、test-setup，使得可以做 router, react-query 相關的 unit test。
- useVerifyCashDomain 寫了 12 個測項：
- 移除舊版 Jest 相關套件 jest、jsdom、babel-jest，減少不必要的打包檔案。

### 3. 抽環境變數，方便 POC 在不同環境中開發
- 分 SIT, UAT, Prod (部分功能實作中)。

### 4. 專案中加入 react-query
- 使用最主流的 query 套件，統一技術棧。

### 5. 設定 tsconfig.json
- 設定好之後，以後絕對路徑的寫法，以後可以直接轉導到對應的頁面，避免手動找檔案、避免找錯檔案，加速開發 (個人最喜歡的優化，簡單但開發者體驗大好)。


## 未來可以優化的地方
1. 串 Figma MCP 直接轉 Tailwind CSS
這次專案任務中，因有寫 css，有初步了解某個 UI repo，這 repo 相對於其他專案 css 並不複雜，直接轉 Tailwind CSS 可行性較高。
