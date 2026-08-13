import {
  Globe2,
  Cpu,
  ShoppingBag,
  TrendingUp,
  PenTool,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../data/content";
import Reveal from "./Reveal";

const icons = { Globe2, Cpu, ShoppingBag, TrendingUp, PenTool, Rocket };

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-signal-400">What we do</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Digital solutions built for modern businesses
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist-300">
            Scalable web, software and marketing services — tailored to how your
            business actually operates, not a one-size-fits-all package.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ index, icon, title, description }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850/50 p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-signal-500/40 hover:bg-ink-800/70">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-signal-500/0 blur-2xl transition-all duration-500 group-hover:bg-signal-500/10" />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-mist-400">{index}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-signal-400 transition-all duration-400 group-hover:bg-signal-500/15 group-hover:rotate-6">
                      <Icon size={19} />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300">{description}</p>

                  <div className="mt-7 flex items-center gap-1.5 font-display text-sm text-mist-400 transition-colors duration-300 group-hover:text-signal-400">
                    Learn more
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
