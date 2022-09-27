import Head from 'next/head';
import Features from '../componenets/features/features';
import Footer from '../componenets/footer/footer';
import Form from '../componenets/form/form';
import Content from '../componenets/header/content/content';
import Nav from '../componenets/header/nav/nav';
import Layout, { siteTitle } from '../componenets/layout';
import Logos from '../componenets/logos/logos';
import Options from '../componenets/options/options';
import Services from '../componenets/services/services';
import Line from '../utils/line';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <Nav />
      <Content />
      <Line />
      <Services />
      <Line />
      <Features />
      <Logos />
      <Options id={ "discover-plans" } />
      <Line />
      <Form id={ "pre-register" } />
    </Layout>
  );
}
