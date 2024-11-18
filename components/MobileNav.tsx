import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

type NavLink = {
  name: string;
  path: string;
};

const links: NavLink[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav: React.FC = () => {
  return (
    <div className="relative">
      {/* Menu Trigger */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="peer hidden"
      />
      <label
        htmlFor="menu-toggle"
        className="text-2xl flex items-center justify-center cursor-pointer"
        aria-label="Toggle Menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </label>

      {/* Menu Content */}
      <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg z-50 hidden peer-checked:block">
        <nav className="flex flex-col items-start p-4">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block w-full text-left text-gray-700 hover:text-accent hover:bg-gray-100 rounded-lg px-2 py-1 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
