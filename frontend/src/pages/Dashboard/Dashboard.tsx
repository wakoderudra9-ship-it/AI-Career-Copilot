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
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex justify-between items-center mb-10">
          <DashboardHeader
            name={user?.full_name ?? ""}
          />

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>

        <DashboardGrid />
      </div>
    </div>
  );
}

export default Dashboard;