"use client";

import Link from "next/link";

interface MenuItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
}

function MobileMenu({ isOpen, toggleMenu, menuItems }: MobileMenuProps) {
  return (
    <>
      
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center p-4 overflow-auto bg-accent pt-14">
          <nav className="flex flex-col w-full pt-2 border-t border-white gap-y-0">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-serif text-xl text-white lowercase"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <hr className="w-full my-2 border-white" />
          <nav className="flex flex-col w-full h-full gap-y-0">
          <a className="font-serif text-xl text-white lowercase" href="mailto:artem@arsenian.co">artem@arsenian.co</a>
          <a className="font-serif text-xl text-white lowercase" href="https://instagram.com/artefactpage">instagram</a>
          <a className="font-serif text-xl text-white lowercase" href="https://facebook.com/artefactpage">facebook</a>
          <a className="font-serif text-xl text-white lowercase" href="https://t.me/teeema">telegram</a>
          <a className="font-serif text-xl text-white lowercase" href="https://www.linkedin.com/in/artyomarsenyan/">linkedin</a>
          <a className="font-serif text-xl text-white lowercase" href="https://github.com/artefactpage">github</a>
          </nav>
          <div className="w-full text-white">artem arsenian, 2024</div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;