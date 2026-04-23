import { useLoaderData } from "react-router";
import Heading from "../components/Heading/Heading";
import Line from "../components/Line/Line";

const Detail = () => {
  const article = useLoaderData();

  return (
    <div>
      <time dateTime={article.publishedDate}>{article.publishedDate}</time>
      <Heading>{article.title}</Heading>

      <i>{article.summary}</i>
      <Line />
      <p>{article.content}</p>

      <cite>{article.author}</cite>
    </div>
  );
};

export default Detail;
