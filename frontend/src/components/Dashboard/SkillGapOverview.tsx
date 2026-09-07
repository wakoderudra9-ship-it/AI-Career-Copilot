import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

import { getLatestResumeAnalysis } from "../../services/resumeService";

interface ResumeAnalysis {
  skills?: string[];
  missing_skills?: string[];
}

function SkillGapOverview() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getLatestResumeAnalysis();

        setAnalysis(data.analysis);
      } catch {
        setAnalysis(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const skills = analysis?.skills ?? [];
  const missingSkills = analysis?.missing_skills ?? [];

  return (
    <section className="mb-10">

      {/* Section Header */}

      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Skill Gap Analysis
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Understand your current strengths and identify skills to develop.
        </p>
      </div>

      {/* Main Card */}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

        {/* Summary */}

        <div className="mb-7 grid gap-4 sm:grid-cols-2">

          {/* Detected Skills */}

          <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FaCheckCircle />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Skills Detected
                  </p>

                  <p className="text-2xl font-bold text-white">
                    {loading ? "--" : skills.length}
                  </p>
                </div>

              </div>

              <span className="text-xs font-medium uppercase tracking-wide text-emerald-400">
                Strengths
              </span>

            </div>

          </div>

          {/* Missing Skills */}

          <div className="rounded-xl border border-yellow-500/10 bg-yellow-500/5 p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                  <FaExclamationTriangle />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Skills to Develop
                  </p>

                  <p className="text-2xl font-bold text-white">
                    {loading ? "--" : missingSkills.length}
                  </p>
                </div>

              </div>

              <span className="text-xs font-medium uppercase tracking-wide text-yellow-400">
                Skill Gap
              </span>

            </div>

          </div>

        </div>

        {/* Skills Columns */}

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Current Skills */}

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

            <div className="mb-5 flex items-center gap-2">

              <FaCheckCircle className="text-emerald-400" />

              <h3 className="font-semibold text-white">
                Your Skills
              </h3>

            </div>

            {loading ? (

              <p className="text-sm text-slate-500">
                Loading your skills...
              </p>

            ) : skills.length > 0 ? (

              <div className="flex flex-wrap gap-2">

                {skills.map((skill, index) => (

                  <span
                    key={`${skill}-${index}`}
                    className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-sm font-medium text-emerald-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            ) : (

              <p className="text-sm leading-6 text-slate-500">
                No skills have been detected yet. Upload your resume to
                analyze your current skill set.
              </p>

            )}

          </div>

          {/* Missing Skills */}

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

            <div className="mb-5 flex items-center gap-2">

              <FaExclamationTriangle className="text-yellow-400" />

              <h3 className="font-semibold text-white">
                Skills to Develop
              </h3>

            </div>

            {loading ? (

              <p className="text-sm text-slate-500">
                Analyzing skill gaps...
              </p>

            ) : missingSkills.length > 0 ? (

              <div className="flex flex-wrap gap-2">

                {missingSkills.map((skill, index) => (

                  <span
                    key={`${skill}-${index}`}
                    className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 text-sm font-medium text-yellow-300"
                  >
                    + {skill}
                  </span>

                ))}

              </div>

            ) : (

              <p className="text-sm leading-6 text-slate-500">
                No major skill gaps were detected in your latest analysis.
              </p>

            )}

          </div>

        </div>

        {/* Recommendation */}

        {!loading && missingSkills.length > 0 && (

          <div className="mt-6 flex items-start gap-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <FaLightbulb />
            </div>

            <div>

              <h3 className="font-semibold text-white">
                Recommended Next Step
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Focus on developing{" "}
                <span className="font-medium text-cyan-400">
                  {missingSkills.slice(0, 3).join(", ")}
                </span>{" "}
                to strengthen your resume and improve your career readiness.
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default SkillGapOverview;