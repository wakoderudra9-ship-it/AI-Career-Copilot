import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import { getCurrentUser } from "../../services/authService";

import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardGrid from "../../components/Dashboard/DashboardGrid";

interface User {
  id: number;
  full_name: string;
  email: string;
}

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (error) {
        console.error(error as AxiosError);

        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchUser();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-10">

          <div>
            <DashboardHeader
              name={user?.full_name ?? ""}
            />

            <p className="text-slate-400 mt-3 text-lg">
              Analyze resumes, improve ATS scores and build a stronger career profile with AI.
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Logout
          </button>

        </div>

        {/* Welcome Banner */}

        <div className="mb-10 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 shadow-2xl">

          <h2 className="text-3xl font-bold mb-3">
            🚀 AI Career Copilot
          </h2>

          <p className="text-lg text-white/90 max-w-3xl">
            Upload your resume, receive AI-powered feedback,
            improve ATS compatibility, discover missing skills,
            and download a professional multi-page analysis report.
          </p>

        </div>

        {/* Main Dashboard */}

        <DashboardGrid />

      </div>

    </div>
  );
}

export default Dashboard;