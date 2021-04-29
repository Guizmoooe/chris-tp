import { getCategories } from "../lib/api";
import Link from "next/link";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { useDeviceContext } from "../lib/DeviceContext";
const Navbar = ({ categories = [] }) => {
  const currentDevice = useDeviceContext();

  return (
    <div>
      {currentDevice ? (
        <nav>
          <Logo />
          <ul id="menu-category">
            {categories.map((category) => (
              <li key={category.title}>
                <Link href={`/${category.id}`}>
                  <a>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav>
          <Logo />
          <Burger categories={categories} />
        </nav>
      )}
    </div>
  );
};

export default Navbar;
