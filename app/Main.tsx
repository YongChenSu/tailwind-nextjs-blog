import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Rock wall background container */}
      <div className="bg-rock-wall -mx-4 overflow-hidden rounded-lg sm:-mx-6 xl:mx-0 xl:-mr-20 xl:-ml-20 xl:rounded-xl">
        <div className="rock-wall-overlay px-4 sm:px-6 xl:px-20">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                Latest
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:gap-10">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <article
                    key={slug}
                    className="group card-backdrop hover:shadow-rock-500/25 dark:hover:shadow-rock-700/35 focus-within:ring-primary-500 hover-lift relative rounded-xl border border-gray-200/60 bg-white/75 p-5 shadow-lg transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-transparent hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl sm:p-6 md:p-8 dark:border-gray-700/60 dark:bg-gray-900/75"
                  >
                    <div className="space-y-4">
                      {/* Date section */}
                      <div className="flex items-start justify-between">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="rounded-full bg-gray-100/80 px-3 py-1 text-sm font-medium text-gray-500 dark:bg-gray-800/80 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                          </dd>
                        </dl>
                        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="from-primary-500 to-accent h-2 w-2 animate-pulse rounded-full bg-gradient-to-r"></div>
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="space-y-4">
                        <div>
                          <h2 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-xl leading-7 font-bold tracking-tight transition-colors duration-300 md:text-2xl md:leading-8">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 before:absolute before:inset-0 before:rounded-xl focus:outline-none dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>

                          {/* Tags */}
                          <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>

                        {/* Summary */}
                        <div className="prose max-w-none text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                          {summary}
                        </div>
                      </div>

                      {/* Read more section */}
                      <div className="border-t border-gray-200/60 pt-4 dark:border-gray-700/60">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral group-hover:text-primary-600 dark:group-hover:text-primary-400 text-sm font-medium transition-colors duration-300">
                            Read more
                          </span>
                          <div className="translate-x-0 transform transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                              className="text-neutral group-hover:text-primary-600 dark:group-hover:text-primary-400 h-4 w-4 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle gradient border effect on hover */}
                    <div className="from-primary-500/20 via-accent/20 to-primary-500/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mt-6 flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-neutral hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
