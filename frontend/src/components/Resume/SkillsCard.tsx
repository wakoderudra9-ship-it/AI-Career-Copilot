import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";
import SkillBadge from "../Common/SkillBadge";

interface SkillsCardProps {
  title: string;
  skills: string[];
  variant?: "primary" | "danger";
}

function SkillsCard({
  title,
  skills,
  variant = "primary",
}: SkillsCardProps) {
  return (
    <Card>
      <SectionTitle title={title} />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge
            key={index}
            skill={skill}
            variant={variant}
          />
        ))}
      </div>
    </Card>
  );
}

export default SkillsCard;