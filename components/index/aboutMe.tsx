import styles from './aboutMe.module.css';
import LearnMore from '../learnMore';

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
    <div id="aboutMe" className={styles.wrapper}>
      <div className={styles.hey}>Hey!</div>
      <div>
        I study Mechatronics Engineering, Computer Science and Physics at The
        University of Sydney.
      </div>

      <Engineer />
    </div>
  );
}
