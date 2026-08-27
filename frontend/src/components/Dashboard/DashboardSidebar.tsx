import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaMicrophone,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

interface Props {
  onLogout: () => void;
}

function DashboardSidebar({ onLogout }: Props) {
  const navigate = useNavigate();

  const navigationItems = [
    {
      label: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
      active: true,
    },
    {
      label: "Resume",
      icon: <FaFileAlt />,
      path: "/resume",
    },
    {
      label: "Career AI",
      icon: <FaRobot />,
      path: "/career-ai",
    },
    {
      label: "Jobs",
      icon: <FaBriefcase />,
      path: "/jobs",
    },
    {
      label: "Interviews",
      icon: <FaMicrophone />,
      path: "/interviews",
    },
    {
      label: "Analytics",
      icon: <FaChartLine />,
      path: "/analytics",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950/95 px-5 py-6 backdrop-blur-xl">

      {/* Logo */}

      <div className="mb-10 px-3">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-left"
        >
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">AI Career </span>
            <span className="text-cyan-400">Copilot</span>
          </h1>

          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Career Intelligence
          </p>
        </button>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Workspace
        </p>

        {navigationItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
              item.active
                ? "bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/5"
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            <span
              className={`text-lg transition-transform duration-200 group-hover:scale-110 ${
                item.active
                  ? "text-cyan-400"
                  : "text-slate-500 group-hover:text-cyan-400"
              }`}
            >
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>

            {item.active && (
              <span className="ml-auto h-2 w-2 rounded-full bg-cyan-400" />
            )}
          </button>
        ))}

      </nav>

      {/* Bottom Navigation */}

      <div className="space-y-2 border-t border-slate-800 pt-5">

        <button
          onClick={() => navigate("/profile")}
          className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-slate-400 transition-all duration-200 hover:bg-slate-900 hover:text-white"
        >
          <FaUser className="text-slate-500 transition-colors group-hover:text-cyan-400" />

          <span className="font-medium">
            Profile
          </span>
        </button>

        <button
          onClick={() => navigate("/settings")}
          className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-slate-400 transition-all duration-200 hover:bg-slate-900 hover:text-white"
        >
          <FaCog className="text-slate-500 transition-colors group-hover:text-cyan-400" />

          <span className="font-medium">
            Settings
          </span>
        </button>

        <button
          onClick={onLogout}
          className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-slate-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
        >
          <FaSignOutAlt className="text-slate-500 transition-colors group-hover:text-red-400" />

          <span className="font-medium">
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default DashboardSidebar;