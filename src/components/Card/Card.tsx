import Button from "../Button/Button";

type CardType = {
  title: string;
  summary: string;
  link: string;
};

const Card = ({ title, summary, link }: CardType) => {
  return (
    <article>
      <header>
        <span>{title}</span>
      </header>

      <div>{summary}</div>

      <footer>
        <Button link={link}>Link</Button>
      </footer>
    </article>
  );
};

export default Card;
