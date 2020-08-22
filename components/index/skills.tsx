import styles from './skills.module.css';

interface ISkill {
  image: string;
  title: string;
  text: string;
}

const skills: ISkill[] = [
  {
    image: 'test',
    title: 'Certified Occupational First Aider',
    text: 'Trained for 5 full days with the Red Cross foundation.',
  },
  {
    image: 'test',
    title: 'Private Pilot - FAA & CASA',
    text:
      'Trained for 3 months in Portland, Oregon to fly single engine planes. USA and Aus licenses.',
  },
  {
    image: 'test',
    title: 'Full stack Web Developer',
    text: 'Well versed with frontend, backend and devops.',
  },
  {
    image: 'test',
    title: 'Robotics Engineering',
    text:
      'Strong educational background in hardware, electrical and software design for robotics. Comfortable with Solidworks, Fusion360, PCB design and manufacturing.',
  },
  {
    image: 'test',
    title: 'Trilingual',
    text:
      'Native English, conversational Chinese and business level Japanese (N2)',
  },
  {
    image: 'test',
    title: 'Programmer and Open Source Contributor',
    text:
      'Well versed in procedural, object oriented and data oriented design. Comfortable in C, C++, Java, Python and Javascript. Enjoys competitive programming.',
  },
];

export default function Skills() {
  return (
    <div>
      <div className={styles.title}>Skills</div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div className={styles.card}>
            <img src={skill.image} className={styles.image} />
            <div className={styles.textBox}>
              <div className={styles.cardTitle}>{skill.title}</div>
              <div className={styles.cardText}>{skill.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
