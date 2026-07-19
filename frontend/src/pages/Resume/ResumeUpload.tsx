import { useState } from "react";
import UploadBox from "../../components/Resume/UploadBox";
import { uploadResume } from "../../services/resumeService";

function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<Record<string, unknown> | null>(null);

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

        {analysisResult && (
          <div className="mt-8 bg-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              AI Analysis
            </h2>

            <pre className="text-slate-300 whitespace-pre-wrap">
              {JSON.stringify(analysisResult, null, 2)}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}

export default ResumeUpload;