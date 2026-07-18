import FeatureCard from "./FeatureCard";

import {
  FaFileAlt,
  FaChartLine,
  FaBriefcase,
  FaPenFancy,
  FaMicrophone,
  FaRoad,
  FaUser,
  FaCog,
} from "react-icons/fa";

function DashboardGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <FeatureCard
        title="Resume Analyzer"
        description="Analyze your resume with AI."
        icon={<FaFileAlt />}
      />

      <FeatureCard
        title="ATS Score"
        description="Check ATS compatibility."
        icon={<FaChartLine />}
      />

      <FeatureCard
        title="Job Matcher"
        description="Find jobs that fit your profile."
        icon={<FaBriefcase />}
      />

      <FeatureCard
        title="Cover Letter"
        description="Generate AI cover letters."
        icon={<FaPenFancy />}
      />

      <FeatureCard
        title="Mock Interview"
        description="Practice interview questions."
        icon={<FaMicrophone />}
      />

      <FeatureCard
        title="Career Roadmap"
        description="Plan your future career."
        icon={<FaRoad />}
      />

      <FeatureCard
        title="Profile"
        description="Manage your profile."
        icon={<FaUser />}
      />

      <FeatureCard
        title="Settings"
        description="Application preferences."
        icon={<FaCog />}
      />
    </div>
  );
}

export default DashboardGrid;