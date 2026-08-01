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
  const isPrimary = variant === "primary";

  return (
    <Card>

      <div className="flex items-center justify-between mb-6">

        <SectionTitle title={title} />

        <div
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            isPrimary
              ? "bg-cyan-500/15 text-cyan-300"
              : "bg-red-500/15 text-red-300"
          }`}
        >
          {skills.length} {skills.length === 1 ? "Skill" : "Skills"}
        </div>

      </div>

      {skills.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/40 p-8 text-center">

          <p className="text-lg text-slate-400">
            No skills detected.
          </p>

        </div>

      ) : (

        <div className="flex flex-wrap gap-3">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="transition-transform duration-300 hover:scale-105"
            >
              <SkillBadge
                skill={skill}
                variant={variant}
              />
            </div>

          ))}

        </div>

      )}

      <div className="mt-8 rounded-2xl bg-slate-800/50 p-4">

        <p className="text-sm text-slate-400 leading-7">

          {isPrimary
            ? "These are the technical and professional skills identified from your resume. Highlighting relevant skills improves ATS performance and recruiter visibility."
            : "These skills were not detected in your resume. Adding relevant missing skills can significantly improve your ATS score and increase your chances of getting shortlisted."}

        </p>

      </div>

    </Card>
  );
}

export default SkillsCard;