import styles from './aboutMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Engineer() {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textBox}>
        <div className={styles.hey}>About Me!</div>
        <div className={styles.location}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div className={styles.sydney}>Sydney</div>
        </div>
        <div className={styles.blurb}>
          Hey! I'm a tech nerd based in Sydney.
          <br />
          In my spare time I like to work on interesting projects, read up on
          new technology and continue to learn every day!
        </div>
      </div>

      <Engineer />
    </div>
  );
}
