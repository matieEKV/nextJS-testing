import { articles } from "../blog";

export default function Page() {
  return (
    <ul>
      {articles.map((article) => (
        <li className="list" key={article.id}>
          {article.category}
        </li>
      ))}
    </ul>
  );
}
