import { process } from "../data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-xl mb-16">
          <span className="eyebrow text-signal-400">How we work</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            From idea to scalable digital product
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist-300">
            A proven six-step process that takes your idea from strategy to launch — and
            keeps it growing afterward.
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-0 right-0 top-[13px] h-px bg-white/10" />
          <div className="grid grid-cols-6 gap-6">
            {process.map((step, i) => (
              <Reveal key={step.index} delay={i * 90}>
                <div className="relative">
                  <div className="relative z-10 h-[26px] w-[26px] rounded-full border-2 border-signal-500 bg-ink-950 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-signal-500" />
                  </div>
                  <p className="mt-6 font-mono text-xs text-mist-400">{step.index}</p>
                  <h3 className="mt-1.5 font-display text-base text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-display text-xs text-signal-400">{step.subtitle}</p>
                  <p className="mt-3 text-xs leading-relaxed text-mist-400">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-10">
            {process.map((step, i) => (
              <Reveal key={step.index} delay={i * 70} className="relative">
                <div className="absolute -left-8 top-0.5 h-[26px] w-[26px] rounded-full border-2 border-signal-500 bg-ink-950 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-signal-500" />
                </div>
                <p className="font-mono text-xs text-mist-400">{step.index}</p>
                <h3 className="mt-1.5 font-display text-lg text-white">{step.title}</h3>
                <p className="mt-1 font-display text-xs text-signal-400">{step.subtitle}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-300 max-w-sm">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
