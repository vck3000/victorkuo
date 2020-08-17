import learnMoreStyles from './learnMore.module.css';

interface Props {
  text: string;
  link: string;
  color?: 'black';
}

export default function LearnMore({ text, link, color }: Props) {
  return (
    <a
      href={link}
      className={`${learnMoreStyles.learnMore} ${
        color === 'black' ? learnMoreStyles.black : null
      }`}
    >
      {text}
      <img src="/arrow.svg" className={learnMoreStyles.arrow} />
    </a>
  );
}
