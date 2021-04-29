import '../public/styles/global.css';

export default function App({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return <Component {...pageProps} />;
}
