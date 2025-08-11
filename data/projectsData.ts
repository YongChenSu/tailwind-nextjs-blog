interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GoodJob 職場透明化運動',
    description: `超過萬筆薪水、面試資料馬上查！`,
    imgSrc: '/static/images/good-job-share.png',
    href: 'https://github.com/goodjoblife/GoodJobShare',
  },
  {
    title: 'rxjs-playground',
    description: 'rxjs playground',
    imgSrc: '/static/images/2025/08/demo.gif',
    description:
      '學習 rxjs 小專案，了解什麼「觀察者 (Observable) 模式」。使用 pokemon 的公開資料，同時用 typescript 實作。',
    imgSrc: '/static/images/2025/08/rxjs-demo.gif',
    href: 'https://github.com/YongChenSu/rxjs-typescript-pokemon?tab=readme-ov-file',
  },
]

export default projectsData
