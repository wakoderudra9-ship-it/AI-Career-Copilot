interface SuggestionsCardProps {
  suggestions: string[];
}

function SuggestionsCard({ suggestions }: SuggestionsCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        💡 AI Suggestions
      </h2>

      <ul className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="text-slate-300 flex items-center gap-3"
          >
            <span className="text-yellow-400 text-lg">➜</span>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionsCard;