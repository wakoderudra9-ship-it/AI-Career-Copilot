import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import FadeIn from "../../animations/FadeIn";

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
  const navigate = useNavigate();

  const scrollToCareerRoadmap = () => {
    const roadmapSection = document.getElementById("career-roadmap");

    if (roadmapSection) {
      roadmapSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = [
    {
      title: "Resume Analyzer",
      description:
        "Upload your resume and receive AI-powered feedback, ATS score, and improvement suggestions.",
      icon: <FaFileAlt />,
      color: "from-cyan-500 to-blue-600",
      action: () => navigate("/resume"),
      active: true,
    },
    {
      title: "ATS Score",
      description:
        "Measure how recruiter-friendly your resume is.",
      icon: <FaChartLine />,
      color: "from-green-500 to-emerald-600",
      action: () => navigate("/resume"),
      active: true,
    },
    {
      title: "Job Matcher",
      description:
        "Find jobs that match your skills and experience.",
      icon: <FaBriefcase />,
      color: "from-purple-500 to-indigo-600",
      action: () => navigate("/job-matcher"),
      active: true,
    },
    {
      title: "Cover Letter",
      description:
        "Generate personalized AI cover letters instantly.",
      icon: <FaPenFancy />,
      color: "from-orange-500 to-red-500",
      active: false,
    },
    {
      title: "Mock Interview",
      description:
        "Practice interview questions with AI guidance.",
      icon: <FaMicrophone />,
      color: "from-pink-500 to-rose-600",
      active: false,
    },
    {
      title: "Career Roadmap",
      description:
        "Plan your learning journey and career growth.",
      icon: <FaRoad />,
      color: "from-yellow-500 to-amber-600",
      action: scrollToCareerRoadmap,
      active: true,
    },
    {
      title: "Profile",
      description:
        "Manage your personal information and preferences.",
      icon: <FaUser />,
      color: "from-sky-500 to-cyan-600",
      active: false,
    },
    {
      title: "Settings",
      description:
        "Customize your AI Career Copilot experience.",
      icon: <FaCog />,
      color: "from-slate-500 to-slate-700",
      active: false,
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {features.map((feature, index) => (
        <FadeIn
          key={feature.title}
          delay={index * 0.12}
        >
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            onClick={
              feature.active
                ? feature.action
                : undefined
            }
            badge={
              feature.active
                ? "Available"
                : "Coming Soon"
            }
            gradient={feature.color}
            disabled={!feature.active}
          />
        </FadeIn>
      ))}
    </div>
  );
}

export default DashboardGrid;