import { useCategories } from "../lib/api";
import Link from "next/link";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const {
    //todo isLoading,
    data: { data: { allCategories = [] } = {} } = {},
    //todo error,
  } = useCategories();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && (
        <nav>
          <Logo />
          <ul id="menu-category">
            {allCategories.map((category) => (
              <li>
                <Link href={`/${category.name}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {isTabletOrMobileDevice && (
        <nav>
          <Logo />
          <Burger categories={allCategories} />
        </nav>
      )}
    </div>
  );
};

export default Navbar;
