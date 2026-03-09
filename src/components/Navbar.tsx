import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About Us", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Research", href: "/research" },
  { label: "Engineering", href: "/engineering" },
  { label: "Blog", href: "/blog" },
  { label: "GitHub", href: "https://github.com/Husky-Quantitative-Group", external: true },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("hqg-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("hqg-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Bottom border with fade transition */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-border transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="" className={`flex items-center ${dark ? "gap-4" : "gap-4"} group`}>
          <img
            src={dark ? "/icons/logos/alt_logo_no_bg.png" : "/icons/logos/logo_no_bg.png"}
            alt="HQG"
            className={`${dark ? "h-12" : "h-12"} w-auto`}
          />
          <span className="hidden sm:inline text-xs font-ui font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Husky Quantitative Group
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="relative px-3 py-2 text-sm font-ui font-semibold uppercase tracking-[0.06em] text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}

          <a
            href="#apply"
            className="ml-3 px-5 py-2 text-sm font-ui font-bold uppercase tracking-[0.06em] bg-primary text-primary-foreground rounded-sm hover:bg-hqg-terracotta transition-colors duration-200"
          >
            Apply
          </a>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-ui font-semibold uppercase tracking-[0.06em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-ui font-bold uppercase tracking-[0.06em] text-primary hover:text-hqg-terracotta transition-colors"
              >
                Apply →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
