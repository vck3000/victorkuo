import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/index/main';
import AboutMe from '../components/index/aboutMe';
import Skills from '../components/index/skills';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <AboutMe />
      <Skills />
      <AboutMe />
      <AboutMe />
    </div>
  );
}
