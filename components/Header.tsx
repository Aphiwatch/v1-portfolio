import Link from "next/link";

import NavBar from "@/components/NavBar";
import MobileNav from "@/components/MobileNav";
import { ModeToggle } from "@/components/ModeToggle";
const Header = () => {
  return (
    <header className="py-8 xl:px-12 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Portfolio
          </h1>
        </Link>
        {/*desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
          <ModeToggle />
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
