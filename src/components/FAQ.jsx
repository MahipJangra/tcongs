import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow text-signal-400">FAQs</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Questions? We've got answers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-300">
            Common questions clients ask before starting a project with us. Don't see
            yours? Reach out directly.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="divide-y divide-white/[0.07] border-t border-b border-white/[0.07]">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-base sm:text-lg text-white">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-all duration-300 ${
                          isOpen ? "rotate-45 border-signal-500/50 text-signal-400" : ""
                        }`}
                      >
                        <Plus size={15} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 max-w-xl text-sm leading-relaxed text-mist-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
