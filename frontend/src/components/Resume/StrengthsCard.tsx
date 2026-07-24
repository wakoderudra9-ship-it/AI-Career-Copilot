import { FaCheckCircle } from "react-icons/fa";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

interface StrengthsCardProps {
  strengths: string[];
}

function StrengthsCard({ strengths }: StrengthsCardProps) {
  return (
    <Card>
      <SectionTitle title="💪 Strengths" />

      <ul className="space-y-4">
        {strengths.map((strength, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-300"
          >
            <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
            <span>{strength}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default StrengthsCard;