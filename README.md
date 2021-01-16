This is a starter template for [Learn Next.js](https://nextjs.org/learn).

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
