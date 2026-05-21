"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const route = params.dynamicRoute;

  const wordsArray = route.split("-");
  const newArray = wordsArray.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });

  const string = newArray.join(" ");
  return (
    <div className="thePage">
      <h1 className="heading">
        <span className="flowers">❀❀❀❀ </span>
        <em>{string}</em>
        <span className="flowers"> ❀❀❀❀</span>
      </h1>
    </div>
  );
}
