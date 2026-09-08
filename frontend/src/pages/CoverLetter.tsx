import { useState } from "react";
import type { FormEvent } from "react";

import {
  FaCopy,
  FaCheck,
  FaFileAlt,
  FaRobot,
  FaSpinner,
  FaPenFancy,
} from "react-icons/fa";

import { generateCoverLetter } from "../services/coverLetterService";

function CoverLetter() {
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
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
      setCoverLetter("");
      setCopied(false);

      const response = await generateCoverLetter(jobDescription);

      setCoverLetter(response.cover_letter);
    } catch (error) {
      console.error("Cover letter generation failed:", error);

      setError(
        "Unable to generate your cover letter. Please make sure you have uploaded a resume and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!coverLetter) {
      return;
    }

    try {
      await navigator.clipboard.writeText(coverLetter);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      setError("Unable to copy the cover letter.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            <FaRobot />
            AI Career Tool
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            AI Cover Letter Generator
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
            Generate a personalized cover letter using your latest resume and
            the job description you are applying for.
          </p>
        </div>

        {/* Job Description Form */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
              <FaFileAlt />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Target Job Description
              </h2>

              <p className="text-sm text-slate-500">
                Paste the job description you want your cover letter tailored
                to.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the complete job description here..."
              className="min-h-[240px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-5 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20"
            />

            {error && (
              <p className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-600">
                Your latest uploaded resume will be used automatically.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FaPenFancy />
                    Generate Cover Letter
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Generated Cover Letter */}
        {coverLetter && (
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaRobot />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Generated Cover Letter
                  </h2>

                  <p className="text-sm text-slate-500">
                    Personalized using your resume and target job.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <FaCopy />
                    Copy Letter
                  </>
                )}
              </button>
            </div>

            {/* Letter Paper */}
            <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-6 md:p-10">
              <div className="mx-auto max-w-4xl">
                <div className="whitespace-pre-wrap text-sm leading-8 text-slate-300 md:text-base">
                  {coverLetter}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-600">
              <FaCheck className="text-emerald-500" />
              AI-generated using your resume information and target job
              requirements.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoverLetter;