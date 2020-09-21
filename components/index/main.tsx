const Typewriter = require('typewriter-effect');
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './main.module.css';
import LearnMore from '../learnMore';

export default function Main() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.main}>
        <div className={styles.name}>Victor Kuo</div>
        <div className={styles.typewriter}>
          <Typewriter
            options={{
              strings: ['Engineer', 'Software Developer', 'Physicist'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/victor-kuo-3500399b/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="http://github.com/vck3000">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <Link href="/Victor Kuo Resume.pdf">
            <button className={styles.cvButton}>Download CV</button>
          </Link>
        </div>
      </div>
      <LearnMore text="LEARN MORE" link="#aboutMe" />
    </>
  );
}
