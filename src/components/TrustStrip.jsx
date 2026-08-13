import { ShieldCheck } from "lucide-react";
import { capabilityStrip } from "../data/content";
import Reveal from "./Reveal";

export default function TrustStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-850/40 py-8">
      <Reveal className="container-x flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-2.5 shrink-0">
          <ShieldCheck size={16} className="text-signal-400" />
          <span className="eyebrow text-mist-300">
            Trusted by businesses worldwide to build scalable digital solutions
          </span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {capabilityStrip.map((label) => (
            <li key={label} className="font-display text-sm text-mist-200 whitespace-nowrap">
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
