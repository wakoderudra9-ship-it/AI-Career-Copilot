import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

import { getLatestResumeAnalysis } from "../../services/resumeService";

interface ResumeAnalysis {
  resume_score?: number;
  ats_score?: number;
  skills?: string[];
}

function CareerReadinessCard() {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateReadiness = async () => {
      try {
        const data = await getLatestResumeAnalysis();

        const analysis: ResumeAnalysis = data.analysis;

        const atsScore = analysis.ats_score ?? 0;
        const resumeScore = analysis.resume_score ?? 0;
        const skillsCount = analysis.skills?.length ?? 0;

        /*
          Career Readiness Formula

          ATS Score      → 40%
          Resume Score   → 40%
          Skills         → 20%
        */

        const skillsScore = Math.min(skillsCount / 10, 1) * 100;

        const readiness =
          atsScore * 0.4 +
          resumeScore * 0.4 +
          skillsScore * 0.2;

        setScore(Math.round(readiness));
      } catch {
        setScore(null);
      } finally {
        setLoading(false);
      }
    };

    calculateReadiness();
  }, []);

  const hasScore = typeof score === "number";

  const displayScore = hasScore ? score : 0;

  return (
    <section className="mb-10">

      {/* Section Header */}

      <div className="mb-5">

        <h2 className="text-xl font-bold text-white">
          Career Readiness
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track how prepared your profile is for your next career opportunity.
        </p>

      </div>

      {/* Readiness Card */}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Information */}

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <FaRocket />
              </div>

              <div>

                <p className="text-sm font-medium text-slate-400">
                  Overall readiness
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {loading
                    ? "Calculating..."
                    : hasScore
                    ? `${displayScore}/100`
                    : "Not calculated"}
                </h3>

              </div>

            </div>

            <p className="leading-7 text-slate-400">

              {loading
                ? "Analyzing your latest resume data..."
                : hasScore
                ? "Your career readiness score is calculated from your latest ATS score, resume quality, and detected skills."
                : "Upload your resume and complete an analysis to calculate your career readiness score."}

            </p>

            {/* Progress */}

            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between text-xs">

                <span className="text-slate-500">
                  Progress
                </span>

                <span className="font-medium text-cyan-400">
                  {loading
                    ? "--"
                    : hasScore
                    ? `${displayScore}%`
                    : "--"}
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                  style={{
                    width: `${displayScore}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* Action */}

          {!hasScore && !loading && (

            <button
              type="button"
              className="shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20"
            >
              Analyze Resume
            </button>

          )}

        </div>

      </div>

    </section>
  );
}

export default CareerReadinessCard;