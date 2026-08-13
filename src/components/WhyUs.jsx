import { Layers, Settings2, MessageCircle, Globe } from "lucide-react";
import { whyUs } from "../data/content";
import Reveal from "./Reveal";

const icons = { Layers, Settings2, MessageCircle, Globe };

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-xl mb-16">
          <span className="eyebrow text-signal-400">Why choose us</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Reasons businesses stay with us
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 divide-y divide-white/[0.06] border-y border-white/[0.06] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {whyUs.map(({ icon, title, description }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={title} delay={i * 70}>
                <div className="group flex gap-5 px-1 py-9 sm:px-8 lg:px-10">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-signal-400 transition-colors duration-300 group-hover:border-signal-500/50 group-hover:bg-signal-500/10">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-white">{title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-mist-300">{description}</p>
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
