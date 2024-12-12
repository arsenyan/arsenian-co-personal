import Link from "next/link"

const menuItems = [
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/consultations", label: "Consultations" },
  { href: "/contacts", label: "Contacts" },
];

function Header() {
  return (
    <header className="flex justify-between lowercase py-5 sticky top-0">
    <div>
    <Link 
      href="/" 
      className="
        text-accent"
    >
      Artem Arsenian
    </Link>
    </div>
    <nav className="flex gap-x-5">
      {menuItems.map((item) => (
      <Link 
        key={item.label} 
        href={item.href}
        className="
            underline-animation 
            hover:text-accent 
            transition-all" 
      >
        {item.label}
      </Link>
      ))}
    </nav>
    </header>
  )
}

export default Header
