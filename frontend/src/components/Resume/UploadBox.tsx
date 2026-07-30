import { useRef } from "react";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";

interface Props {
  onFileChange: (file: File | null) => void;
}

function UploadBox({ onFileChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="group cursor-pointer rounded-3xl border-2 border-dashed border-cyan-500/60 bg-slate-900/60 p-12 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800/70"
      >
        <div className="flex flex-col items-center text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10 transition-transform duration-300 group-hover:scale-110">
            <FaCloudUploadAlt className="text-5xl text-cyan-400" />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Upload Your Resume
          </h2>

          <p className="mt-4 max-w-xl text-slate-400">
            Click anywhere in this area to choose your resume.
            AI Career Copilot will analyze your resume and generate
            ATS insights, skill analysis, strengths, weaknesses,
            and improvement suggestions.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-800 px-5 py-3">
            <FaFilePdf className="text-red-500 text-xl" />
            <span className="font-medium text-white">
              PDF files only
            </span>
          </div>

          <button
            type="button"
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Choose PDF
          </button>

        </div>
      </div>
    </>
  );
}

export default UploadBox;