function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-6 text-cyan-400 text-lg font-semibold">
        AI is analyzing your resume...
      </p>

      <p className="text-slate-400 mt-2">
        This may take a few seconds.
      </p>
    </div>
  );
}

export default LoadingSpinner;