import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Features from '../components/Features';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Features
          </Heading>
          <p className="hero__subtitle">The projects provides a diverse set of insights via dedicated solutions</p>
        </div>
      </header>
    );
  }

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title="Features"
        description="The projects provides a diverse set of insights via dedicated solutions">
        <HomepageHeader />
        <main>
          <Features/>
        </main>
      </Layout>
    );
  }