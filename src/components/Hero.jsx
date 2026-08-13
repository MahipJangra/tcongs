import { Sparkles, Globe2, Smartphone, TrendingUp, ShoppingBag } from "lucide-react";
import Button from "./ui/Button";

const floatCards = [
  { icon: Globe2, label: "Web Development", pos: "top-[6%] left-[2%]", delay: "animate-float" },
  { icon: Smartphone, label: "Mobile Apps", pos: "top-[46%] right-[0%]", delay: "animate-float-delay" },
  { icon: ShoppingBag, label: "E-commerce", pos: "bottom-[10%] left-[10%]", delay: "animate-float-slow" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-line bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_80%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-current-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-signal-500/10 blur-[120px]" />

      <div className="container-x relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left column */}
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 mb-7">
            <Sparkles size={13} className="text-signal-400" />
            <span className="eyebrow text-mist-300">Web · App · Digital Solutions</span>
          </div>

          <h1
            className="animate-fade-up font-display text-[13vw] leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Build.
            <br />
            Innovate.
            <br />
            <span className="bg-gradient-to-r from-signal-400 to-current-400 bg-clip-text text-transparent">
              Grow.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-md text-lg leading-relaxed text-mist-300"
            style={{ animationDelay: "160ms" }}
          >
            We help brands grow with web, app and marketing solutions across the globe —
            turning ideas into scalable digital products that move your business forward.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="#contact">Start a Project</Button>
            <Button href="#services" variant="secondary" icon={false}>
              Explore Services
            </Button>
          </div>

          <div
            className="animate-fade-up mt-14 flex items-center gap-8 border-t border-white/[0.06] pt-7"
            style={{ animationDelay: "320ms" }}
          >
            <div>
              <p className="font-display text-2xl text-white">150+</p>
              <p className="eyebrow mt-1 text-mist-400">Projects delivered</p>
            </div>
            <div className="h-9 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl text-white">7+</p>
              <p className="eyebrow mt-1 text-mist-400">Years experience</p>
            </div>
            <div className="h-9 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl text-white">4.9</p>
              <p className="eyebrow mt-1 text-mist-400">Avg. client rating</p>
            </div>
          </div>
        </div>

        {/* Right column — signature dashboard/node visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[520px] lg:max-w-none" aria-hidden="true">
          <div className="absolute inset-0 rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-ink-800/60 to-ink-900/60 backdrop-blur-sm">
            <svg
              className="absolute inset-0 h-full w-full opacity-70"
              viewBox="0 0 400 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <line x1="60" y1="90" x2="200" y2="240" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="340" y1="260" x2="200" y2="240" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="110" y1="410" x2="200" y2="240" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 5" />
              <circle cx="200" cy="240" r="5" fill="#2FD1C9" />
              <circle cx="200" cy="240" r="12" stroke="#2FD1C9" strokeOpacity="0.35" />
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2FD1C9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4C7BFF" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central dashboard card */}
            <div className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-ink-850/90 p-5 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-signal-400">System / Live</span>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-signal-400" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                <div className="h-2 w-full rounded-full bg-white/[0.06]">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-signal-500 to-current-500" />
                </div>
                <div className="h-2 w-full rounded-full bg-white/[0.06]">
                  <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-current-500 to-signal-500" />
                </div>
                <div className="h-2 w-full rounded-full bg-white/[0.06]">
                  <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-signal-500 to-current-500" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 font-display text-xs text-mist-300">
                <TrendingUp size={14} className="text-signal-400" />
                Growth up 24% this quarter
              </div>
            </div>
          </div>

          {/* Floating capability cards */}
          {floatCards.map(({ icon: Icon, label, pos, delay }) => (
            <div
              key={label}
              className={`absolute ${pos} ${delay} hidden sm:flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-md`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-500/10 text-signal-400">
                <Icon size={16} />
              </span>
              <span className="font-display text-xs text-mist-100 whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
