import type { Article } from "./pages/Articles";

const getData = async (path: string, id?: string) => {
  const data = await fetch(path);
  const articles = await data.json();

  if (id) {
    return articles.find((article: Article) => article.id === id);
  }

  return articles;
};

export { getData };
