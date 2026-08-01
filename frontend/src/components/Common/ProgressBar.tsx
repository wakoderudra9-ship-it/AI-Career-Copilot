import { useEffect, useState } from "react";

interface ProgressBarProps {
  label: string;
  value: number;
}

function ProgressBar({
  label,
  value,
}: ProgressBarProps) {

  // Automatically normalize 10-point scores to percentages
  const percentage =
    value <= 10 ? value * 10 : value;

  const [animatedWidth, setAnimatedWidth] =
    useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 150);

    return () => clearTimeout(timer);
  }, [percentage]);

  const color =
    percentage >= 80
      ? "from-green-500 to-emerald-400"
      : percentage >= 60
      ? "from-cyan-500 to-blue-500"
      : percentage >= 40
      ? "from-yellow-500 to-orange-400"
      : "from-red-500 to-red-400";

  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <span className="capitalize font-medium text-slate-300">
          {label}
        </span>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-bold text-white">
          {percentage}%
        </span>

      </div>

      <div className="h-4 w-full overflow-hidden rounded-full bg-slate-800">

        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{
            width: `${animatedWidth}%`,
          }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;