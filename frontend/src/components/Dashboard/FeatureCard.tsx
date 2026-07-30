import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
  badge?: string;
  gradient?: string;
  disabled?: boolean;
}

function FeatureCard({
  title,
  description,
  icon,
  onClick,
  badge,
  gradient = "from-cyan-500 to-blue-600",
  disabled = false,
}: FeatureCardProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden rounded-3xl border p-6 text-left
        transition-all duration-300 shadow-lg
        ${
          disabled
            ? "cursor-not-allowed border-slate-800 bg-slate-900/70 opacity-75"
            : "border-slate-700 bg-slate-900 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/20"
        }
      `}
    >
      {/* Badge */}

      {badge && (
        <div
          className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold ${
            disabled
              ? "bg-slate-700 text-slate-300"
              : "bg-emerald-500 text-white"
          }`}
        >
          {badge}
        </div>
      )}

      {/* Icon */}

      <div
        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${gradient} text-white text-3xl shadow-lg mb-6`}
      >
        {icon}
      </div>

      {/* Title */}

      <h2 className="text-2xl font-bold text-white mb-3">
        {title}
      </h2>

      {/* Description */}

      <p className="text-slate-400 leading-7">
        {description}
      </p>

      {/* Bottom Label */}

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {disabled ? "Coming Soon" : "Open Module"}
        </span>

        {!disabled && (
          <span className="text-cyan-400 text-xl font-bold">
            →
          </span>
        )}
      </div>
    </button>
  );
}

export default FeatureCard;