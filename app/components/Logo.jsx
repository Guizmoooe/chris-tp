import Link from "next/link";
export const Logo = () => {
  return (
    <Link href={`/`}>
      <a>
        <ul id="menu">
          <li>
            <img
              className="logo-nav"
              src="img/cyberscooty-excavator.svg"
              style={{ width: "100Px", height: "100px" }}
            />
          </li>
          <li>
            <h1>Chris TP</h1>
          </li>
        </ul>
      </a>
    </Link>
  );
};
