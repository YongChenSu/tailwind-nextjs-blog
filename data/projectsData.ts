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
]

export default projectsData
