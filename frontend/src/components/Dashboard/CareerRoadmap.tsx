import { useEffect, useState } from "react";
import {
  FaFlagCheckered,
  FaRoad,
  FaRocket,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import { getLatestResumeAnalysis } from "../../services/resumeService";

interface RoadmapStep {
  title: string;
  description: string;
  skills: string[];
  priority: "High" | "Medium" | "Low";
}

interface CareerRoadmapData {
  career_goal: string;
  summary: string;
  steps: RoadmapStep[];
}

function CareerRoadmap() {
  const [roadmap, setRoadmap] = useState<CareerRoadmapData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const data = await getLatestResumeAnalysis();

        setRoadmap(data.analysis?.career_roadmap ?? null);
      } catch (error) {
        console.error("Failed to load career roadmap:", error);
        setRoadmap(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, []);

  const getPriorityStyles = (
    priority: RoadmapStep["priority"]
  ) => {
    if (priority === "High") {
      return "border-cyan-400/20 bg-cyan-500/10 text-cyan-400";
    }

    if (priority === "Medium") {
      return "border-yellow-400/20 bg-yellow-500/10 text-yellow-400";
    }

    return "border-slate-700 bg-slate-800 text-slate-400";
  };

  return (
    <section
      id="career-roadmap"
      className="mb-10 scroll-mt-8"
    >
      {/* Section Header */}

      <div className="mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
            <FaRoad />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Career Roadmap
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your personalized AI career path based on your resume, skills,
              and career goals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Card */}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

        {loading ? (

          /* Loading State */

          <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/40 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <FaRoad />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Building Your Career Roadmap
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Analyzing your resume and generating personalized career
                recommendations...
              </p>
            </div>
          </div>

        ) : roadmap ? (

          <>

            {/* AI Roadmap Summary */}

            <div className="mb-8 flex items-start gap-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <FaFlagCheckered />
              </div>

              <div className="flex-1">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Career Goal
                    </p>

                    <h3 className="font-semibold text-white">
                      {roadmap.career_goal}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    AI Personalized
                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {roadmap.summary}
                </p>

              </div>

            </div>

            {/* Roadmap Steps */}

            <div className="relative">

              {/* Vertical Timeline */}

              <div className="absolute left-5 top-5 hidden h-[calc(100%-40px)] w-px bg-slate-800 sm:block" />

              <div className="space-y-6">

                {roadmap.steps.map((step, index) => (

                  <div
                    key={`${step.title}-${index}`}
                    className="relative flex gap-4"
                  >

                    {/* Step Icon */}

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-cyan-400">

                      {index === roadmap.steps.length - 1 ? (
                        <FaRocket />
                      ) : (
                        <FaCheckCircle />
                      )}

                    </div>

                    {/* Step Content */}

                    <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Step {index + 1}
                          </p>

                          <h3 className="font-semibold text-white">
                            {step.title}
                          </h3>

                        </div>

                        <span
                          className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getPriorityStyles(
                            step.priority
                          )}`}
                        >
                          {step.priority} Priority
                        </span>

                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>

                      {/* Recommended Skills */}

                      {step.skills.length > 0 && (

                        <div className="mt-4">

                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Recommended Skills
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {step.skills.map((skill, skillIndex) => (

                              <span
                                key={`${skill}-${skillIndex}`}
                                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300"
                              >
                                {skill}
                              </span>

                            ))}

                          </div>

                        </div>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Bottom CTA */}

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <FaRocket />
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  Your next move 🚀
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Start with the highest-priority step, build practical
                  experience, and continue progressing through your
                  personalized roadmap.
                </p>

              </div>

            </div>

          </>

        ) : (

          /* Empty State */

          <div className="flex items-start gap-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5 p-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
              <FaExclamationTriangle />
            </div>

            <div>

              <h3 className="font-semibold text-white">
                Career Roadmap Unavailable
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Upload and analyze a resume to generate your personalized
                AI career roadmap.
              </p>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}

export default CareerRoadmap;