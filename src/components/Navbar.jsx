7import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =====================================================
     LOCK PAGE SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  /* =====================================================
     CLOSE MENU AFTER NAVIGATION
  ===================================================== */
  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-[120] transition-all duration-300 ${
          scrolled
            ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <nav
          className="container-x flex items-center justify-between"
          aria-label="Primary"
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="flex items-center gap-2 font-display text-lg font-semibold text-white"
          >
            <div className="h-20 w-20 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Tcongs Infotech"
                className="h-full w-full object-contain"
              />
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
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

          {/* =================================================
              DESKTOP CTA
          ================================================= */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-signal-500 px-5 py-2.5 font-display text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-signal-400 hover:shadow-[0_0_24px_rgba(47,209,201,0.35)]"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          {/* =================================================
              MOBILE MENU BUTTON

              No X button.
              Same hamburger button opens/closes menu.
          ================================================= */}
          <button
            type="button"
            className="lg:hidden relative z-[200] flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU OVERLAY
          
          IMPORTANT:
          The overlay covers the whole screen.
          Clicking its empty area closes the menu.
      ===================================================== */}
      <div
        className={`
          lg:hidden fixed inset-0 z-[110]
          bg-[#06080F]
          transition-all duration-300 ease-out
          ${
            open
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        style={{
          backgroundColor: "#06080F",
          isolation: "isolate",
        }}
        onClick={() => setOpen(false)}
      >
        {/* =================================================
            MENU CONTENT

            IMPORTANT:
            DO NOT use min-h-[100dvh] here.

            This content only occupies the actual menu area.
            Therefore, the empty area underneath receives the
            click and closes the menu.
        ================================================= */}
        <div
          className="w-full bg-[#06080F] pt-[96px]"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {/* =================================================
              MOBILE LOGO
          ================================================= */}
           {/*=================================================
              MOBILE LINKS
          ================================================= */}
          <ul className="container-x flex flex-col gap-1 pt-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="border-b border-white/[0.06]"
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between py-4 font-display text-2xl text-mist-100 hover:text-signal-400 transition-colors duration-200"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={18}
                    className="text-mist-400"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* =================================================
              MOBILE CTA
          ================================================= */}
          <div className="container-x mt-8">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-500 px-6 py-4 font-display text-base font-medium text-ink-950 transition-all duration-300 hover:bg-signal-400"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}