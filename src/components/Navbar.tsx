import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Anchor } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/story-arcs", label: "Story Arcs" },
  { to: "/devil-fruits", label: "Devil Fruits" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 nav-blur">
      <nav className="container-main flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl text-foreground">
          <Anchor className="h-5 w-5 text-primary" />
          Grand Line DB
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-body font-semibold transition-colors duration-150 hover:text-primary ${
                  pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-t border-border">
          <ul className="container-main py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-body font-semibold py-2 transition-colors hover:text-primary ${
                    pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
