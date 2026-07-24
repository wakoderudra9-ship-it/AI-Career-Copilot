interface SkillBadgeProps {
  skill: string;
  variant?: "primary" | "danger";
}

function SkillBadge({
  skill,
  variant = "primary",
}: SkillBadgeProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      : "bg-red-500/20 text-red-300 border-red-500/30";

  return (
    <span
      className={`
        inline-flex
        items-center
        px-4
        py-2
        rounded-full
        border
        text-sm
        font-medium
        ${styles}
        transition-all
        duration-300
        hover:scale-105
      `}
    >
      {skill}
    </span>
  );
}

export default SkillBadge;