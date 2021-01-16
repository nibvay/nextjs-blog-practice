This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Deploy by Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fnibvay%2Fnextjs-blog)

# Pre-rendering and Data Fetching

## Static Site Generation (SSG)

- `getStaticProps` example

```js
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

## Server Side Rendering (SSR)

# Deploying Your Next.js App

# Add Typescript

1. Add `tsconfig.json` in root.
2. Install package

```
* If you’re using npm
npm install --save-dev typescript @types/react @types/node

* If you’re using Yarn
yarn add --dev typescript @types/react @types/node
```
