import GoBack from "@/app/GoBack/GoBack";

export default async function Dog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();

  return (
    <div className="thePage">
      <GoBack />
      <h1>
        Here is a random image of a dog. Refresh the page for another one!
      </h1>

      <img
        className="image"
        src={data.message}
        alt="random dog image"
        width="500"
        height="500"
      />
    </div>
  );
}
