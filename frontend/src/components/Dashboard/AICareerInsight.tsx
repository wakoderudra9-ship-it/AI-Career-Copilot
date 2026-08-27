import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaArrowRight,
  FaLightbulb,
} from "react-icons/fa";

import { getLatestResumeAnalysis } from "../../services/resumeService";

interface ResumeAnalysis {
  ats_score?: number;
  resume_score?: number;
  ai_feedback?: string;
  improvement_suggestions?: string[];
  missing_skills?: string[];
  strengths?: string[];
  weaknesses?: string[];
}

function AICareerInsight() {
  const navigate = useNavigate();

  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const data = await getLatestResumeAnalysis();

        setAnalysis(data.analysis);
      } catch {
        setAnalysis(null);
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, []);

  const aiFeedback = analysis?.ai_feedback;

  const suggestions = analysis?.improvement_suggestions ?? [];

  return (
    <section className="mb-10">

      {/* Section Header */}

      <div className="mb-5">

        <h2 className="text-xl font-bold text-white">
          AI Career Insight
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Personalized guidance powered by your career data.
        </p>

      </div>

      {/* Main Card */}

      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-600/10 p-7 shadow-xl">

        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400">
                <FaRobot />
              </div>

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <h3 className="text-xl font-bold text-white">
                    Your AI Career Assistant
                  </h3>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                    AI Copilot
                  </span>

                </div>

                {/* AI Feedback */}

                <div className="mt-4 max-w-3xl">

                  {loading ? (

                    <p className="leading-7 text-slate-400">
                      Analyzing your latest career data...
                    </p>

                  ) : aiFeedback &&
                    !aiFeedback.toLowerCase().includes("temporarily unavailable") ? (

                    <p className="leading-7 text-slate-300">
                      {aiFeedback}
                    </p>

                  ) : (

                    <p className="leading-7 text-slate-400">
                      Your resume analysis is available. Review your
                      recommendations and improvement areas to strengthen
                      your career profile.
                    </p>

                  )}

                </div>

              </div>

            </div>

            {/* Analyze Button */}

            <button
              type="button"
              onClick={() => navigate("/resume")}
              className="group flex shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20"
            >
              Analyze Resume

              <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

          </div>

          {/* Suggestions */}

          {!loading && suggestions.length > 0 && (

            <div className="mt-7 border-t border-slate-800/80 pt-6">

              <div className="mb-4 flex items-center gap-2">

                <FaLightbulb className="text-yellow-400" />

                <h4 className="font-semibold text-white">
                  Top AI Recommendations
                </h4>

              </div>

              <div className="grid gap-3 md:grid-cols-2">

                {suggestions.slice(0, 4).map((suggestion, index) => (

                  <div
                    key={`${suggestion}-${index}`}
                    className="rounded-xl border border-slate-800 bg-slate-950/40 p-4"
                  >

                    <div className="flex gap-3">

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-400">
                        {suggestion}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default AICareerInsight;