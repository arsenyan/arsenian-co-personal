"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const menuItems = [
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contacts", label: "Contacts" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`flex justify-between items-center lowercase fixed w-full z-50 top-0 backdrop-blur-sm ${isMenuOpen ? "bg-transparent" : "bg-white/30"}`}>
        <div className="container flex px-4 md:py-4 py-2 justify-between items-center">
          <div className={`logo ${isMenuOpen ? "text-white" : "text-accent"}`}>
            <Link href="/" className="text-inherit">
              Artem Arsenian
            </Link>
          </div>
          <nav className="hidden md:flex gap-x-5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="underline-animation hover:text-accent transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className={`hamburger md:hidden visible hamburger--collapse text-black ${isMenuOpen ? "is-active" : ""}`}
            type="button"
            title="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} menuItems={menuItems} />
    </>
  );
}

export default Header;