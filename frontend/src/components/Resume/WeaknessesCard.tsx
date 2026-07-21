interface WeaknessesCardProps {
  weaknesses: string[];
}

function WeaknessesCard({ weaknesses }: WeaknessesCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <h2 className="text-2xl font-bold text-red-400 mb-6">
        ⚠ Weaknesses
      </h2>

      <ul className="space-y-3">
        {weaknesses.map((weakness, index) => (
          <li
            key={index}
            className="text-slate-300 flex items-center gap-3"
          >
            <span className="text-red-400 text-lg">✖</span>
            {weakness}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeaknessesCard;