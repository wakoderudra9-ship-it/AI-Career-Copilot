import { FaExclamationTriangle } from "react-icons/fa";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

interface WeaknessesCardProps {
  weaknesses: string[];
}

function WeaknessesCard({
  weaknesses,
}: WeaknessesCardProps) {
  return (
    <Card>

      <div className="flex items-center justify-between mb-6">

        <SectionTitle title="⚠️ Weaknesses" />

        <div className="rounded-full bg-red-500/15 px-4 py-2 text-sm font-bold text-red-300">
          {weaknesses.length}{" "}
          {weaknesses.length === 1
            ? "Weakness"
            : "Weaknesses"}
        </div>

      </div>

      {weaknesses.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-8 text-center">

          <p className="text-lg text-slate-400">
            No weaknesses detected.
          </p>

        </div>

      ) : (

        <ul className="space-y-4">

          {weaknesses.map((weakness, index) => (

            <li
              key={index}
              className="flex items-start gap-4 rounded-xl border border-red-500/10 bg-red-500/5 p-4 transition-all duration-300 hover:bg-red-500/10 hover:translate-x-1"
            >

              <FaExclamationTriangle className="mt-1 flex-shrink-0 text-xl text-red-400" />

              <span className="leading-7 text-slate-200">
                {weakness}
              </span>

            </li>

          ))}

        </ul>

      )}

      <div className="mt-8 rounded-2xl border border-red-500/10 bg-red-500/5 p-5">

        <h3 className="mb-2 text-lg font-semibold text-red-300">
          AI Recommendation
        </h3>

        <p className="leading-7 text-slate-300">
          These areas may reduce your resume's effectiveness during ATS
          screening or recruiter review. Addressing these weaknesses can
          improve your overall resume quality and increase your chances of
          getting shortlisted.
        </p>

      </div>

    </Card>
  );
}

export default WeaknessesCard;