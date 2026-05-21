"use client";
import { articles } from "../blog";

export default function Page() {
  return (
    <ul>
      {articles.map((article) => (
        <li className="list2" key={article.id}>
          {article.title}
        </li>
      ))}
    </ul>
  );
}
