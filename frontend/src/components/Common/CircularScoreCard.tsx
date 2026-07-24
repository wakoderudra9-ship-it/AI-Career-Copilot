import { useEffect, useState } from "react";
import Card from "./Card";
interface CircularScoreCardProps {
  title: string;
  score: number;
  description: string;
}

function CircularScoreCard({
  title,
  score,
  description,
}: CircularScoreCardProps) {
    const [animatedScore, setAnimatedScore] = useState(0);

useEffect(() => {
  let current = 0;

  const interval = setInterval(() => {
    current += 1;

    if (current >= score) {
      current = score;
      clearInterval(interval);
    }

    setAnimatedScore(current);
  }, 15);

  return () => clearInterval(interval);
}, [score]);
  const radius = 58;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;

  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset =
  circumference -
  (animatedScore / 100) * circumference;

  const color =
  animatedScore >= 80
      ? "#22c55e"
      : score >= 50
      ? "#eab308"
      : "#ef4444";

  return (
    <Card>
      <h2 className="text-xl font-semibold text-slate-300">
        {title}
      </h2>

      <div className="mt-8 flex justify-center">
        <div className="relative w-36 h-36">
          <svg
            className="w-36 h-36 -rotate-90"
            viewBox="0 0 120 120"
          >
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r={normalizedRadius}
              stroke="#334155"
              strokeWidth={stroke}
              fill="transparent"
            />

            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r={normalizedRadius}
              stroke={color}
              strokeWidth={stroke}
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-4xl font-bold"
              style={{ color }}
            >
              {animatedScore}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-slate-400">
        {description}
      </p>
    </Card>
  );
}

export default CircularScoreCard;