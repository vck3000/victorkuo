import styles from './skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faMedkit,
  faPlane,
  faCode,
  faRobot,
  faLanguage,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

interface ISkill {
  icon: IconDefinition;
  title: string;
  text: string;
}

const skills: ISkill[] = [
  {
    icon: faCodeBranch,
    title: 'Programmer',
    text:
      'Familiar with C, C++, Java, Python, JS, DevOps, Git. Competitive programmer and Open Source contributor.',
  },
  {
    icon: faRobot,
    title: 'Robotics Engineering',
    text:
      'Mechatronics student strong in mechanical, electrical and software designs for robotics.',
  },
  {
    icon: faCode,
    title: 'Full Stack Web Developer',
    text: 'Well versed with frontend, backend and devops.',
  },
  {
    icon: faPlane,
    title: 'Private Pilot',
    text:
      'Certified Private Pilot with the FAA (USA) and CASA (Aus). Trained for 3 months in USA to fly single engine planes.',
  },
  {
    icon: faMedkit,
    title: 'First Aider',
    text:
      'Certified Occupational First Aider (HLTSS00027). Trained with the Australian Red Cross.',
  },
  {
    icon: faLanguage,
    title: 'Trilingual',
    text:
      'Native English, Conversational Chinese, Business Level Japanese (N2)',
  },
];

interface SkillProp {
  skill: ISkill;
}

function Card({ skill }: SkillProp) {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon className={styles.icon} icon={skill.icon} />
      <div className={styles.cardTitle}>{skill.title}</div>
      <div className={styles.cardText}>{skill.text}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className={styles.skills}>
      {skills.map((skill, i) => (
        <Card skill={skill} key={i} />
      ))}
    </div>
  );
}
