const Typewriter = require('typewriter-effect');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './main.module.css';

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
        <div className={styles.contact}>
          <a href="https://www.linkedin.com/in/victor-kuo-3500399b/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="http://github.com/vck3000">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <a href="#one" className={styles.learnMore}>
        LEARN MORE
      </a>
    </>
  );
}
