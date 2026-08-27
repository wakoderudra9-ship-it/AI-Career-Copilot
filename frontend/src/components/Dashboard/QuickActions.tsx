import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaRobot,
  FaRoad,
  FaMicrophone,
} from "react-icons/fa";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Analyze Resume",
      description: "Get AI-powered resume insights.",
      icon: <FaFileAlt />,
      iconStyle: "bg-cyan-500/10 text-cyan-400",
      active: true,
      action: () => navigate("/resume"),
    },
    {
      title: "Career AI",
      description: "Get personalized career guidance.",
      icon: <FaRobot />,
      iconStyle: "bg-purple-500/10 text-purple-400",
      active: false,
    },
    {
      title: "Career Roadmap",
      description: "Plan your learning and career journey.",
      icon: <FaRoad />,
      iconStyle: "bg-yellow-500/10 text-yellow-400",
      active: false,
    },
    {
      title: "Mock Interview",
      description: "Practice interviews with AI.",
      icon: <FaMicrophone />,
      iconStyle: "bg-pink-500/10 text-pink-400",
      active: false,
    },
  ];

  return (
    <section className="mb-10">

      {/* Section Header */}

      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Jump directly into your career tools.
        </p>
      </div>

      {/* Action Cards */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => (

          <button
            key={action.title}
            type="button"
            onClick={action.active ? action.action : undefined}
            disabled={!action.active}
            aria-label={
              action.active
                ? `Open ${action.title}`
                : `${action.title} coming soon`
            }
            className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
              action.active
                ? "border-slate-800 bg-slate-900/70 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/5"
                : "cursor-not-allowed border-slate-900 bg-slate-950/50 opacity-60"
            }`}
          >

            {/* Subtle active glow */}

            {action.active && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}

            {/* Icon + Status */}

            <div className="relative flex items-start justify-between">

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${action.iconStyle}`}
              >
                {action.icon}
              </div>

              {!action.active && (
                <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  Soon
                </span>
              )}

              {action.active && (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                  Available
                </span>
              )}

            </div>

            {/* Content */}

            <div className="relative">

              <h3 className="mt-5 font-semibold text-white">
                {action.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                {action.description}
              </p>

              {/* Action Label */}

              {action.active && (
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-cyan-400 transition-transform duration-200 group-hover:translate-x-1">
                  Open tool
                  <span>→</span>
                </div>
              )}

            </div>

          </button>

        ))}

      </div>

    </section>
  );
}

export default QuickActions;