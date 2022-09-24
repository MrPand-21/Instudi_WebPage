import Head from 'next/head';
import Content from '../componenets/header/content/content';
import Nav from '../componenets/header/nav/nav';
import Layout, { siteTitle } from '../componenets/layout';
import Services from '../componenets/services/services';

export default function Home() {
  return (<Layout>
    <Head>
      <title>{ siteTitle }</title>
    </Head>
    <Nav />
    <Content />
    <div className='line' >
    </div>
    <Services />

  </Layout>
  );
}
