# Personal Website
My personal website built with React, GitHub Actions and GitHub Pages.

## Development

Use Node.js 24 (see `.nvmrc`), then install and validate the project:

```sh
nvm use
npm ci
npm run lint
npm test -- --run
npm run build
```

The static build fetches Google Fonts and content from Firebase, so it requires network access.

ESLint stays on version 9 because the React, import, and accessibility plugins in Next.js's ESLint configuration do not support ESLint 10 yet. TypeScript stays on version 6 because Next.js and typescript-eslint use its JavaScript API, which [TypeScript 7.0 does not provide](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/).

## 🔎 Preview
[See result](https://aelmizeb.github.io/personal-website/)

![Preview](./src/assets/img/preview.png)

## 🚀 Features

- Built with modern JavaScript, using tools and frameworks like [framer-motion](https://github.com/motiondivision/motion), and based on work from [Devfolio](https://github.com/mdalmamunit427/devfolio-nextjs-portfolio-website/tree/main).
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- And more!
