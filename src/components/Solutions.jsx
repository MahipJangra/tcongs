import { Globe2, Cpu, ShoppingBag, TrendingUp, ArrowUpRight } from "lucide-react";
import { solutions } from "../data/content";
import Reveal from "./Reveal";

const icons = { Globe2, Cpu, ShoppingBag, TrendingUp };

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-ink-850/40 border-y border-white/[0.06]">
      <div className="container-x">
        <Reveal className="max-w-xl mb-16">
          <span className="eyebrow text-signal-400">Solutions we build</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Solutions shaped around your business
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist-300">
            Every engagement is built around a real business need — here's where we
            spend most of our time.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map(({ category, title, description, icon }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={title} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60 p-8 transition-all duration-400 hover:border-signal-500/40 min-h-[240px] flex flex-col justify-between">
                  <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-current-500/0 blur-3xl transition-all duration-500 group-hover:bg-current-500/10" />

                  <div className="flex items-start justify-between relative">
                    <div>
                      <span className="eyebrow text-mist-400">{category}</span>
                      <h3 className="mt-3 font-display text-2xl text-white">{title}</h3>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-signal-400 transition-transform duration-400 group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                  </div>

                  <div className="relative">
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-300">
                      {description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-1.5 font-display text-sm text-mist-400 transition-colors duration-300 group-hover:text-signal-400">
                      See how
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
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
