import { useState } from "react";
import toast from "react-hot-toast";

import { generateResumePDF } from "../../services/pdfService";
import { uploadResume } from "../../services/resumeService";

import UploadBox from "../../components/Resume/UploadBox";
import LoadingSpinner from "../../components/Resume/LoadingSpinner";
import AnalysisGrid from "../../components/Resume/AnalysisGrid";
import ATSScoreCard from "../../components/Resume/ATSScoreCard";
import ResumeScoreCard from "../../components/Resume/ResumeScoreCard";
import ResumeHealthCard from "../../components/Resume/ResumeHealthCard";
import SectionScores from "../../components/Resume/SectionScores";
import SkillsCard from "../../components/Resume/SkillsCard";
import StrengthsCard from "../../components/Resume/StrengthsCard";
import WeaknessesCard from "../../components/Resume/WeaknessesCard";
import SuggestionsCard from "../../components/Resume/SuggestionsCard";

import type { ResumeAnalysisResponse } from "../../types/resume";

function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] =
    useState<ResumeAnalysisResponse | null>(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const result = await uploadResume(selectedFile);

      setAnalysisResult(result);

      toast.success("Resume analyzed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Resume upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">

      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <div className="mb-10 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 shadow-2xl">

          <h1 className="text-5xl font-extrabold text-white">
            Resume Analyzer
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-white/90">
            Upload your resume and receive a complete AI-powered report,
            ATS compatibility score, strengths, weaknesses, missing skills,
            and personalized improvement suggestions.
          </p>

        </div>

        {/* Upload Card */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

          <UploadBox onFileChange={setSelectedFile} />

          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-6">

            <h3 className="text-lg font-semibold text-white">
              Selected Resume
            </h3>

            <p className="mt-3 break-all text-cyan-400">
              {selectedFile
                ? selectedFile.name
                : "No file selected"}
            </p>

            <button
              onClick={handleUpload}
              disabled={loading}
              className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:bg-slate-700"
            >
              {loading
                ? "Analyzing Resume..."
                : "Analyze Resume"}
            </button>

          </div>

          {loading && (
            <div className="mt-8">
              <LoadingSpinner />
            </div>
          )}

        </div>

        {/* Results */}

        {analysisResult && (
          <div className="mt-12">

            <AnalysisGrid>

              <div className="grid gap-6 md:grid-cols-2">
                <ATSScoreCard
                  score={analysisResult.analysis.ats_score}
                />

                <ResumeScoreCard
                  score={analysisResult.analysis.resume_score}
                />
              </div>

              <ResumeHealthCard
                resumeScore={analysisResult.analysis.resume_score}
                atsScore={analysisResult.analysis.ats_score}
                sectionScores={analysisResult.analysis.section_scores}
              />

              <SectionScores
                scores={analysisResult.analysis.section_scores}
              />

              <div className="grid gap-6 md:grid-cols-2">

                <SkillsCard
                  title="Skills"
                  skills={analysisResult.analysis.skills}
                />

                <SkillsCard
                  title="Missing Skills"
                  skills={analysisResult.analysis.missing_skills}
                  variant="danger"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <StrengthsCard
                  strengths={analysisResult.analysis.strengths}
                />

                <WeaknessesCard
                  weaknesses={analysisResult.analysis.weaknesses}
                />

              </div>

              <SuggestionsCard
                suggestions={
                  analysisResult.analysis
                    .improvement_suggestions
                }
              />

              <div className="mt-10 flex justify-center">

                <button
                  onClick={() =>
                    generateResumePDF(analysisResult)
                  }
                  className="rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  📄 Download Professional PDF Report
                </button>

              </div>

            </AnalysisGrid>

          </div>
        )}

      </div>

    </div>
  );
}

export default ResumeUpload;