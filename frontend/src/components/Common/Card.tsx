import type { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

function Card({
  children,
  className = "",
  hover = true,
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
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-cyan-500/20"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;