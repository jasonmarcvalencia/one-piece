import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Anchor, Moon, Sun } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/story-arcs", label: "Story Arcs" },
  { to: "/devil-fruits", label: "Devil Fruits" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const isFirstRender = useRef(true);

  const toggleTheme = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Use View Transitions API if available
    if (document.startViewTransition) {
      document.documentElement.style.setProperty("--reveal-x", `${x}px`);
      document.documentElement.style.setProperty("--reveal-y", `${y}px`);
      document.documentElement.style.setProperty("--reveal-r", `${endRadius}px`);

      const transition = document.startViewTransition(() => {
        setDark((prev) => !prev);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      // Fallback: just toggle without animation
      setDark((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!scrolled && pathname === "/" ? "bg-transparent" : "nav-blur"}`}>
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
          <li>
            <button
              onClick={toggleTheme}
              className="relative text-muted-foreground hover:text-primary transition-colors duration-150"
              aria-label="Toggle dark mode"
            >
              <span key={dark ? "sun" : "moon"} className="inline-block animate-spin-in">
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-foreground"
            aria-label="Toggle dark mode"
          >
            <span key={dark ? "sun" : "moon"} className="inline-block animate-spin-in">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </span>
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-t border-border animate-fade-down">
          <ul className="container-main py-4 flex flex-col gap-3">
            {links.map((l, i) => (
              <li key={l.to} className="animate-fade-up opacity-0" style={{ animationDelay: `${i * 50}ms` }}>
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
