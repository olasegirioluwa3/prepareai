import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[11px] font-bold tracking-[0.16em] text-orange-600 ${className}`}>{children}</p>;
}

export function Button({
  children,
  href = "#pricing",
  onClick,
  variant = "primary",
  className = "",
  type,
  showDot = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
  type?: "button" | "submit";
  showDot?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 relative overflow-hidden";
  const styles = {
    primary: "bg-orange-500 text-white shadow-[0_14px_30px_-10px_rgba(249,115,22,0.68)] hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_18px_35px_-10px_rgba(249,115,22,0.74)]",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-600",
    inverse: "bg-white text-slate-950 shadow-[0_18px_35px_-15px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 hover:bg-orange-50",
  }[variant];

  const dotElement = showDot ? (
    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:bg-amber-400 group-hover:rounded-full flex items-center justify-center">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-3 h-3 text-orange-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </span>
  ) : null;

  if (type === "submit") {
    return (
      <button type="submit" onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
        {dotElement}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      {dotElement}
    </a>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/newlogo.png"
      alt="ZED Prepare AI logo"
      className={className}
    />
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="ZED Prepare AI home">
      <LogoMark className="h-10 w-10 shrink-0 rounded-[12px] shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105" />
      <span className={`text-base font-bold tracking-[-0.04em] ${light ? "text-white" : "text-slate-950"}`}>
        ZED <span className={light ? "text-orange-300" : "text-orange-600"}>Prepare</span>
      </span>
    </a>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  // Only apply character reveal for simple text strings
  if (typeof children !== 'string') {
    return <span className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</span>;
  }

  const chars = children.split('');

  return (
    <span className={`text-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {chars.map((char, index) => (
        <span
          key={index}
          className="text-reveal-char"
          style={{ transitionDelay: `${index * 25}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
