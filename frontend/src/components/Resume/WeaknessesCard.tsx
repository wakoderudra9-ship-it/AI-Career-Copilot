import { FaExclamationCircle } from "react-icons/fa";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

interface WeaknessesCardProps {
  weaknesses: string[];
}

function WeaknessesCard({ weaknesses }: WeaknessesCardProps) {
  return (
    <Card>
      <SectionTitle title="⚠️ Weaknesses" />

      <ul className="space-y-4">
        {weaknesses.map((weakness, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-slate-300"
          >
            <FaExclamationCircle className="text-red-400 mt-1 flex-shrink-0" />
            <span>{weakness}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default WeaknessesCard;