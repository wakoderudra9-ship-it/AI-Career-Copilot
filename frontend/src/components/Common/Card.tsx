import type { ReactNode } from "react";
import FadeIn from "../../animations/FadeIn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-700/60
          bg-slate-900/80
          backdrop-blur-md
          p-8
          shadow-2xl
          transition-all
          duration-500

          ${
            hover
              ? `
                hover:-translate-y-2
                hover:border-cyan-400/60
                hover:shadow-cyan-500/20
              `
              : ""
          }

          ${className}
        `}
      >
        {/* Top Gradient Line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

export default Card;