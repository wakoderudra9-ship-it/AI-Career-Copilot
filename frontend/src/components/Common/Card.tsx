import type { ReactNode } from "react";

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
    <div
      className={`
        bg-slate-800
        border
        border-slate-700
        rounded-2xl
        p-8
        shadow-lg
        transition-all
        duration-500
        opacity-0
        animate-fadeIn
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-cyan-500/20"
            : ""
        }
        ${className}
      `}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

export default Card;