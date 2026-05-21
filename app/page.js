import Link from "next/link";

export default function Home() {
  return (
    <div className="introPage">
      <p className="introHeading">HYF and NextJS Assignment</p>
      <div className="linkContainer">
        <Link href="/dogs">Random Dog Image</Link>
        <Link href="/blog">Blog Categories</Link>
        <Link href="/server">Server-Side Rendering</Link>
        <Link href="/client">Client-Side Rendering</Link>
        <Link href="/blogs">Dynamic Parameter Routes</Link>
        <Link href="/breed">Dog Image Based on a Breed</Link>
      </div>
    </div>
  );
}
