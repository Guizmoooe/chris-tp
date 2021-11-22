import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Logo = ({ currentDevice }) => {
  return (
    <Link href={"/"}>
      {currentDevice ? (
        <a id="logo">
          <ul id="menu">
            <li>
              <Image
                className="logo-nav"
                src="/img/cyberscooty-excavator.svg"
                width={"70%"}
                height={"100%"}
              />
            </li>
            <li>
              <h1>Chris TP</h1>
            </li>
          </ul>
        </a>
      ) : (
        <a id="logo-mobile">
          <ul id="menu-mobile">
            <li>
              <Image
                className="logo-nav"
                src="/img/cyberscooty-excavator.svg"
                width={"70%"}
                height={"100%"}
              />
            </li>
            <li>
              <h1>Chris TP</h1>
              <p>06.72.72.72.72</p>
            </li>
          </ul>
        </a>
      )}
    </Link>
  );
};
