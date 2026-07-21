interface StrengthsCardProps {
  strengths: string[];
}

function StrengthsCard({ strengths }: StrengthsCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <h2 className="text-2xl font-bold text-green-400 mb-6">
        💪 Strengths
      </h2>

      <ul className="space-y-3">
        {strengths.map((strength, index) => (
          <li
            key={index}
            className="text-slate-300 flex items-center gap-3"
          >
            <span className="text-green-400 text-lg">✔</span>
            {strength}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StrengthsCard;