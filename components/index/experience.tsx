import styles from './experience.module.css';
import timelineStyles from './timeline.module.scss';

interface IExperience {
  title: string;
  period: string;

  body: JSX.Element;
  image?: string;
}

const experiences: IExperience[] = [
  {
    title: 'Atlassian',
    period: '2020 - 2021',

    body: (
      <>
        <p>Software Developer Intern at Atlassian, 3 months.</p>
        <ul>
          <li>Starts in December.</li>
        </ul>
      </>
    ),
    image: require('../../public/atlassian.jpeg'),
  },
  {
    title: 'University of Sydney',
    period: '2019 - Present',

    body: (
      <>
        <p>Head Tutor (TA) for Introduction to Programming (INFO1110).</p>
        <p>Tutor for Introduction to Mechatronic Design (MTRX1705)</p>
        <ul>
          <li>Oversee 1000+ students and 30+ tutors.</li>
          <li>Administration and content creation.</li>
          <li>Weekly seminar lectures.</li>
        </ul>
      </>
    ),
    image: require('../../public/usyd.png'),
  },
  {
    title: 'ProAvalon',
    period: '2018 - Present',

    body: (
      <>
        <p>
          Developer and Administrator of an online game website for The
          Resistance, Avalon.
        </p>
        <ul>
          <li>100 daily users & 173 hours played per day.</li>
          <li>Leader of the moderator team.</li>
          <li>
            Developer and maintainer of{' '}
            <a href="https://www.github.com/vck3000/ProAvalon">
              Open Source Project.
            </a>
          </li>
        </ul>
      </>
    ),
    image: require('../../public/proavalon.png'),
  },
  {
    title: 'Optiver Asia Pacific',
    period: '2019 - 2020',

    body: (
      <>
        <p>Software Developer Intern at Optiver, 3 months.</p>
        <ul>
          <li>C++ Development and Industry Standard Practices.</li>
          <li>High frequency trading.</li>
        </ul>
      </>
    ),
    image: require('../../public/optiver.png'),
  },
];

export default function Experience() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.experience}>
        <span className={styles.expText}>Experience</span>
      </div>
      <div className={timelineStyles.timeline}>
        {experiences.map((e, i) => (
          <div className={timelineStyles.entry} key={i}>
            <div className={timelineStyles.title}>
              <div className={timelineStyles.header}>
                <h3>{e.title}</h3>
                <p>{e.period}</p>
              </div>
              {e.image ? (
                <img src={e.image} className={timelineStyles.icon} />
              ) : null}
            </div>
            <div className={timelineStyles.body}>{e.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
