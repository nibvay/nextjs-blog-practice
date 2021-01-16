export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}

/**
 * Do Not Fetch an API Route from `getStaticProps` or `getStaticPaths`.
 * Instead, write your server-side code directly in `getStaticProps` or `getStaticPaths` (or call a helper function).
 */
