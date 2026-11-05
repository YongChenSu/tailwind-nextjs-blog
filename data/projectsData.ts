interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GoodJob 職場透明化運動',
    description: `你是否曾覺得職場資訊不夠透明？分享你的職場或面試經驗，讓我們一起改變現狀、定義理想的工作！`,
    imgSrc: '/static/images/good-job-share.png',
    href: 'https://github.com/goodjoblife/GoodJobShare',
  },
  {
    title: 'rxjs-playground',
    description:
      '學習 rxjs 小專案，了解什麼「觀察者 (Observable) 模式」。使用 pokemon 的公開資料，同時用 Typescript 實作。',
    imgSrc: '/static/images/2025/08/rxjs-demo.gif',
    href: 'https://github.com/YongChenSu/rxjs-typescript-pokemon?tab=readme-ov-file',
  },
  {
    title: 'FA 找活動 Find Activity',
    description:
      'Lidemy 全端培訓的畢業專題，自己發想的活動搜尋網站。串接政府開放資料與中央氣象局 API，可依講座、音樂、親子、展覽、電影五大類別篩選、關鍵字搜尋並查看天氣。使用 React、React Router、Context API 與 styled-components 實作。',
    imgSrc: '/static/images/2026/11/fa-find-activity.jpg',
    href: 'https://github.com/YongChenSu/FA-Find-Activity',
  },
  {
    title: 'Creative Coding - Warm Noise',
    description: 'Warm Noise, 靈感來自於 Minecraft 中的熔岩，加上 noise 的變化',
    imgSrc: '/static/images/2025/08/warm-noise.png',
    href: 'https://openprocessing.org/sketch/1264279',
  },
]

export default projectsData
