import Link from "next/link";

export default function GoBack() {
  return (
    <Link className="fixed" href="/">
      ⇐ Go back to Home
    </Link>
  );
}
