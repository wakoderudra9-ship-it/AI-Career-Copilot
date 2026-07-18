import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
}

function FeatureCard({
  title,
  description,
  icon,
  onClick,
}: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-left hover:border-cyan-500 hover:scale-[1.02] transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-2">
        {description}
      </p>
    </button>
  );
}

export default FeatureCard;