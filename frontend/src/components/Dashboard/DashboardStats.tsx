import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaFileAlt,
  FaBrain,
} from "react-icons/fa";

import { getLatestResumeAnalysis } from "../../services/resumeService";

interface ResumeAnalysis {
  resume_score?: number;
  ats_score?: number;
  skills?: string[];
}

function DashboardStats() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestAnalysis = async () => {
      try {
        const data = await getLatestResumeAnalysis();
        setAnalysis(data.analysis);
      } catch {
        console.log("No resume analysis available yet.");
        setAnalysis(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestAnalysis();
  }, []);

  const stats = [
    {
      title: "ATS Score",
      value: analysis?.ats_score ?? "--",
      description: analysis
        ? "Latest resume analysis"
        : "Not analyzed yet",
      icon: <FaChartLine />,
      iconStyle: "bg-green-500/10 text-green-400",
    },
    {
      title: "Resume Score",
      value: analysis?.resume_score ?? "--",
      description: analysis
        ? "Latest resume analysis"
        : "Not analyzed yet",
      icon: <FaFileAlt />,
      iconStyle: "bg-cyan-500/10 text-cyan-400",
    },
    {
      title: "Skills Detected",
      value: analysis?.skills?.length ?? "--",
      description: analysis
        ? "Skills found in your resume"
        : "Upload a resume to analyze",
      icon: <FaBrain />,
      iconStyle: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <section className="mb-10">

      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Career Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your latest career intelligence at a glance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
          >

            <div className="flex items-start justify-between">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.iconStyle}`}
              >
                {stat.icon}
              </div>

            </div>

            <div className="mt-6">

              <p className="text-sm font-medium text-slate-400">
                {stat.title}
              </p>

              <p className="mt-1 text-4xl font-bold text-white">
                {loading ? "..." : stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {loading
                  ? "Loading latest analysis..."
                  : stat.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DashboardStats;