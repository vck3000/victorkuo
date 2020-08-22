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
      <div className={styles.blurb}>
        I'm a tech nerd based in Sydney.
        <br />
        In my spare time I like to work on interesting projects, read up on new
        technology and continue to learn every day.
      </div>

      <Engineer />
    </div>
  );
}
