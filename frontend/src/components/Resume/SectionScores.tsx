import Card from "../Common/Card";
import ProgressBar from "../Common/ProgressBar";
import SectionTitle from "../Common/SectionTitle";

interface SectionScoresProps {
  scores: Record<string, number>;
}

function getStatus(score: number) {
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
    text: "Needs Work",
    color: "text-red-400",
    bg: "bg-red-500/15",
  };
}

function SectionScores({
  scores,
}: SectionScoresProps) {
  return (
    <Card>

      <div className="flex items-center justify-between mb-8">

        <SectionTitle title="📊 Section Performance" />

        <div className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-bold text-cyan-300">
          {Object.keys(scores).length} Sections
        </div>

      </div>

      <div className="space-y-6">

        {Object.entries(scores).map(
          ([section, score]) => {

            const status = getStatus(score);

            return (
              <div
                key={section}
                className="rounded-2xl border border-slate-700 bg-slate-800/40 p-5 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
              >

                <div className="mb-4 flex items-center justify-between">

                  <div>

                    <h3 className="text-lg font-semibold capitalize text-white">
                      {section.replace(/_/g, " ")}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Score: {score}/10
                    </p>

                  </div>

                  <div
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${status.bg} ${status.color}`}
                  >
                    {status.text}
                  </div>

                </div>

                <ProgressBar
                  label=""
                  value={score}
                />

              </div>
            );
          }
        )}

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 p-5">

        <h3 className="mb-2 text-lg font-semibold text-cyan-300">
          AI Insight
        </h3>

        <p className="leading-7 text-slate-300">
          Each resume section is evaluated independently based on
          content quality, ATS optimization, completeness, and
          recruiter expectations. Improving lower-scoring sections
          can significantly increase your overall resume score.
        </p>

      </div>

    </Card>
  );
}

export default SectionScores;