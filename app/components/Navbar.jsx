import { useCategories } from "../lib/api";
import Link from "next/link";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { useMediaQuery } from "react-responsive";
import { useDeviceContext } from "../lib/DeviceContext";
const Navbar = () => {
  const {
    //todo isLoading,
    data: { data: { allCategories = [] } = {} } = {},
    //todo error,
  } = useCategories();
  const currentDevice = useDeviceContext();

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
