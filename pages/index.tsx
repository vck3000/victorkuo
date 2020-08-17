import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/index/main';
import AboutMe from '../components/index/aboutMe';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </div>
  );
}
