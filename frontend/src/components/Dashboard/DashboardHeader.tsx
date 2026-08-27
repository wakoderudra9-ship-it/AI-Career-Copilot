interface Props {
  name: string;
}

function DashboardHeader({ name }: Props) {
  const greetingName = name.trim() || "Developer";

  const hour = new Date().getHours();

  let greeting = "Good evening";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  }

  return (
    <div className="flex w-full items-center justify-between gap-6">

      {/* Greeting */}

      <div>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
          Career Dashboard
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {greeting}, {greetingName} 👋
        </h1>

        <p className="mt-2 text-base text-slate-400">
          Here's an overview of your career progress.
        </p>
      </div>

      {/* Notification */}

      <button
        type="button"
        aria-label="Notifications"
        className="hidden h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-cyan-500/40 hover:bg-slate-800 hover:text-cyan-400 sm:flex"
      >
        <span className="text-lg">🔔</span>
      </button>

    </div>
  );
}

export default DashboardHeader;