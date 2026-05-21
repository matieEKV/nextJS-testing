import { articles } from "../blog";
import GoBack from "@/app/GoBack/GoBack";

export default function Page() {
  return (
    <ul>
      <GoBack />
      {articles.map((article) => (
        <li className="list" key={article.id}>
          {article.category}
        </li>
      ))}
    </ul>
  );
}
