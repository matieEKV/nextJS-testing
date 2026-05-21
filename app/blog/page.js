import GoBack from "@/app/GoBack/GoBack";

export default async function Page() {
  let count = 0;
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  const categories = posts.map((item) => item.category);
  const unique = [...new Set(categories)];
  return (
    <>
      <GoBack />
      <ul>
        {unique.map((item) => {
          count++;
          return (
            <li className="list" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <br></br>
      <p className="box">
        <strong>There are {count} unique categories </strong>
      </p>
    </>
  );
}
