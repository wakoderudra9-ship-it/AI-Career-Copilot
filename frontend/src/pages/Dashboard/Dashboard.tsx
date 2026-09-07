import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import { getCurrentUser } from "../../services/authService";

import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardStats from "../../components/Dashboard/DashboardStats";
import CareerReadinessCard from "../../components/Dashboard/CareerReadinessCard";
import QuickActions from "../../components/Dashboard/QuickActions";
import AICareerInsight from "../../components/Dashboard/AICareerInsight";
import SkillGapOverview from "../../components/Dashboard/SkillGapOverview";
import CareerRoadmap from "../../components/Dashboard/CareerRoadmap";
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
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}

      <DashboardSidebar onLogout={logout} />

      {/* Main Content */}

      <main className="min-h-screen pl-72">

        <div className="mx-auto max-w-7xl px-8 py-10">

          {/* Header */}

          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <DashboardHeader
              name={user?.full_name ?? ""}
            />

          </div>

          {/* Dashboard Content */}

          <DashboardStats />

          <CareerReadinessCard />

          <QuickActions />

          <AICareerInsight />

          <SkillGapOverview />

          <CareerRoadmap />

          <DashboardGrid />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;