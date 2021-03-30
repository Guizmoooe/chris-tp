import { useCategories } from "../lib/api";
import Link from "next/link";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { useMediaQuery } from "react-responsive";
import { useAppContext } from "../lib/deviceContext";
const Navbar = () => {
  const {
    //todo isLoading,
    data: { data: { allCategories = [] } = {} } = {},
    //todo error,
  } = useCategories();
  const currentDevice = useAppContext();

  return (
    <div>
      {currentDevice ? (
        <nav>
          <Logo />
          <ul id="menu-category">
            {allCategories.map((category) => (
              <li key={category.name}>
                <Link href={`/${category.name}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav>
          <Logo />
          <Burger categories={allCategories} />
        </nav>
      )}
    </div>
  );
};

export default Navbar;
