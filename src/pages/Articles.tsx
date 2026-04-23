import { useLoaderData } from "react-router";
import Card from "../components/Card/Card";

type BasicArticle = {
  id: string;
  title: string;
  summary: string;
};

export type Article = BasicArticle & {
  content: string;
  author: string;
  publishedDate: string;
};

const Articles = () => {
  const articles = useLoaderData();

  return (
    <>
      {!articles || !articles.length
        ? "Er zijn geen artikels."
        : articles.map((article: BasicArticle) => (
            <Card
              key={article.id}
              title={article.title}
              summary={article.summary}
              link={`/articles/${article.id}`}
            />
          ))}
    </>
  );
};

export default Articles;
