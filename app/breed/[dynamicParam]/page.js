export default async function Page(props) {
  // const breed = params.dynamicParam;
  console.log(props.params);
  const param = await props.params;
  const breed = param.dynamicParam;
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`,
  );
  const data = await response.json();

  const toUpper = breed.toUpperCase();
  return (
    <div className="thePage">
      <h1>
        Here is a random image of a <strong>{toUpper}</strong>
      </h1>
      <img
        className="image"
        src={data.message}
        alt=""
        width="500"
        height="500"
      />
    </div>
  );
}
