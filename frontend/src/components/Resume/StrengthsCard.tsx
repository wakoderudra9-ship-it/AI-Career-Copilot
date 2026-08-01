import { FaCheckCircle } from "react-icons/fa";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

interface StrengthsCardProps {
  strengths: string[];
}

function StrengthsCard({
  strengths,
}: StrengthsCardProps) {
  return (
    <Card>

      <div className="flex items-center justify-between mb-6">

        <SectionTitle title="💪 Strengths" />

        <div className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-bold text-green-300">
          {strengths.length}{" "}
          {strengths.length === 1
            ? "Strength"
            : "Strengths"}
        </div>

      </div>

      {strengths.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-8 text-center">

          <p className="text-slate-400 text-lg">
            No strengths detected.
          </p>

        </div>

      ) : (

        <ul className="space-y-4">

          {strengths.map((strength, index) => (

            <li
              key={index}
              className="flex items-start gap-4 rounded-xl bg-green-500/5 border border-green-500/10 p-4 transition-all duration-300 hover:bg-green-500/10 hover:translate-x-1"
            >

              <FaCheckCircle className="mt-1 flex-shrink-0 text-xl text-green-400" />

              <span className="leading-7 text-slate-200">
                {strength}
              </span>

            </li>

          ))}

        </ul>

      )}

      <div className="mt-8 rounded-2xl bg-green-500/5 border border-green-500/10 p-5">

        <h3 className="text-lg font-semibold text-green-300 mb-2">
          AI Insight
        </h3>

        <p className="leading-7 text-slate-300">
          These strengths were identified from your resume.
          Continue emphasizing these areas because they improve
          recruiter confidence and increase your chances of
          passing ATS screening.
        </p>

      </div>

    </Card>
  );
}

export default StrengthsCard;