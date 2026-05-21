"use client";
import { articles } from "../blog";
import GoBack from "../GoBack/GoBack.js";

export default function Page() {
  return (
    <ul>
      <GoBack />
      {articles.map((article) => (
        <li className="list2" key={article.id}>
          {article.title}
        </li>
      ))}
    </ul>
  );
}
