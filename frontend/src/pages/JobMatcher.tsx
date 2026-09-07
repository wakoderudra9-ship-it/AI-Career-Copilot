import { useState } from "react";
import type { FormEvent } from "react";

import {
  FaBriefcase,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaRobot,
  FaSpinner,
} from "react-icons/fa";

import api from "../api/axios";

interface AIAnalysis {
  fit_level: "Excellent" | "Good" | "Moderate" | "Low";
  experience_match: string;
  key_strengths: string[];
  skill_gaps: string[];
  interview_focus: string[];
  ai_recommendation: string;
}

interface JobMatchResult {
  match_score: number;
  matched_skills: string[];
  missing_skills: string[];
  recommendation: string;
  ai_analysis: AIAnalysis;
}

function JobMatcher() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<JobMatchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!jobDescription.trim()) {
      setError("Please enter a job description.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const token = localStorage.getItem("token");

      const response = await api.post(
        "/job/match",
        {
          description: jobDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Job matching failed:", error);

      setError(
        "Unable to analyze the job description. Please make sure you have uploaded a resume and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent Match";
    if (score >= 60) return "Good Match";
    if (score >= 40) return "Moderate Match";

    return "Low Match";
  };

  const getScoreStyles = (score: number) => {
    if (score >= 80) {
      return {
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        background: "bg-emerald-500/5",
      };
    }

    if (score >= 60) {
      return {
        text: "text-cyan-400",
        border: "border-cyan-500/20",
        background: "bg-cyan-500/5",
      };
    }

    if (score >= 40) {
      return {
        text: "text-yellow-400",
        border: "border-yellow-500/20",
        background: "bg-yellow-500/5",
      };
    }

    return {
      text: "text-red-400",
      border: "border-red-500/20",
      background: "bg-red-500/5",
    };
  };

  const scoreStyles = result
    ? getScoreStyles(result.match_score)
    : getScoreStyles(0);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="mb-10">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <FaRobot />
            AI Career Tool
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Job Matcher
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
            Compare your latest resume with a job description and discover
            your match score, skill gaps, strengths, and interview focus.
          </p>

        </div>

        {/* Job Description Form */}

        <div className="mb-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

          <div className="mb-5 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <FaBriefcase />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Job Description
              </h2>

              <p className="text-sm text-slate-500">
                Paste the job description you want to compare against your
                resume.
              </p>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <textarea
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the complete job description here..."
              className="min-h-[220px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-5 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
            />

            {error && (
              <p className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}

            <div className="mt-5 flex justify-end">

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FaRobot />
                    Analyze Job Match
                  </>
                )}
              </button>

            </div>

          </form>

        </div>

        {/* Results */}

        {result && (

          <div className="space-y-8">

            {/* Match Overview */}

            <div
              className={`rounded-2xl border ${scoreStyles.border} ${scoreStyles.background} p-7 shadow-xl`}
            >

              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Resume Match
                  </p>

                  <h2
                    className={`mt-2 text-4xl font-extrabold ${scoreStyles.text}`}
                  >
                    {result.match_score}%
                  </h2>

                  <p
                    className={`mt-1 text-lg font-semibold ${scoreStyles.text}`}
                  >
                    {getScoreLabel(result.match_score)}
                  </p>

                </div>

                <div className="max-w-xl">

                  <p className="text-sm leading-7 text-slate-400">
                    {result.recommendation}
                  </p>

                </div>

              </div>

            </div>

            {/* Skills */}

            <div className="grid gap-6 lg:grid-cols-2">

              {/* Matched Skills */}

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <div className="mb-5 flex items-center gap-3">

                  <FaCheckCircle className="text-emerald-400" />

                  <h2 className="font-semibold text-white">
                    Matching Skills
                  </h2>

                </div>

                {result.matched_skills.length > 0 ? (

                  <div className="flex flex-wrap gap-2">

                    {result.matched_skills.map((skill, index) => (

                      <span
                        key={`${skill}-${index}`}
                        className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-sm font-medium text-emerald-300"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                ) : (

                  <p className="text-sm text-slate-500">
                    No matching technical skills were detected.
                  </p>

                )}

              </div>

              {/* Missing Skills */}

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                <div className="mb-5 flex items-center gap-3">

                  <FaExclamationTriangle className="text-yellow-400" />

                  <h2 className="font-semibold text-white">
                    Missing Skills
                  </h2>

                </div>

                {result.missing_skills.length > 0 ? (

                  <div className="flex flex-wrap gap-2">

                    {result.missing_skills.map((skill, index) => (

                      <span
                        key={`${skill}-${index}`}
                        className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 text-sm font-medium text-yellow-300"
                      >
                        + {skill}
                      </span>

                    ))}

                  </div>

                ) : (

                  <p className="text-sm text-slate-500">
                    No major skill gaps were detected.
                  </p>

                )}

              </div>

            </div>

            {/* AI Analysis */}

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

              <div className="mb-7 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaRobot />
                </div>

                <div>

                  <h2 className="font-semibold text-white">
                    AI Match Analysis
                  </h2>

                  <p className="text-sm text-slate-500">
                    Gemini-powered insights based on your resume and the job.
                  </p>

                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                {/* Fit Level */}

                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Fit Level
                  </p>

                  <p className="mt-2 text-2xl font-bold text-cyan-400">
                    {result.ai_analysis.fit_level}
                  </p>

                </div>

                {/* Experience */}

                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Experience Match
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {result.ai_analysis.experience_match}
                  </p>

                </div>

              </div>

              {/* Strengths */}

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                <div className="mb-4 flex items-center gap-2">

                  <FaCheckCircle className="text-emerald-400" />

                  <h3 className="font-semibold text-white">
                    Key Strengths
                  </h3>

                </div>

                <ul className="space-y-2">

                  {result.ai_analysis.key_strengths.map(
                    (strength, index) => (
                      <li
                        key={`${strength}-${index}`}
                        className="text-sm leading-6 text-slate-400"
                      >
                        ✓ {strength}
                      </li>
                    )
                  )}

                </ul>

              </div>

              {/* Interview Focus */}

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                <div className="mb-4 flex items-center gap-2">

                  <FaBriefcase className="text-cyan-400" />

                  <h3 className="font-semibold text-white">
                    Interview Focus
                  </h3>

                </div>

                <ul className="space-y-2">

                  {result.ai_analysis.interview_focus.map(
                    (topic, index) => (
                      <li
                        key={`${topic}-${index}`}
                        className="text-sm leading-6 text-slate-400"
                      >
                        • {topic}
                      </li>
                    )
                  )}

                </ul>

              </div>

              {/* AI Recommendation */}

              <div className="mt-6 flex items-start gap-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaLightbulb />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    AI Recommendation
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {result.ai_analysis.ai_recommendation}
                  </p>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}

export default JobMatcher;