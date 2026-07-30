interface Props {
  name: string;
}

function DashboardHeader({ name }: Props) {
  const greetingName = name.trim() || "Developer";

  return (
    <div className="space-y-4">

      <div className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 px-4 py-2">
        <span className="text-cyan-300 text-sm font-semibold tracking-wide uppercase">
          AI Powered Career Assistant
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        <span className="text-white">AI Career </span>
        <span className="text-cyan-400">Copilot</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        Welcome back,
        <span className="text-cyan-400"> {greetingName}</span> 👋
      </h2>

      <p className="max-w-2xl text-slate-400 text-lg leading-8">
        Upload your resume, receive detailed AI insights, improve your ATS
        score, identify missing skills, and generate a professional resume
        analysis report in just a few seconds.
      </p>

    </div>
  );
}

export default DashboardHeader;