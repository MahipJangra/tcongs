import { MapPin, Users } from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./Reveal";
import { stats } from "../data/content";

export default function About() {
  return (
    
    <section id="about" className="py-24 lg:py-32 bg-ink-850/40 border-y border-white/[0.06]">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-ink-800 to-ink-900 p-8 overflow-hidden">
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-current-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-signal-500/10 blur-[90px]" />

            <span className="eyebrow text-signal-400">Since 2020</span>
            <p className="mt-3 font-display text-2xl leading-snug text-white">
              Building digital products for businesses across four countries.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <p className="font-display text-2xl text-signal-400">{s.value}</p>
                  <p className="mt-1 text-xs text-mist-400">{s.label}</p>
                </div>
              ))}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 flex flex-col justify-center">
                <MapPin size={16} className="text-signal-400 mb-1.5" />
                <p className="text-xs text-mist-400">Mumbai, India — global clients</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="order-1 lg:order-2" delay={100}>
          <span className="eyebrow text-signal-400">Who we are</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            A digital solutions partner, not just a dev shop
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist-300">
            Tcongs Infotech is a web development and digital solutions company focused on
            building powerful, scalable and user-friendly digital products. We help businesses
            establish a strong online presence and achieve real growth.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist-400">
            With 7+ years of industry experience and 150+ delivered projects, our team works
            across website development, mobile applications, software systems and digital
            marketing — serving clients in India, the USA, Canada and the UAE with transparent,
            remote-first collaboration.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Users size={17} className="text-signal-400" />
            <p className="text-sm text-mist-300">
              A focused team dedicated to custom solutions and clear communication.
            </p>
          </div>

          <div className="mt-9">
            <Button href="#contact">Work With Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
