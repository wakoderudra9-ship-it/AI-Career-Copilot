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

      current++;

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

  const circumference =
    2 * Math.PI * normalizedRadius;

  const strokeDashoffset =
    circumference -
    (animatedScore / 100) * circumference;

  const color =
    animatedScore >= 85
      ? "#22c55e"
      : animatedScore >= 70
      ? "#06b6d4"
      : animatedScore >= 50
      ? "#eab308"
      : "#ef4444";

  const status =
    animatedScore >= 85
      ? "Excellent"
      : animatedScore >= 70
      ? "Good"
      : animatedScore >= 50
      ? "Average"
      : "Needs Improvement";

  return (
    <Card>

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <span
          className="rounded-full px-4 py-1 text-sm font-semibold"
          style={{
            backgroundColor: `${color}22`,
            color,
          }}
        >
          {status}
        </span>

      </div>

      <div className="mt-8 flex justify-center">

        <div className="relative h-40 w-40">

          <svg
            className="h-40 w-40 -rotate-90"
            viewBox="0 0 120 120"
          >

            {/* Background */}

            <circle
              cx="60"
              cy="60"
              r={normalizedRadius}
              stroke="#1e293b"
              strokeWidth={stroke}
              fill="transparent"
            />

            {/* Progress */}

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
                transition:
                  "stroke-dashoffset 1s ease-in-out",
              }}
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span
              className="text-5xl font-extrabold"
              style={{ color }}
            >
              {animatedScore}
            </span>

            <span className="text-slate-400 text-sm">
              /100
            </span>

          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-800/60 p-4">

        <p className="text-center leading-7 text-slate-300">
          {description}
        </p>

      </div>

    </Card>
  );
}

export default CircularScoreCard;