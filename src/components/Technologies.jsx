import { technologies } from "../data/content";
import Reveal from "./Reveal";

export default function Technologies() {
  return (
    <section className="py-24 lg:py-28 bg-ink-850/40 border-y border-white/[0.06]">
      <div className="container-x">
        <Reveal className="max-w-xl mb-12">
          <span className="eyebrow text-signal-400">Built with</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
            Technology we build with
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-300">
            A dependable stack chosen for stability and speed — matched to the platform
            each project actually needs.
          </p>
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 font-mono text-sm text-mist-200 transition-colors duration-300 hover:border-signal-500/40 hover:text-signal-300"
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
