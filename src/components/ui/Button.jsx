import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-signal-500 text-ink-950 hover:bg-signal-400 shadow-[0_0_0_1px_rgba(47,209,201,0.3)]",
  secondary:
    "bg-transparent text-mist-100 border border-ink-600 hover:border-signal-500/60 hover:text-white",
  ghost: "bg-white/5 text-mist-100 border border-white/10 hover:bg-white/10",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
  as,
  type = "button",
}) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium tracking-tight transition-all duration-300 active:scale-[0.97] ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={as === "external" ? "_blank" : undefined} rel={as === "external" ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
