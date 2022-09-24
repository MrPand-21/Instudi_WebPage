import Head from 'next/head';
import styles from './layout.module.css';


export const siteTitle = 'Instudi';

export default function Layout({ children, home }) {
    return (
        <div className={ styles.container }>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Official InStudi WebPage"
                />
                <meta name="og:title" content={ siteTitle } />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={ styles.header }>
            </header>

            <main>{ children }</main>

        </div>
    );
}