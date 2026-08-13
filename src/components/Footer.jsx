import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { navLinks, footerServices, contact } from "../data/content";

// lucide-react no longer ships brand icons, so LinkedIn's glyph is inlined here.
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/[0.06] pt-20 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal-500 to-current-500 text-ink-950 text-sm">
                T
              </span>
              Tcongs<span className="text-signal-400">.</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-400">
              Empowering global brands with 7+ years of expertise in custom web
              development, e-commerce marketplace optimization, and digital growth. We
              turn complex challenges into seamless digital experiences.
            </p>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tcongs Infotech on LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors duration-300 hover:border-signal-500/50 hover:text-signal-400"
            >
              <LinkedInIcon />
            </a>
          </div>

          <div>
            <h4 className="eyebrow text-mist-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist-300 hover:text-signal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-mist-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <span className="text-sm text-mist-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-mist-400 mb-5">Get in touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-2.5 text-sm text-mist-300 hover:text-signal-400 transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-signal-400" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-mist-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-signal-400" />
                {contact.location}
              </li>
              <li>
                <a
                  href={contact.scheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-mist-100 transition-colors duration-300 hover:border-signal-500/50 hover:text-signal-400"
                >
                  Schedule a call
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-mist-400">
            © {year} Tcongs Infotech. All rights reserved.
          </p>
          <p className="text-xs text-mist-400">Mumbai, India · Built for the web.</p>
        </div>
      </div>
    </footer>
  );
}
