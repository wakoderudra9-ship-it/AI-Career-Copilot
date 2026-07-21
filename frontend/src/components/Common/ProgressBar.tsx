interface ProgressBarProps {
  label: string;
  value: number;
}

function ProgressBar({
  label,
  value,
}: ProgressBarProps) {
  const color =
    value >= 80
      ? "bg-green-500"
      : value >= 50
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="capitalize text-slate-300">
          {label}
        </span>

        <span className="font-semibold text-slate-400">
          {value}/10
        </span>
      </div>

      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`${color} h-full rounded-full transition-all duration-700`}
          style={{ width: `${value * 10}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;