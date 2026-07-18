interface Props {
  name: string;
}

function DashboardHeader({ name }: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-bold text-cyan-400">
        AI Career Copilot
      </h1>

      <p className="text-2xl text-white mt-6">
        Welcome back, <span className="text-cyan-400">{name}</span> 👋
      </p>

      <p className="text-slate-400 mt-3">
        Let's build your dream career using AI.
      </p>
    </div>
  );
}

export default DashboardHeader;