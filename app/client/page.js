"use client";
import { articles } from "../blog";

export default function Page() {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.content}</li>
      ))}
    </ul>
  );
}
