interface Props {
  onFileChange: (file: File | null) => void;
}

function UploadBox({ onFileChange }: Props) {
  return (
    <label className="mt-8 flex flex-col items-center justify-center border-2 border-dashed border-cyan-500 rounded-xl p-12 cursor-pointer hover:bg-slate-800 transition">

      <h2 className="text-2xl font-semibold text-white">
        Click to upload a PDF
      </h2>

      <p className="text-slate-400 mt-3">
        PDF files only
      </p>

      <input
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onFileChange(e.target.files[0]);
          }
        }}
      />
    </label>
  );
}

export default UploadBox;