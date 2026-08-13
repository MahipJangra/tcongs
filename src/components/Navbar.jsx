import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/content";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <div className="h-[25%] w-[25%] rounded-lg flex items-center justify-center">
            <img src="/public/logo.png" alt="" />
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="eyebrow text-mist-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-signal-500 px-5 py-2.5 font-display text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-signal-400 hover:shadow-[0_0_24px_rgba(47,209,201,0.35)]"
        >
          Let's Talk
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-ink-950/98 backdrop-blur-xl transition-all duration-300 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
<div className="h-[25%] w-[25%] rounded-lg flex items-center justify-center">
            <img src="/public/logo.png" alt="" />
          </div>
        <ul className="container-x flex flex-col gap-1 pt-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="border-b border-white/[0.06]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <a
                href={link.href}
                onClick={handleNavClick}
                className="flex items-center justify-between py-4 font-display text-2xl text-mist-100 hover:text-signal-400 transition-colors"
              >
                {link.label}
                <ArrowUpRight size={18} className="text-mist-400" />
              </a>
            </li>
          ))}
        </ul>
        <div className="container-x mt-8">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-4 font-display text-base font-medium text-ink-950"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
