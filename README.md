# 📊 RnDAO Website
A starting point for the RNDAO website.

## :construction_worker: Contributing
The site was stood up in 3 days, so the code is a little messy. I've done a good chunk of responsive work. Mobile is pretty good but there's still some bits to do on tablet & laptop screens.

If you'd like to contribute, (while the repo is private) please contact @luxumbra for access. When / if it goes public, you can fork the repo and submit a PR.

Currently there's two main branches: `main` and `develop`.  `main` is the production branch, and `develop` is the development branch. Both are protected and require PRs before merging.

PRs need an approval from at least one other person before they can be merged, currently only lux has those permissions.

`main` is deployed to https://rndao.luxumbra.dev/

`develop` is deployed to https://staging.rndao.luxumbra.dev/

PR previews get assigned a URL when they're created.

**Steps to contribute:**
1. Create a new branch off of `develop` for your feature/bugfix branch. Please name your branch something descriptive, like `feature/cool-new-feature` or `bugfix/fix-that-bug`.
2. Make your changes, and commit them to your branch.
3. Push to `origin` and create a PR from your branch to `develop`.
4. All PRs get a preview build on Fleek to make it easier for others to test, etc. You can find the preview link in the status section of the PR.

## 🎉 Site Features
A lot of the features, while not all in use right now, seemed pretty apt for the kind of data the site might have to deal with. What isn't needed can be removed, but I think it's a good starting point.

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance low overhead with minimal Javascript (AlpineJS)
- Full text client based search of blog pages via lunrjs (search index only loaded on first invocation of search on a page)
- Index page and individual pages for authors, categories and tags, including pagination
- Support for RSS feed, sitemap and robots.txt
- Full SEO support including Open Graph, Twitter Cards and Schema.org via JSON-LD
- Full support for Light and dark UI modes, as well as following system preferences, in accordance to TailwindCSS recommendation
- Customised 404 error page
- Display math equations using KaTeX via remark-math/rehype-katex (enclosed in `$`...`$` or `$$`...`$$`)
- Display Mermaid, Markmap, PlantUML diagrams (authored as a code block with language `mermaid`, `markmap` and `plantuml`)
- Display map at geo coordinates and zoom level using `Map` component (need to also include `extra: ['map']` is frontmatter to load CSS/JS assets for page)
- Calculates and show reading time for blog posts
- CSS/JS assets of external libraries loaded only when needed on a per page and per package basis - no unnecessary bloat
- Photo gallery and lightbox using PhotoSwipe (including display of EXIF tags)
- Carousel component using Swiper
- Documentation pages (modelled after astro docs starter but using Tailwind)


## :toolbox: External Packages

The project uses the following external packages:

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com) and [TailwindUI](https://tailwindui.com)
- [Iconify](https://iconify.design/)
- [Hero Patterns](https://heropatterns.com/)
- [unDraw](https://undraw.co/) for illustrations
- [MDX](https://mdxjs.com/) and [Markdown](https://www.markdownguide.org/)
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/), type-checked using [schema-dts](https://github.com/google/schema-dts)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [AlpineJS](https://alpinejs.dev)
- Local full text search using [Lunr](https://lunrjs.com)
- Math equations using [KaTeX](https://katex.org) via [remark-math and rehype-katex](https://github.com/remarkjs/remark-math)
- Diagrams using [Mermaid](https://mermaid-js.github.io/mermaid/#/), [Markmap](https://markmap.js.org) and [PlantUML](https://plantuml.com)
- Open Street Map using [Leaflet](https://leafletjs.com/)
- [reading-time](https://github.com/ngryman/reading-time)
- [PhotoSwipe](https://photoswipe.com)
- [exifr](https://mutiny.cz/exifr/)
- [Swiper](https://swiperjs.com/)

It follows the [JAMstack architecture](https://jamstack.org) by automatically building a static version from the Git repository. The website is hosted on Fleek.

## 🧬 Project Structure

Inside this project, you'll see the following folders and file structure:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── header.astro
│   ├── static/
│   │   ├── css/
│   │   │   └── index.css
│   │   ├── fonts/
│   │   │   └── font.tff
│   ├── images/
│   │   └── image.png
│   ├── layouts/
│   │   └── base.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   │       └── 2022-08-01-post.md
│   ├── svg/
│   │   └── image.svg
│   └── config.ts
└── package.json
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/images/` or `src/svg/` depending on type.

Any static assets, like images, can be placed in the `public/` directory.



## ⛓️ Release History

* 0.0.1: Initial Release
