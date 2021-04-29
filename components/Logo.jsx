import Link from "next/link";
import Image from "next/image";
export const Logo = () => {
  return (
    <Link href={`/`}>
      <a id="logo">
        <ul id="menu">
          <li>
            <Image
              className="logo-nav"
              src="/img/cyberscooty-excavator.svg"
              width={125}
              height={"100%"}
            />
          </li>
          <li>
            <h1>Chris TP</h1>
            <p>06.72.72.72.72</p>
          </li>
        </ul>
      </a>
    </Link>
  );
};
