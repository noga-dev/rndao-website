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
  title: 'RnDAO',
  description: 'Dolor do proident anim minim non occaecat veniam irure eiusmod fugiat pariatur occaecat minim culpa.',
  author: {
    name: 'luxumbra',
    twitter: '@bdgrdev',
    url: 'https://rndao.org',
    email: '',
    summary: 'Dolor do proident anim minim non occaecat veniam irure eiusmod fugiat pariatur occaecat minim culpa.',
  },
  org: {
    name: 'RnDAO',
    twitter: '@rndao_',
    url: 'https://rndao.org',
    email: '',
    summary:
      'Dolor do proident anim minim non occaecat veniam irure eiusmod fugiat pariatur occaecat minim culpa.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/luxumbra/rndao-website',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@rndao.org',
      icon: 'envelope',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/rndao',
      icon: 'linkedin',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/invite/rndao',
      icon: 'discord',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/rndao_',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/rndao',
      icon: 'github',
    },
  ],
  buildTime: new Date().toString(),
}

export const Logo = '../svg/brand/logo.svg'
export const LogoImage = '../images/brand/logo.png'
export const FeaturedSVG = '../svg/brand/hero.svg'
export const DefaultSVG = '../svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  // { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'https://intelligent-glove-386.notion.site/RnDAO-workspace-00a0bb59e8f84ddfaac7fdec869086e1' },
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
    coverSVG: '../svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
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

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
