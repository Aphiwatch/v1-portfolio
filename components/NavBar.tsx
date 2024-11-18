import React from "react";
import Link from "next/link";

const links = [
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
]

const NavBar = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} 
          className="capitalize font-medium hover:text-accent transition-all">
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
