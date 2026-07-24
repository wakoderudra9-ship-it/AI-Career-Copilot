import { FaLightbulb } from "react-icons/fa";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

interface SuggestionsCardProps {
  suggestions: string[];
}

function SuggestionsCard({ suggestions }: SuggestionsCardProps) {
  return (
    <Card>
      <SectionTitle title="💡 AI Suggestions" />

      <ul className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-300"
          >
            <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />
            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default SuggestionsCard;