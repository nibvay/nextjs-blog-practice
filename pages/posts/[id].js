import utilStyles from '../../public/styles/utils.module.css';

import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const { id, title, date, contentHtml } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        {/* <p>{id}</p> */}
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    /**
     * paths: required key
     * * Then Next.js will statically generate `posts/1` and `posts/2` at build time using the page component in pages/posts/[id].js.
     * * must have the params key and contain an object with the id key (because we’re using [id] in the file name)
     * paths: [
     *  { params: { id: '1' } },
     *  { params: { id: '2' } }
     * ]
     */
    paths,
    /**
     * fallback: required key
     * * false:
     */
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
