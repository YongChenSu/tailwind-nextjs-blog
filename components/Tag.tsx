import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-neutral hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-700 dark:hover:text-primary-300 focus:ring-primary-500 inline-flex items-center rounded-md bg-gray-100/80 px-2.5 py-1 text-xs font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-1 focus:outline-none dark:bg-gray-800/80"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
