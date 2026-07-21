import AnalysisGrid from "../../components/Resume/AnalysisGrid";
import LoadingSpinner from "../../components/Resume/LoadingSpinner";
import StrengthsCard from "../../components/Resume/StrengthsCard";
import WeaknessesCard from "../../components/Resume/WeaknessesCard";
import SuggestionsCard from "../../components/Resume/SuggestionsCard";
import SectionScores from "../../components/Resume/SectionScores";
import ResumeScoreCard from "../../components/Resume/ResumeScoreCard";
import { useState } from "react";
import UploadBox from "../../components/Resume/UploadBox";
import { uploadResume } from "../../services/resumeService";
import type { ResumeAnalysisResponse } from "../../types/resume";
import ATSScoreCard from "../../components/Resume/ATSScoreCard";

function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [analysisResult, setAnalysisResult] =
    useState<ResumeAnalysisResponse | null>(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF first.");
      return;
    }

    try {
      setLoading(true);

      const result = await uploadResume(selectedFile);

      console.log(result);

      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      alert("Resume upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-cyan-400">
          Resume Analyzer
        </h1>

        <p className="text-slate-400 mt-4">
          Upload your resume and let AI analyze it.
        </p>

        <UploadBox onFileChange={setSelectedFile} />

        {selectedFile && (
          <div className="mt-6 rounded-lg bg-slate-800 p-4">
            <h3 className="text-white font-semibold">
              Selected File
            </h3>

            <p className="text-cyan-400 mt-2">
              {selectedFile.name}
            </p>

            <button
              onClick={handleUpload}
              disabled={loading}
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-800 px-6 py-3 rounded-xl font-semibold text-white"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>
        )}

        {loading && <LoadingSpinner />}

{analysisResult && (
  <AnalysisGrid>
    {/* Score Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ATSScoreCard
        score={analysisResult.analysis.ats_score}
      />

      <ResumeScoreCard
        score={analysisResult.analysis.resume_score}
      />
    </div>

    {/* Section Scores */}
    <SectionScores
      scores={analysisResult.analysis.section_scores}
    />

    {/* Strengths & Weaknesses */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StrengthsCard
        strengths={analysisResult.analysis.strengths}
      />

      <WeaknessesCard
        weaknesses={analysisResult.analysis.weaknesses}
      />
    </div>

    {/* AI Suggestions */}
    <SuggestionsCard
      suggestions={analysisResult.analysis.improvement_suggestions}
    />
  </AnalysisGrid>
)}
      </div>
    </div>
  );
}

export default ResumeUpload;