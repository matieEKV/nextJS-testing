"use client";

import GoBack from "../GoBack/GoBack.js";

export default function Page() {
  return (
    <div className="thePage">
      <GoBack />
      <p className="instructions">
        <span className="arrow">↑ </span>
        Write a dog breed in the url after <em>/breed</em> like
        <em>/labrador</em>
      </p>
    </div>
  );
}
