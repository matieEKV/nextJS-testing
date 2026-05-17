"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const route = params.dynamicRoute;
  console.log(params);

  const wordsArray = route.split("-");
  const newArray = wordsArray.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });

  const string = newArray.join(" ");
  return (
    <h1 style={{ textAlign: "center", marginTop: "10rem", fontSize: "3rem" }}>
      <strong>{string}</strong>
    </h1>
  );
}
