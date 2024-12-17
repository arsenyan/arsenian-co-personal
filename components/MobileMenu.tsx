"use client";

import { Link } from 'next-view-transitions'

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
        <div className="fixed inset-0 bg-accent p-4 pt-14 z-40 flex flex-col items-center justify-center overflow-auto">
          <nav className="flex w-full pt-2 border-t border-white flex-col gap-y-0">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white font-serif lowercase text-xl"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <hr className="w-full my-2 border-white" />
          <nav className="flex w-full h-full flex-col gap-y-0">
          <a className="text-white font-serif lowercase text-xl" href="mailto:artem@arsenian.co">artem@arsenian.co</a>
          <a className="text-white font-serif lowercase text-xl" href="https://instagram.com/artefactpage">instagram</a>
          <a className="text-white font-serif lowercase text-xl" href="https://facebook.com/artefactpage">facebook</a>
          <a className="text-white font-serif lowercase text-xl" href="https://t.me/teeema">telegram</a>
          <a className="text-white font-serif lowercase text-xl" href="https://www.linkedin.com/in/artyomarsenyan/">linkedin</a>
          <a className="text-white font-serif lowercase text-xl" href="https://github.com/artefactpage">github</a>
          </nav>
          <div className="w-full text-white">artem arsenian, 2024</div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;