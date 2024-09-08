import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { GiPeaceDove } from "react-icons/gi";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link href="/" aria-label="Home">
          <div className="flex items-center cursor-pointer">
            <GiPeaceDove className="text-7xl mr-2" aria-hidden="true" /> {/* Icon */}
            <h1 className="xl:text-4xl text-3xl font-semibold hover:text-[#FFEA00] transition duration-300">
              ARIF SABIR
              <span className="text-[#FFEA00] text-5xl">.</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation & Bible Image */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Image
            src="/assets/bible2.png"
            alt="Bible icon"
            width={50}
            height={50}
            priority
            className="hover:opacity-80 transition duration-300"
          />
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
