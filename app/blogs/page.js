"use client";

import GoBack from "@/app/GoBack/GoBack";

export default function Page() {
  return (
    <div className="thePage">
      <GoBack />
      <p className="instructions">
        <span className="arrow">↑ </span>
        Write anything (with dashes) in the url after <em>/blogs</em> like
        <em> /have-fun-here</em>
      </p>
    </div>
  );
}
