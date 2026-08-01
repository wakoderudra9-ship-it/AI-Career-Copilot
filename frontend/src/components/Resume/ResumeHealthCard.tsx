import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";
import ProgressBar from "../Common/ProgressBar";

interface ResumeHealthCardProps {
  resumeScore: number;
  atsScore: number;
  sectionScores: Record<string, number>;
}

function getHealthStatus(score: number) {
  if (score >= 8) {
    return {
      text: "Excellent",
      color: "text-green-400",
      bg: "bg-green-500/15",
    };
  }

  if (score >= 6) {
    return {
      text: "Good",
      color: "text-cyan-400",
      bg: "bg-cyan-500/15",
    };
  }

  if (score >= 4) {
    return {
      text: "Average",
      color: "text-yellow-400",
      bg: "bg-yellow-500/15",
    };
  }

  return {
    text: "Needs Improvement",
    color: "text-red-400",
    bg: "bg-red-500/15",
  };
}

function ResumeHealthCard({
  resumeScore,
  atsScore,
  sectionScores,
}: ResumeHealthCardProps) {

  const overall =
    (resumeScore + atsScore) / 20;

  const status = getHealthStatus(overall);

  return (
    <Card>

      <div className="flex items-center justify-between">

        <SectionTitle
          title="📊 Resume Health"
        />

        <div
          className={`rounded-full px-4 py-2 text-sm font-bold ${status.bg} ${status.color}`}
        >
          {status.text}
        </div>

      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-6">

          <ProgressBar
            label="Overall Resume Score"
            value={resumeScore / 10}
          />

          <ProgressBar
            label="ATS Compatibility"
            value={atsScore / 10}
          />

        </div>

        {/* Right */}

        <div className="rounded-2xl bg-slate-800/50 p-6">

          <h3 className="mb-5 text-lg font-bold text-cyan-300">
            Resume Summary
          </h3>

          <div className="space-y-4 text-slate-300">

            <div className="flex justify-between">
              <span>Resume Score</span>
              <span className="font-bold">
                {resumeScore}/100
              </span>
            </div>

            <div className="flex justify-between">
              <span>ATS Score</span>
              <span className="font-bold">
                {atsScore}/100
              </span>
            </div>

            <div className="flex justify-between">
              <span>Sections Reviewed</span>
              <span className="font-bold">
                {Object.keys(sectionScores).length}
              </span>
            </div>

          </div>

        </div>

      </div>

      <div className="mt-10 border-t border-slate-700 pt-8">

        <h3 className="mb-6 text-xl font-bold text-cyan-300">
          Section Performance
        </h3>

        <div className="space-y-5">

          {Object.entries(sectionScores).map(
            ([section, score]) => (
              <ProgressBar
                key={section}
                label={section}
                value={score}
              />
            )
          )}

        </div>

      </div>

    </Card>
  );
}

export default ResumeHealthCard;