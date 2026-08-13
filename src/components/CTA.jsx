import Button from "./ui/Button";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-signal-500/10 to-current-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-line bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_55%_70%_at_50%_50%,#000_10%,transparent_75%)] opacity-60" />

      <Reveal className="container-x relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Have an idea? Let's build it.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-mist-300">
          Let's turn your idea into a digital product that makes an impact.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="#contact" className="!px-8 !py-4 !text-base">
            Start a Conversation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
