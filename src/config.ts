import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  draft?: boolean
  title: string
  description?: string
  author?: string
  publishDate: string
  coverSVG?: string
  coverImage?: string
  socialImage?: string
  categories?: string[]
  tags?: string[]
  file?: string
  url?: string
  minutesRead?: string
  extra?: string[]
  section?: string[]
}

export interface TagType {
  tag: string
  count: number
  pages: MarkdownInstance<Frontmatter>[]
}

export const SiteMetadata = {
  title: 'RnDAO: Research and Development DAO',
  description: 'Get a razor sharp understanding of the market and your users.',
  author: {
    name: 'RnDAO',
    twitter: '@rndao__',
    url: 'https://rndao.org',
    email: '',
    summary: 'Get a razor sharp understanding of the market and your users.',
  },
  org: {
    name: 'RnDAO',
    twitter: '@rndao__',
    url: 'https://rndao.info',
    email: '',
    summary:
      'Get a razor sharp understanding of the market and your users.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/luxumbra/rndao-website',
  social: [
    {
      name: 'Calendly',
      link: 'https://calendly.com/rndao/research-chat',
      icon: 'calendar-week',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/rndao',
      icon: 'linkedin',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/787EuEuG',
      icon: 'discord',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/rndao__',
      icon: 'twitter',
    },
    // {
    //   name: 'Github',
    //   link: 'https://github.com/rndao',
    //   icon: 'github',
    // },
  ],
  buildTime: new Date().toString(),
}

export const Logo = '../svg/brand/logo.svg'
export const LogoImage = '../images/brand/logo.png'
export const FeaturedSVG = '../svg/brand/hero.svg'
export const DefaultSVG = '../svg/brand/hero.svg'
export const DefaultImage = '../images/social.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Team', href: 'team' },
  { name: 'Contact', href: 'contact' },
  // { name: 'Blog', href: '/blog' },
  // { name: 'Docs', href: '/doc' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../svg/headers/page-header.svg',
    socialImage: '../images/social.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'luxumbra',
    description: '',
    contact: 'me@luxumbra.dev',
    image: '../images/authors/luxumbra.gif'
  }
]

export const DefaultAuthor = {
  name: 'RnDAO contributor',
  image: '../images/authors/default.png',
  contact: 'info@rndao.org',
  description: 'RnDAO contributor'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/luxumbra/rndao-website`

export const COMMUNITY_INVITE_URL = `https://discord.gg/787EuEuG`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
