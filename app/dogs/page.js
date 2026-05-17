"use client";
import Image from "next/image";
import { useState } from "react";

export default function Dog() {
  const [image, setImage] = useState(null);
  async function fetchRandomDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error({ response });
    }
    const data = await response.json();
    setImage(data.message);
  }
  return (
    <>
      <button onClick={fetchRandomDog}>Get a dog</button>
      {image && (
        <img src={image} alt="random dog image" width="500" height="500" />
      )}
    </>
  );
}
